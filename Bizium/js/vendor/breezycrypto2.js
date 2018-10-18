/* Captcha Generation*/
function generateCaptcha() {
    var a = Math.ceil (Math.random() * 10) + '';
    var b = Math.ceil (Math.random() * 10) + '';
    var c = Math.ceil (Math.random() * 10) + '';

   captcha= a.toString() + b.toString() + c.toString();
   document.getElementById("noInput").value=captcha;
}

/*Form Validation*/
var only_w = "samsam";
var only_x = "tagsamie@yahoo.com";
var only_y = 07032733273;
function validateForm() {
    var valid_w = document.forms["myForm"]["name"].value;
    var valid_x = document.forms["myForm"]["email"].value;
    var valid_y = document.getElementById("phone").value;
    var valid_z = document.getElementById("input").value; 
    if (valid_w == only_w && valid_x == only_x && valid_z == captcha) {
        document.location.replace ("breezycrypto2-2.html");
    }else if (valid_w == "" || valid_x == "" || valid_y == "") {
        alert ("All fields must be filled!");
    }else if (valid_w == only_w && valid_x == only_x && valid_z !== captcha) {
        alert ("Refresh Captcha!");
    }
}
    
    /*else {
        alert ("Incorrect Name or E-mail")
    }
    if (valid_w == "") {
        document.getElementById("nameid").innerHTML= "*Name is required";
    }
    if (valid_x == "") {
        document.getElementById("emailid").innerHTML= "*Email is required";
    }
    if (valid_y == "") {
        document.getElementById("phoneid").innerHTML= "*Phone Number is required";
    }
    if (isNaN(valid_y)) {
        document.getElementById("phoneid").innerHTML= "*Not a valid Phone Number";
    }
    */
    
    
