//registraion.js
function userRegistration(){
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();

    $.ajax({
        url: "http://localhost:8080/api/v1/auth/register",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "name": name,
            "email": email,
            "password": password
        }),
        success: function(response) {
            console.log(response);
            localStorage.setItem("token", response.data.token);
            $("#message").text("Registration successful!").addClass("text-success");
        },
        error: function(error) {
            console.log(error);
            $("#message").text("Registration failed!").addClass("text-danger");
        }
    });
    return false;  // Prevent the form from submitting traditionally
}


