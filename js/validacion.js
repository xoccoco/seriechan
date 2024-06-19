const FORM = document.getElementById("s1_newsletter_form");

FORM.addEventListener("submit", function(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let checkbox = document.getElementById("condicion").checked;

    let emailRegex = /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.+[a-zA-Z]{2,6}$/;

    if(email.trim() === ""){
        alert("porfavor introduce tu email");

        return;
    }

    if(!emailRegex.test(email)){
        alert("porfavor introduce tu email");
        event.preventDefault();
    }

    if(!checkbox){
        alert("Debes aceptar los terminos de condiciones.");
        event.preventDefault();
    }
})

const FORMs5 = document.getElementById("s5_newsletter_form");

FORMs5.addEventListener("submit", function(event){

    event.preventDefault();

    let email2 = document.getElementById("s5_email").value;
    let checkbox2 = document.getElementById("s5_condicion").checked;

    let email2Regex = /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.+[a-zA-Z]{2,6}$/;

    if(email2.trim() === ""){
        alert("porfavor introduce tu email");

        return;
    }

    if(!email2Regex.test(email2)){
        alert("porfavor introduce tu email");
        event.preventDefault();
    }

    if(!checkbox2){
        alert("Debes aceptar los terminos de condiciones.");
        event.preventDefault();
    }
})