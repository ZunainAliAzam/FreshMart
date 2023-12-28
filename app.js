let searchBar = document.querySelector(".searchbar");
let searchBtn = document.querySelector("#search-btn");
let loginForm = document.querySelector(".loginform");
let loginBtn = document.querySelector("#login-btn");
let menu = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");
let cartBtn = document.querySelector("#cart-btn");
let shopCart = document.querySelector(".shopcart");
let closeBtn = document.querySelector("#close-btn");

searchBtn.onclick = () => {
    searchBar.classList.toggle('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
    searchBar.classList.remove('active');
    menu.classList.remove('active');
}

cartBtn.onclick = () => {
    shopCart.classList.toggle('open');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
}

closeBtn.onclick = () => {
    document.querySelector(".shopcart").classList.remove('open')
}

menuBtn.onclick = () => {
    menu.classList.toggle('active');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
}

windows.onscroll = () => {
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
    menu.classList.remove('active');
};