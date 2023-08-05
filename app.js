let searchBar = document.querySelector(".searchbar");
let searchBtn = document.querySelector("#search-btn");

searchBtn.onclick = () => {
    searchBar.classList.toggle('active');
}