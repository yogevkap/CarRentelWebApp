function checkStorageSupport() {
    if (!window.localStorage) {
        alert("Browser dont support local storage");
    }
}

//Save in live what user type in textbox
$(document).ready(function () {

    $(document).on('input', "#username", function () {
        localStorage.username = $('#username').val();
    });

    $(document).on('input', "#userid", function () {
        localStorage.userid = $('#userid').val();
    });

    $(document).on('input', "#useremail", function () {
        localStorage.useremail = $('#useremail').val();
    });

    $(document).on('input', "#landline", function () {
        localStorage.landline = $('#landline').val();
    });

    $(document).on('input', "#birth", function () {
        localStorage.birth = $('#birth').val();
    });

    $(document).on('input', "#carid", function () {
        localStorage.carid = $('#carid').val();
    });

});

function save() {
    var username = document.getElementById("username").value;
    localStorage.username = username;
    var id = document.getElementById("userid").value;
    localStorage.id = id;
    var email = document.getElementById("useremail").value;
    localStorage.email = email;
    var landline = document.getElementById("landline").value;
    localStorage.landline = landline;
    var cellphone = document.getElementById("cellphone").value;
    localStorage.cellphone = cellphone;
    var dateofbirth = document.getElementById("birth").value;
    localStorage.dateofbirth = dateofbirth;
    var carid = document.getElementById("carid").value;
    localStorage.carid = carid;

    if (document.getElementById("username").value == "" || document.getElementById("useremail").value == "" ||  document.getElementById("landline").value == "" ||
        document.getElementById("cellphone").value == "" || document.getElementById("birth").value == "" || document.getElementById("carid").value == "") {
        //do nothing
    }
    //else {
    //    document.getElementById("smassage").innerHTML = "Username saved in database successfully";
    //    window.document.location.href = "mainpage.html";
    //}
}

function loadUserDetalis() {
    var username = localStorage.username;
    document.getElementById("username").value = username;
    var id = localStorage.id;
    document.getElementById("userid").value = id;
    var email = localStorage.email;
    var email = document.getElementById("useremail").value = email;
    var landline = localStorage.landline;
    document.getElementById("landline").value = landline;
    var cellphone = localStorage.cellphone;
    document.getElementById("cellphone").value = cellphone;
    var dateofbirth = localStorage.dateofbirth;
    document.getElementById("birth").value = dateofbirth;
    var carid = localStorage.carid;
    document.getElementById("carid").value = carid;

    document.getElementById("smassage").innerHTML = "Username loaded successfully from storage";
}