document.addEventListener('DOMContentLoaded', function() {
  const dobInput = document.getElementById('dob');
  const today = new Date();
  
 
  const minDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());
  const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  
  dobInput.setAttribute('min', minDate.toISOString().split('T')[0]);
  dobInput.setAttribute('max', maxDate.toISOString().split('T')[0]);


  displayData();

  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      dob: document.getElementById('dob').value,
      acceptedTerms: document.getElementById('terms').checked
    };

  
    localStorage.setItem('formData', JSON.stringify(formData));
    
  
    displayData();
  });
});

function displayData() {
  const data = JSON.parse(localStorage.getItem('formData'));
  const tableBody = document.querySelector('#dataTable tbody');
  tableBody.innerHTML = ''; 

  if (data) {
    const row = `
      <tr>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.password}</td>
        <td>${data.dob}</td>
        <td>${data.acceptedTerms}</td>
      </tr>
    `;
    tableBody.insertAdjacentHTML('beforeend', row);
  }
}
