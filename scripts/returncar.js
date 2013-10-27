function returncar(){
    
    var number = document.getElementById("carnumber").value;
    
    if (number != localStorage.getItem("numbert")) {
        document.getElementById("wrongnumber").innerHTML = "The car number you enterd does not existes in our data base, Please try agian.";
    }

    if (number == localStorage.getItem("numbert")) {
        localStorage.setItem("1","Toyota");
        alert("We hope you enjoy our car");
    }

    if (number == localStorage.getItem("numberf")) {
        localStorage.setItem("2", "Ford");
        alert("We hope you enjoy our car");
    }

    if (number == localStorage.getItem("numberm")) {
        localStorage.setItem("3", "Mazda");
        alert("We hope you enjoy our car");
    }

    if (number == localStorage.getItem("numberk")) {
        localStorage.setItem("4", "Kia");
        alert("We hope you enjoy our car");
    }

    if (number == localStorage.getItem("numberr")) {
        localStorage.setItem("5", "Honda");
        alert("We hope you enjoy our car");
    }
    
}