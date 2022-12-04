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

const user = JSON.parse(localStorage.getItem('user')) ?? []
console.log(user);
const userInfo = document.querySelector('.my-data-text-input')
userInfo.innerHTML = `<p class="mimd2_2p">Вариант регистрации<br>ID пользователя<br>
E-mail<br><br>Фамилия<br>Имя<br>Отчество<br><br>Группы пользователя</p>
<p class="mimd2_2p">Физическое лицо<br>164<br>${user[0].email ? user[0].email: 'aram.aramyan.90@gmail.com'}<br><br>
${user[0].lastName ? user[0].lastName: 'Aramyan'}<br>${user[0].name ? user[0].name: 'grancveq!'}<br>${user[0].middleName ? user[0].middleName: 'Arami'}<br><br>Розница</p>`