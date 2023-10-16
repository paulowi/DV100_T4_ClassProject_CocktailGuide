$(document).ready(function() {
    $('#signupForm').submit(function(event) {
      event.preventDefault();

      if (this.checkValidity() === false) {
        event.stopPropagation();
      } else {
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const isValidPassword = isPasswordValid(password);

        if (!isValidPassword) {
          $('#password').get(0).setCustomValidity('Password must contain at least 6 characters, 1 number, 1 uppercase letter, and 1 lowercase letter.');
          this.reportValidity();
          return;
        }

        if (password !== confirmPassword) {
          $('#confirmPassword').get(0).setCustomValidity('Passwords do not match');
          this.reportValidity();
          return;
        }

      
        window.location.href = 'pages/browse.html';
      }

      $(this).addClass('was-validated');
    });

    function isPasswordValid(password) {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return passwordRegex.test(password);
    }
  });