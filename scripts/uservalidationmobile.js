
localStorage.setItem("reloadpage", "0");

function username() {
    var userN = localStorage.username;
    var localuserN = document.getElementById("uservalidate").value;
    if (userN != localuserN) {
        document.getElementById("test").innerHTML = "Please try Again";
    } else {
        window.document.location.href = "#rentcarmobile";
        location.reload();
    }
}