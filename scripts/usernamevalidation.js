function username() {
    var userN = localStorage.username;
    var localuserN = document.getElementById("username").value;
    if (userN != localuserN) {
        document.getElementById("test").innerHTML = "Please try Again";
    } else {
        window.document.location.href = "rentacar.html";

    }
}