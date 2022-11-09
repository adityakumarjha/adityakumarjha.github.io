var attempt = 3;
let btn_element = document.getElementByID("submit");
  
btn_element.addEventListener("click",validate()) // Variable to count number of attempts.
console.log(username+"test");// Below function Executes on click of login button.
function validate(){
var username = document.getElementByID("uname").value;
var password = document.getElementByID("psw").value;
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
document.getElementByID("uname").disabled = true;
document.getElementByID("psw").disabled = true;
document.getElementByID("submit").disabled = true;
return false;
}
}
}