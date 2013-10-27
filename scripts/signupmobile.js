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