let searchBar = document.querySelector(".searchbar");
let searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
    searchBar.classList.toggle('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

let loginForm=document.querySelector(".loginform");
let loginBtn=document.querySelector("#login-btn");

loginBtn.onclick = () =>{
    loginForm.classList.toggle('active');
    searchBar.classList.remove('active');
    menu.classList.remove('active');
}

document.querySelector("#cart-btn").onclick = () =>{
    document.querySelector(".shopcart").classList.toggle('active');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

let menu=document.querySelector(".navbar");
let menuBtn=document.querySelector("#menu-btn");

menuBtn.onclick = () =>{
    menu.classList.toggle('active');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
}

windows.onscroll= () =>{
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
};