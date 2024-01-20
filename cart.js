let accountdisplay = document.getElementById("account");
account= JSON.parse(localStorage.getItem("monies"))
accountdisplay.innerHTML= account;

let basket = JSON.parse(localStorage.getItem("joy")) || [];
console.log(basket)
let calculation = ()=>{
    let carticon = document.getElementsByClassName("totquantity");
   // console.log( basket.map((x)=> x.item ).reduce((x,y)=> x + y, 0)); // did not want to work for me.

carticon.innerHTML = (basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));

//need to fix this so it shows the number on the icon.
};
calculation();