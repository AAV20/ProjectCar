// const registor = {
//     email: '',
//     password: '',
// }

// const form = document.Registration;
// form[0].addEventListener("input",event=>{registor.email = event.target.value})
//   form[1].addEventListener("input",event=>{
//     if(event.target.value.match(/[A-Z]{2}[0-9]{2}[a-z]{4}\W.$/)){
//       registor.password = event.target.value;
//       form[1].classList.add("success")
//     }else{
//       form[1].classList.add("error")
//       form[1].nextElementSibling.innerHTML="Petqa sksvi 2 hat mecatar 2 hat tiv 4 hat poqratar 1 simvol u 1 hat cankacac simvol"
//     }
//   })
  
//   form.addEventListener("submit",e => e.preventDefault());
//   form[2].addEventListener("click", function (){
//     fetch("https://api-generator.retool.com/011Ud4/data",{
//       method:'PUT',
//       headers: {
//         "Accept":"application/json",
//         "Content-Type":"application/json"
//       },
//       body: JSON.stringify(registor)
//     })
//     .then(response => console.log(response.json()))
//     .catch(error => console.error(error))
//   })


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

const form = document.form 

function sendRequest(method,url) {
    fetch('https://api-generator.retool.com/atWfsR/data')
    .then(response => response.json())
    .then(user => user.filter(user =>user.email === form[0].value))
    .then(response => localStorage.setItem('user',JSON.stringify(response)))
    .then(response => localStorage.hasOwnProperty('user')? window.location ='./index.html': console.log(error))
    // if(localStorage.hasOwnProperty('user')) {
      // window.location ='./index.html'
      // }
}
form.addEventListener('submit',event => event.preventDefault())
form[2].addEventListener('click',sendRequest)