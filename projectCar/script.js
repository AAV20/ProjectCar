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



let slider=document.querySelector('.slider'); 
let countImg = document.querySelector('.number-count-block'); 
let arr=[ 
    { 
        src:'./images/whell.png' 
    }, 
    { 
        src:'./images/png-clipart-tread-synthetic-rubber-natural-rubber-four.png' 
    }, 
    { 
        src:'./images/png-transparent-car-pirelli-tyre-s-p-a-tire-rim-car.png' 
    }, 
    { 
        src:'./images/png-transparent-tread-car-volkswagen-santana-tire-graphy-rubber.png' 
    }, 
    { 
        src:'./images/purepng.com-tirestiresring-shaped-vehiclewheels.png' 
    }
] 
 
 
arr.forEach(i=>{ 
    let slide=document.createElement('div'); 
    slide.className='slide'; 
    slide.innerHTML=`<img src="${i.src}">` 
    slider.appendChild(slide) 
}) 
 
let slides=document.querySelectorAll('.slide'); 
let next=document.querySelector('.vector3'); 
let prev=document.querySelector('.vector2'); 
let slider_parent=document.querySelector('.slider'); 
let number_count=document.querySelector('.number-count-block') 
let translate_val=0; 
number_count.innerHTML=`<span class='sp-num-count'>01</span>/<span class='sp-num-count-2'>0${slider_parent.childElementCount}</span>` 
function nextSlide(){ 
 
if(translate_val<=(slider_parent.childElementCount-1)*-500){ 
        translate_val=0 
        slider_parent.style.transform=`translate(${translate_val}px)`; 
}else { 
translate_val-=500; 
slider_parent.style.transform=`translate(${translate_val}px)`; 
} 
number_count.innerHTML=`<span class='sp-num-count'>0${Math.abs(translate_val/500)+1}</span>/<span class='sp-num-count-2'>0${slider_parent.childElementCount}</span>` 
return translate_val; 
} 
 
function prevSlide(){ 
    if(translate_val<0){ 
         translate_val+=500; 
           slider_parent.style.transform=`translate(${translate_val}px)`; 
    }else if(translate_val==0){ 
          translate_val=(slider_parent.childElementCount-1)*-500; 
         slider_parent.style.transform=`translate(${translate_val}px)`; 
    } 
     number_count.innerHTML=`<span>0${Math.abs(translate_val/500)+1}</span>/<span>0${slider_parent.childElementCount}</span>` 
    return  translate_val 
} 
  
next.addEventListener('click',nextSlide) 
prev.addEventListener('click',prevSlide)



// let count_items_per_page1=window.innerWidth > 1440 ? 6 : window.innerWidth <= 1024 ? 4:2;
// fetch("https://retoolapi.dev/9seHH5/data")
// .then(person => person.json())
// .then(person => person.forEach((i,index) =>{
//   if(index<count_items_per_page1){
//     const div = document.createElement('div')
//     div.innerHTML = `<div class="grid-mini-blocks">
//     <div class="mini-description">
//         <img src="${i.img}" alt="Товар2">
//         <h3 class="micheline">${i.title}</h3>
//         <p class="micheline-description">${i.description}</p>
    
//     <div class="mini-description-2">
//         <p class="descr">${i.price}</p>
//         <p class="plus-minus"><span class="sp-minus">-</span>1<span class="sp-plus">+</span></p>
//         <img src="./images/Vector (4).png" alt="vector">
//     </div>
//     </div>
// </div>`
//     parent.appendChild(div)
//   }
  
// }))


// pagination


// let parentOne = document.querySelector('.grid-blocks')
// const parent=document.querySelector('.numbers-line');
// const nextBtn = document.querySelector('.fa-caret-right');
// const prevBtn = document.querySelector('.fa-caret-left');
// const pageCount=document.querySelector('.page');

// let currentPage=1;
// let count_items_per_page=window.innerWidth > 1440 ? 6 : window.innerWidth <= 1024 ? 4:2; 
// let response;
// const nextPage=()=>{
//     if(currentPage<pageNum()){
//       currentPage++
//     }
//     changePage(currentPage)
// }

// nextBtn.addEventListener('click',nextPage)

// const prevPage=()=>{
//    if(currentPage>1){
//       currentPage--
//     }
//     changePage(currentPage)
// }
// prevBtn.addEventListener('click',prevPage)
// async function f1() {
//   const users = await fetch("https://retoolapi.dev/9seHH5/data");
//   response = await users.json();
// };

// async function changePage(page){
//   await f1();

// if(page<=1){
//   page=1
// }
// if(page>pageNum()){
//   page=pageNum()
// }
// currentPage = page

//     parent.innerHTML=""
//   response.forEach((i,index)=>{
//     if(index>(page-1)*count_items_per_page &&  index< page * count_items_per_page+1 ){   
//       let div=document.createElement('div')
//         div.innerHTML=`<div class="grid-mini-blocks">
//         <div class="mini-description">
//             <img src="${i.img}" alt="Товар2">
//             <h3 class="micheline">${i.title}</h3>
//             <p class="micheline-description">${i.description}</p>
        
//         <div class="mini-description-2">
//             <p class="descr">${i.price}</p>
//             <p class="plus-minus"><span class="sp-minus">-</span>1<span class="sp-plus">+</span></p>
//             <img src="./images/Vector (4).png" alt="vector">
//         </div>
//         </div>
//     </div>`
//       parent.append(div)
//     }
//   })
//   let move=2;
//   let count=[];
//   let pageDots=[];
//   let elem;
//   let left=page-move;
//   let right=page+move+1;
  
//   for(let i=1; i<=pageNum();  i++ ){
//     if(i===1 || (i>= left && i<right)){
//       if(count.length<4){
//           count.push(i)
//       }else{
//           count.shift()
//           count.push(i)
//       }
//     }
//   }
//   for(let i of count){
//      if(elem){
//         if(i-elem==2){ 
//            pageDots.push(elem+1)
//         }else if(i-elem!=1){
//             pageDots.push('...')
//         }
//      }
//      pageDots.push(i)
//      elem=i
//   }
//   pageCount.innerHTML=''
//   for(let j of pageDots){
//    let span=document.createElement('span');
//    span.innerText=j;
//    span.addEventListener('click',()=>changePage(j))
//    pageCount.append(span)
//   }
// }
// const pageNum = () => Math.ceil(response.length / count_items_per_page);

// window.onload=()=>{
//   changePage(1)
// }

// const signInBtn = document.querySelector('.login-link')
// localStorage.hasOwnProperty('user') ? signInBtn.innerText = JSON.parse(localStorage.getItem('user'))[0].name : signInBtn.innerText = 'Войти'




let countItemsPerPage=window.innerWidth > 1440 ? 6 : window.innerWidth <= 1024 ? 4:2; 
const parent = document.querySelector(".cards");
const pageCount = document.querySelector(".pagess");
const loadAnimation = document.querySelector(".loader");
let currentPage = 1;
let response;
let allData = [];
async function allDataCollector() {
  const data = await fetch("https://retoolapi.dev/cG7rV9/data");
  allData = await data.json();
}
async function dataReceived() {
  const data = await fetch(
    `https://api-generator.retool.com/cG7rV9/data?_page=${currentPage}&_limit=${countItemsPerPage}`
  );
  response = await data.json();
  loadAnimation.style.display = "none";
}
async function changePage(page) {
  await allDataCollector();
  await dataReceived();
  const pageNum = () => Math.ceil(allData.length / countItemsPerPage);

  if (page <= 1) {
    page = 1;
  }
  if (page > pageNum()) {
    page = pageNum();
  }
  pageCount.innerHTML = page;

  drawElement(parent, response);
  addBascket(response);
  let move = 1;
  let count = [];
  let pageDots = [];
  let elem;
  let right = page + move + 1;
  let left = page - move;
  for (let i = 1; i <= pageNum(); i++) {
    if (i === 1 || i === pageNum() || (i >= left && i < right)) {
      count.push(i);
    }
  }
  for (let i of count) {
    if (elem) {
      if (i - elem == 2) {
        pageDots.push(elem + 1);
      } else if (i - elem != 1) {
        pageDots.push("...");
      }
    }
    pageDots.push(i);
    elem = i;
  }
  pageCount.innerHTML = "";
  for (let j of pageDots) {
    let span = document.createElement("span");
    span.innerText = j;
    span.addEventListener("click", () => changePage(j + 1));
    pageCount.append(span);
  }
  currentPage = page;
}

window.onload = () => {
  changePage(1);
};
function drawElement(parent, response) {
  parent.innerHTML = "";
  response.forEach((item) => {
    const div = document.createElement("div");
    div.dataset.id = item.id;
    div.classList.add("product-card");
    div.innerHTML = `<div class="product-img"><img src="${item.img}"  alt="" ></div>
       <div class="product-name"><p>${item.brand}</p></div>
       <div class="product-text">
       <p>${item.about}</p>
     </div>
     <div class="product-price">
     <p class="count-price">${item.price}p.</p>
     <span class="mention">
       <span class="minus">-</span><span>1</span><span class="plus">+</span></span>
     <button class="add-btn"><img src="./images/bucket.svg" alt="" /></button></div>`;
    parent.append(div);
  });
}
function addBascket(response) {
  let addBtn = document.querySelectorAll(".add-btn");
  let plus = document.querySelectorAll(".plus");
  let minus = document.querySelectorAll(".minus");
  plus.forEach((e) =>
    e.addEventListener("click", () => {
      let count = +e.previousElementSibling.innerText + 1;
      e.previousElementSibling.innerText = count;
      response.filter((i) => {
        if (i.id == +e.parentElement.parentElement.parentElement.dataset.id) {
          e.parentElement.previousElementSibling.innerText = i.price * count;
        }
      });
    })
  );
  minus.forEach((e) =>
    e.addEventListener("click", () => {
      if (+e.nextElementSibling.innerText > 1) {
        let count = +e.nextElementSibling.innerText - 1;
        e.nextElementSibling.innerText = count;
        response.filter((i) => {
          if (i.id == +e.parentElement.parentElement.parentElement.dataset.id) {
            e.parentElement.previousElementSibling.innerText = i.price * count;
          }
        });
      }
    })
  );
  let arr = [];
  addBtn.forEach((i) =>
    i.addEventListener("click", () => {
      arr.push(
        createBascketItem(
          i.parentElement.parentElement.dataset.id,
          i.previousElementSibling.children[1].innerText
        )
      );
      let uniqueItem = [...new Map(arr.map((i) => [i.id, i])).values()];
      localStorage.setItem("bascket", JSON.stringify(uniqueItem));
    })
  );
}
function createBascketItem(id, count) {
  return {
    id,
    count,
  };
}


// let slide = document.querySelector('.img-slider-block');
// let next = document.querySelector('.vector3');
// let prev = document.querySelector('.vector2');



// function nextImage(){
//   let i=Array.from(slide.children).findIndex((item)=>item.classList.contains('active'))
//   if(i<slide.children.length-1){
//     i++;
//     slide.children[i-1].classList.remove('active')
//   }else{
//     slide.children[i].classList.remove('active')
//     i = 0
//   }
//  slide.children[i].classList.add('active')
// }
// next.addEventListener('click',nextImage)


// function previousImage(){
// let i=Array.from(slide.children).findIndex((item)=>item.classList.contains('active'));
//   if(i > 0){
//     i--;
//    slide.children[i+1].classList.remove('active')
//   }else {
//     slide.children[i].classList.remove('active')
//     i = slide.children.length - 1  
//   }
//  slide.children[i].classList.add('active')
// }

// prev.addEventListener('click',previousImage)