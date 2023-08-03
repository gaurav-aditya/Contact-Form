document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
        alert('Form submitted successfully!');
        contactForm.reset();
      }
    });
  
    function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return false;
      }
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
      }
  
      return true;
    }
  
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  