$(document).on('mobileinit', function () {
    // Navigation
    //$.mobile.defaultPageTransition = "flip";
    $.mobile.page.prototype.options.addBackBtn = true;
    $.mobile.page.prototype.options.backBtnText = "previous";

    // Page
    $.mobile.page.prototype.options.headerTheme = "a";  // Page header only
    //$.mobile.page.prototype.options.contentTheme = "b";
    $.mobile.page.prototype.options.footerTheme = "a";

    // Listviews
    //$.mobile.listview.prototype.options.headerTheme = "a";  // Header for nested lists
    $.mobile.listview.prototype.options.theme = "a";  // List items / content
    $.mobile.listview.prototype.options.dividerTheme = "a";  // List divider

    //$.mobile.listview.prototype.options.splitTheme = "c";
    //$.mobile.listview.prototype.options.countTheme = "c";
    //$.mobile.listview.prototype.options.filterTheme = "c";
    //$.mobile.listview.prototype.options.filterPlaceholder = "Filter data...";

    //alert("mobileinit");

    //change page

});

//$(document).on('pagecreate', function () {
//    alert("pagecreate");
//});
//$(document).on('pageshow', function () {
//    alert("pageshow");
//});
//$(document).on('pagehide', function () {
//    alert("pagehide");
//});
//$(document).on('pageremove', function () {
//    alert("pageremove");
//});
