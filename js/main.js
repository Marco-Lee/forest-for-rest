const menu1=document.querySelector(".navi>li>a");
console.log(menu1);
const mnpage=document.querySelector(".menu-page");
const clbtn=document.querySelector(".close-btn");

menu1.addEventListener("click",()=>{
    mnpage.classList.add("active");
},500);
clbtn.addEventListener("click",()=>{
    mnpage.classList.remove("active");
},500);