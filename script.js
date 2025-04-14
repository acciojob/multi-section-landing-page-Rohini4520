//your JS code here. If required.
const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      // Full Name
      const fullName = document.getElementById('fullName');
      const fullNameError = document.getElementById('fullNameError');
      if (fullName.value.trim() === '') {
        fullNameError.textContent = 'Full Name is required.';
        isValid = false;
      } else {
        fullNameError.textContent = '';
      }

      // Email
      const email = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Enter a valid email address.';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      // Phone (optional)
      const phone = document.getElementById('phone');
      const phoneError = document.getElementById('phoneError');
      const phonePattern = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
      if (phone.value && !phonePattern.test(phone.value)) {
        phoneError.textContent = 'Enter a valid phone number.';
        isValid = false;
      } else {
        phoneError.textContent = '';
      }

      // Message
      const message = document.getElementById('message');
      const messageError = document.getElementById('messageError');
      if (message.value.trim().length < 100) {
        messageError.textContent = 'Message must be at least 100 characters.';
        isValid = false;
      } else {
        messageError.textContent = '';
      }

      if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
      }
    });