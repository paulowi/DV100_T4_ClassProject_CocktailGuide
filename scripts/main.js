$(document).ready(function () {
    // ----------------------------------------------------
    // Sign Up form
    // ----------------------------------

    $('#signupForm').submit(function (event) {
        event.preventDefault();
        if (this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            window.location.href = 'pages/browse.html';
        }
        $(this).addClass('was-validated');
    })
})