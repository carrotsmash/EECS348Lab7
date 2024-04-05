function alert_paragraph_color() {
    var red = document.getElementById("border_R").value;
    var green = document.getElementById("border_G").value;
    var blue = document.getElementById("border_B").value;
    var width = document.getElementById("border_width").value;
    var bg_red = document.getElementById("bg_R").value;
    var bg_green = document.getElementById("bg_G").value;
    var bg_blue = document.getElementById("bg_B").value;

    paragraph.style.color = `rgb(${red}, ${green}, ${blue})`;
    paragraph.style.borderWidth = `${width}`;
    paragraph.style.borderColor = `rgb(${bg_red}, ${bg_green}, ${bg_blue})`;
    paragraph.style.backgroundColor = `rgb(${bg_red}, ${bg_green}, ${bg_blue})`;
}

function validate(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    if(pass1.length < 8){
        //alert user
        alert("Password must be at least 8 characters.");
    }
    else if(pass1 != pass2){
        //alert user
        alert("Passwords are not the same.");
    }
}