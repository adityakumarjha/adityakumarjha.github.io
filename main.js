var attempt = 3;
let btn_element = document.getElementByName("submit");
  
btn_element.addEventListener("click",validate()) // Variable to count number of attempts.
console.log(username+"test");// Below function Executes on click of login button.
function validate(){
var username = document.getElementByName("uname").value;
var password = document.getElementByName("psw").value;
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
document.getElementByName("uname").disabled = true;
document.getElementByName("psw").disabled = true;
document.getElementByName("submit").disabled = true;
return false;
}
}
}