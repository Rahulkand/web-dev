let button = document.querySelector(".toggler");
let line_1 = document.querySelector(".line-1");
let line_2 = document.querySelector(".line-2");
let hidden = document.querySelector(".hidden");
let nav_toggler = document.querySelector(".nav-toggler");
let btn_toggle = document.querySelector(".btn-toggle");
button.addEventListener("click",reveal);
function reveal(){
    button.children[0].classList.toggle("line-cross-1");
    button.children[1].classList.toggle("line-cross-2")
    hidden.classList.toggle("hidden-js");
    
}
let so_button_fb = document.querySelector(".fb");
let so_button_insta = document.querySelector(".insta");
so_button_fb.addEventListener("click",fb_page);
function fb_page(){
    window.location.href="https://www.facebook.com/PresidencyUniversityBangalore";
}
let order_online = document.querySelector(".btn");
order_online.addEventListener("click",menu);
function menu(){
    Window.location.href="D:\\MVSC\\Dev-projects\\presidency university Project\\menu page\\menu.html";
}