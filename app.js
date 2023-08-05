let searchBar = document.querySelector(".searchbar");
let searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
    searchBar.classList.toggle('active');
}

let loginForm=document.querySelector(".loginform");
let loginBtn=document.querySelector("#login-btn");

loginBtn.onclick = () =>{
    loginForm.classList.toggle('active');
}