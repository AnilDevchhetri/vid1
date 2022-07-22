let bar_icon  = document.querySelector("#res-bar");
let navbar = document.querySelector(".navbar");

function showicon(){
    bar_icon.classList.toggle('fa-time');
    navbar.classList.toggle('active');
    console.log('click');
}