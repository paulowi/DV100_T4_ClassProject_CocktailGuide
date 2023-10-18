
// Run code when the document loads
$(document).ready(function() {

    // ---------------------------------------------------------------------------------------------------
    // Sign up form
    // ---------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------
    // On Submit, prevent the default form submission
    $(this).find(".password-invalid").hide();
    $('#signupForm').submit(function(event) {
        event.preventDefault();
        if (this.checkValidity() === false) {
            event.stopPropagation();
        }
        else if (this.checkValidity() === true && $("#password").val() === $("#confirm-password").val()) {
             // Add any submission code here, like saving the data to localStorage
            
             window.location.href = "pages/browse.html"; 
             $(this).find(".password-invalid").hide();
        }
        else{
           
           event.stopPropagation();
             $(this).find("#confirm-password").addClass("password-problem");
             $(this).find(".password-invalid").show();
              showPasswordError("#confirm-password");
              
        }
        $(this).addClass('was-validated');
        
    });
});
showPasswordError = (passwordId) => {
    $(passwordId).keyup(function(){
        if ($("#password").val() !== $("#confirm-password").val()){
          $(passwordId).addClass("password-problem");
        $(".password-invalid").show();
        } else {
            $(passwordId).removeClass("password-problem");
            $(".password-invalid").hide();
        }
    })
}