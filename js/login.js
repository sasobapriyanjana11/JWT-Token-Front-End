//login.js
$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        userLogin(); 
    });
});

function userLogin() {
    let email = $("#email").val();
    let password = $("#password").val();

    $.ajax({
        url: "http://localhost:8080/api/v1/auth/authenticate",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "email": email,
            "password": password
        }),
        success: function(response) {
           
            console.log("Received token:", response.data.token);
            localStorage.setItem("token", response.data.token);
            console.log("Token stored:", localStorage.getItem("token"));
            window.location.href = "/pages/dashboard.html"; 
        },
        error: function(error) {
            console.log(error); 
        }
    });
}

