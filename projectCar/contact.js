const nav = document.querySelector(".nav-list");
const navBtn = document.querySelector("#b-menu");
const navBtnimg = document.querySelector("#nav-bars");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnimg.src = "./images/close.svg";
  } else {
    navBtnimg.src = "./images/NAV.svg";
  }
};