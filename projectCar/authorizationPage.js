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

const registor = {
  email:"",
  lastName:"",
  password:"",
  name: "",
  middleName:"",
  passwordRepeat:""
}
 
const form = document.Registration;
form[0].addEventListener("change",event=>{   
  if(event.target.value){
    registor.email = event.target.value
  form[0].classList.add("success")
}else{
  form[0].classList.add("error")
  form[0].nextElementSibling.innerHTML="Enter your email"
}
})
form[1].addEventListener("change",event=>{
  if(event.target.value.match(/[A-Z]{2}[0-9]{2}[a-z]{4}\W.$/)){
    registor.password = event.target.value;
    form[1].classList.add("success")
  }else{
    form[1].classList.add("error")
    form[1].nextElementSibling.innerHTML="Petqa sksvi 2 hat mecatar 2 hat tiv 4 hat poqratar 1 simvol u 1 hat cankacac simvol"
  }
})
form[2].addEventListener("change",event=>{
  console.log(registor.password);
  console.log(event.target.value);
  if(registor.password=== event.target.value){

    registor.passwordRepeat = event.target.value;
    form[2].classList.add("success")
  }else{
    form[2].classList.add("error")
    form[2].nextElementSibling.innerHTML="Repeat the password" 
  }
})
form[3].addEventListener("change",event=>{
  if(event.target.value.match(/^[A-Z]/)){
    registor.lastName = event.target.value;
    form[3].classList.add("success")
  }else{
    form[3].classList.add("error")
    form[3].nextElementSibling.innerHTML="Enter your Name"
  }
})
form[4].addEventListener("change",event=>{
  if(event.target.value.match(/^[A-Z]/)){
    registor.name = event.target.value;
    form[4].classList.add("success")
  }else{
    form[4].classList.add("error")
    form[4].nextElementSibling.innerHTML="Enter your lastName"
  }
})
form[5].addEventListener("change",event=>{
  if(event.target.value.match(/^[A-Z]/)){
    registor.middleName = event.target.value;
    form[5].classList.add("success")
  }else{
    form[5].classList.add("error")
    form[5].nextElementSibling.innerHTML="Enter your middleName"
  }
})
form.addEventListener("submit",e => e.preventDefault());
form[6].addEventListener("click",  f1)

async function f1(){
  const dataPost = fetch("https://api-generator.retool.com/atWfsR/data",{
  method:'POST',
  headers: {
    "Accept":"application/json",
    "Content-Type":"application/json"
  },
  body: JSON.stringify(registor)
})
await dataPost;
window.location ='./authorization.html'

}
