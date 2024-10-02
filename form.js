document.addEventListener('DOMContentLoaded', function () {
  // Function to handle the click event on the "SEND" button
  function sendEmail() {
    // Get the form values
    var name = document.querySelector('.home-name').value;
    var email = document.querySelector('.home-email1').value;
    var message = document.querySelector('.home-message').value;

    // Simple validation flags
    var isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function (el) {
      el.remove();
    });

    // Name validation
    if (!name) {
      showError('home-name', 'Name is required');
      isValid = false;
    }

    // Email validation (basic format check)
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      showError('home-email1', 'Valid email is required');
      isValid = false;
    }

    // Message validation
    if (!message) {
      showError('home-message', 'Message is required');
      isValid = false;
    }

    // If validation passes, construct mailto link
    if (isValid) {
      var subject = encodeURIComponent('Inquiry from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
      window.location.href = 'mailto:dnaroadmarkings@gmail.com?subject=' + subject + '&body=' + body;
    }
  }

  // Function to show error messages
  function showError(inputClass, message) {
    var inputElement = document.querySelector('.' + inputClass);
    var errorElement = document.createElement('span');
    errorElement.classList.add('error');
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '12px';
    errorElement.textContent = message;
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
  }

  // Attach the event listener to the SEND button
  document.querySelector('.home-cta-btn2').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default action of the anchor tag
    sendEmail(); // Call the sendEmail function
  });
});

