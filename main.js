var attempt = 3;
var btn_element = document.getElementById("submit");
  
btn_element.addEventListener("click",validate) // Variable to count number of attempts.
console.log(username+"test");// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("uname").value;
var password = document.getElementById("psw").value;
console.log(username+"test");
if ( username == "test" && password == "admin"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("uname").disabled = true;
document.getElementById("psw").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}