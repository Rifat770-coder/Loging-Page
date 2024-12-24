let form = document.querySelector("form");
let email = form.querySelector("div #email");
let password = form.querySelector("div #password");
 

let sub1 = document.querySelector("div .two #submit");
function subch(e){
  sub1.addEventListener("submit", subch);

  e.preventDefault();
  console.log(e.target.innerText);
}


// let form = document.querySelector("form");
// let form = document.querySelector("form");

