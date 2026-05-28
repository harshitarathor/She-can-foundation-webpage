const darkBtn=document.getElementById("darkBtn");

darkBtn.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

darkBtn.innerHTML="☀ Light Mode";

}

else{

darkBtn.innerHTML="🌙 Dark Mode";

}

}

function learnMore(){

alert(
"Thank you for supporting She Can Foundation!"
);

}