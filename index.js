let names = document.getElementById("name");
let email = document.getElementById("email");
let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let btn = document.getElementById("btn");
let main = document.getElementById("main");
let second_screen = document.getElementById("second_screen");
let resubmit_btn = document.getElementById("resubmit");

function checknames(name_para) {
    if (name_para.value.length >= 10) {
        name_para.classList.add("bordergreen");
        name_para.classList.remove("borderred");
        return 1;
    }

    else {
        name_para.classList.add("borderred");
        name_para.classList.remove("bordergreen");
        return 0;
    }
}

function checkmail(mail_para) {
    let regex = /^([a-zA-Z])([a-zA-z0-9\.\_]+)@([a-zA-z0-9]+)\.([a-z]+)(\.[a-z]+)?$/;
    let z = mail_para.value;
    if (regex.test(z)) {
        mail_para.classList.remove("borderred");
        mail_para.classList.add("bordergreen");
        return 1;
    }
    else {
        mail_para.classList.add("borderred");
        mail_para.classList.remove("bordergreen");
        return 0;
    }
}

function checkpass(pass1_para , pass2_para){
   if(pass1_para.value == pass2_para.value && (pass1_para.value && pass2_para.value) != ""){
    pass1_para.classList.remove("borderred");
    pass1_para.classList.add("bordergreen");
    pass2_para.classList.add("bordergreen");
    pass2_para.classList.remove("borderred");
    return 1;
   }
   else if((pass1_para.value && pass2_para.value) == ""){
    pass1_para.classList.remove("bordergreen");
    pass1_para.classList.add("borderred");
    pass2_para.classList.add("borderred");
    pass2_para.classList.remove("bordergreen");
       alert("Please Enter the Password");
       return 0;
   }
   else{
    pass1_para.classList.remove("bordergreen");
    pass1_para.classList.add("borderred");
    pass2_para.classList.add("borderred");
    pass2_para.classList.remove("bordergreen");
       alert("Password Didn't Matched");
       return 0;
   }
}

function second_screen_show(x,y,z){
     if((x && y && z) == 1){
        let heading = document.getElementById("heading");
        heading.remove();
        let full_name = document.getElementById("full_name");
        let email_2 = document.getElementById("email_2");
        full_name.innerText = names.value;
        email_2.innerText = email.value;
        second_screen.classList.add("show");
     }
}

function check() {
    let x = checknames(names);
    let y = checkmail(email);
    let z = checkpass(pass1 , pass2);
    second_screen_show(x,y,z);
}
function restart(){
    location.reload();
}

btn.addEventListener("click", check);
resubmit_btn.addEventListener("click" , restart);