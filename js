document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    // Display a thank you message
    document.getElementById('form-status').innerText = `Thank you, ${name}, for reaching out! We'll get back to you soon.`;
  } else {
    document.getElementById('form-status').innerText = 'Please fill in all fields.';
  }
});