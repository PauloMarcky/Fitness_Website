let email = document.getElementById("newUserEmail");
let password = document.getElementById("newUserPassword");
let errorMess = document.getElementById("errorMessage");
let accBut = document.getElementById("acceptAccount");

accBut.addEventListener("click", function(){

errorMess.style.visibility = "hidden";
errorMess.style.opacity = "0";

let emailValue = email.value.trim();
let passValue = password.value.trim();

if (emailValue == "" || passValue == ""){

   errorMess.textContent = `---INVALID EMAIL OR PASSWORD---`;
   errorMess.style.visibility = "visible";
   errorMess.style.opacity = `1`;
   return;

}

window.location.href = "mainPage.html";

});

email.addEventListener("focus", function(){

   errorMess.style.visibility = "hidden";
   errorMess.style.opacity = "0";

});

password.addEventListener("focus", function(){

   errorMess.style.visibility = "hidden";
   errorMess.style.opacity = "0";
   


});

