function checkStorageSupport() {
    if (!window.localStorage) {
        alert("Browser dont support local storage");
    }
}

if (localStorage.getItem("1") == "Rented") {
    //do nothing
} else {
    localStorage.setItem("1", "Toyota");
    localStorage.setItem("numbert", "012345");
    localStorage.setItem("modelt", "2010");
    localStorage.setItem("a/mt", "Automatic");
}

if (localStorage.getItem("2") == "Rented") {
    //do nothing
} else {
    localStorage.setItem("2", "Ford");
    localStorage.setItem("numberf", "123456");
    localStorage.setItem("modelf", "1995");
    localStorage.setItem("a/mf", "Manual");
}

if (localStorage.getItem("3") == "Rented") {
    //do nothing
} else {
    localStorage.setItem("3", "Mazda");
    localStorage.setItem("numberm", "234567");
    localStorage.setItem("modelm", "2008");
    localStorage.setItem("a/mm", "Automatic");
}

if (localStorage.getItem("4") == "Rented") {
    //do nothing
} else {
    localStorage.setItem("4", "Kia");
    localStorage.setItem("numberk", "345678");
    localStorage.setItem("modelk", "2005");
    localStorage.setItem("a/mk", "Manual");
}

if (localStorage.getItem("5") == "Rented") {
    //do nothing
} else {
    localStorage.setItem("5", "Honda");
    localStorage.setItem("numberr", "456789");
    localStorage.setItem("modelr", "2012");
    localStorage.setItem("a/mr", "Automatic");
}


//car information in a table
//Toyota
if (localStorage.getItem("1") == "Rented") {
    document.getElementById("Button1").style.display = "none"
    document.getElementById("numbert").innerHTML = "Car in not Avalibe";
    document.getElementById("modelt").innerHTML = "";
    document.getElementById("geart").innerHTML = "";
} else {
    document.getElementById("Button1").style.display = "block"
    var number = localStorage.getItem("numbert");
    document.getElementById("numbert").innerHTML = number;
    var model = localStorage.getItem("modelt");
    document.getElementById("modelt").innerHTML = model;
    var gear = localStorage.getItem("a/mt");
    document.getElementById("geart").innerHTML = gear;
}
//Ford
if (localStorage.getItem("2") == "Rented") {
    document.getElementById("Button2").style.display = "none"
    document.getElementById("numberf").innerHTML = "Car in not Avalibe";
    document.getElementById("modelf").innerHTML = "";
    document.getElementById("gearf").innerHTML = "";
} else {
    var number = localStorage.getItem("numberf");
    document.getElementById("numberf").innerHTML = number;
    var model = localStorage.getItem("modelf");
    document.getElementById("modelf").innerHTML = model;
    var gear = localStorage.getItem("a/mf");
    document.getElementById("gearf").innerHTML = gear;
}
//Mazda
if (localStorage.getItem("3") == "Rented") {
    document.getElementById("Button3").style.display = "none"
    document.getElementById("numberm").innerHTML = "Car in not Avalibe";
    document.getElementById("modelm").innerHTML = "";
    document.getElementById("gearm").innerHTML = "";
} else {
    var number = localStorage.getItem("numberm");
    document.getElementById("numberm").innerHTML = number;
    var model = localStorage.getItem("modelm");
    document.getElementById("modelm").innerHTML = model;
    var gear = localStorage.getItem("a/mm");
    document.getElementById("gearm").innerHTML = gear;
}
//Kia
if (localStorage.getItem("4") == "Rented") {
    document.getElementById("Button4").style.display = "none"
    document.getElementById("numberk").innerHTML = "Car in not Avalibe";
    document.getElementById("modelk").innerHTML = "";
    document.getElementById("geark").innerHTML = "";
} else {
    var number = localStorage.getItem("numberk");
    document.getElementById("numberk").innerHTML = number;
    var model = localStorage.getItem("modelk");
    document.getElementById("modelk").innerHTML = model;
    var gear = localStorage.getItem("a/mk");
    document.getElementById("geark").innerHTML = gear;
}
//Honda
if (localStorage.getItem("5") == "Rented") {
    document.getElementById("Button5").style.display = "none"
    document.getElementById("numberh").innerHTML = "Car in not Avalibe";
    document.getElementById("modelh").innerHTML = "";
    document.getElementById("gearh").innerHTML = "";
} else {
    var number = localStorage.getItem("numberr");
    document.getElementById("numberh").innerHTML = number;
    var model = localStorage.getItem("modelr");
    document.getElementById("modelh").innerHTML = model;
    var gear = localStorage.getItem("a/mr");
    document.getElementById("gearh").innerHTML = gear;
}

    function toyota() {
        localStorage.setItem("auto/manual", "1");
        window.document.location.href = "carcost.html";   
}

    function ford() {
        localStorage.setItem("auto/manual", "2");
        window.document.location.href = "carcost.html";
}

    function mazda() {
        localStorage.setItem("auto/manual", "3");
        window.document.location.href = "carcost.html";
    
}

    function kia() {
        localStorage.setItem("auto/manual", "4");
        window.document.location.href = "carcost.html";
}

    function honda() {
        localStorage.setItem("auto/manual", "5");
        window.document.location.href = "carcost.html";
}