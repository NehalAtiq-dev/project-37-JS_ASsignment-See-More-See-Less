let paragarph = document.getElementById("par");
let button = document.getElementById("btn");

let expendedPeragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et esse commodi ut recusandae non itaque maxime harum exercitationem ducimus, rerum vel asperiores beatae, nostrum tenetur. Modi expedita quaerat corporis? itaque maxime harum exercitationem ducimus, rerum vel asperiores beatae, nostrum tenetur. Modi expedita quaerat corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et esse commodi ut recusandae non itaque maxime harum exercitationem ducimus, rerum vel asperiores beatae, nostrum tenetur. Modi expedita quaerat corporis? itaque maxime harum exercitationem ducimus, rerum vel asperiores beatae, nostrum tenetur. Modi expedita quaerat corporis?";


function expand() {
    if (button.innerText.toLowerCase() == "see more") {
        paragarph.innerHTML = expendedPeragraph;
        button.innerHTML = "see less";
    } else {
        btn.innerHTML = "see more";
        paragarph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et esse commodi ut recusandae non itaque maxime harum exercitationem";
    }
}

function sweetalert(message) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: `<a href="#">${message}</a>`
    });
}

function congrats() {
    Swal.fire({
        title: "Login Successfully",
        icon: "success",
        draggable: true
    });
}




let mail = document.getElementById("email");
let pass = document.getElementById("password")

function submitHandler(e) {
    e.preventDefault();
    if (mail.value.trim() == "") {
        sweetalert("Enter Username");
    } else if (mail.value.length >= 15) {
        sweetalert("Username must be less then 15 characters");
    } else if (pass.value.trim() == "") {
        sweetalert("enter password");
    } else if (pass.value.length <= 7) {
        sweetalert("password must be atleast 8 charachters");
    } else {
        congrats("Login Successfully");
    }
}

