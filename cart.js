let accountdisplay = document.getElementById("account");
account= JSON.parse(localStorage.getItem("monies"))
accountdisplay.innerHTML= account;

let label = document.getElementById("label");
let shoppingcart= document.getElementById("shoppingcart");
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

let generatecart =()=>{
    if(basket.length !== 0){
       // console.log("data!!!")
        return (shoppingcart.innerHTML= basket.map((x)=> 
        {let {id,item}= x;
        let search = shopcarddata.find((y)=>y.id === id) || [];
            return `
        <div id=productid${search.id} class="cards";><div id="cardcontainer"><div id="cardmain">
        <img width="220" alt="${search.alternate}" src=${search.img}>
        <div class="details">
            <h3>${search.name}</h3>
            <p>${search.description}</p>
            </div></div>
            <div class="pq">
                <h2>$ ${search.price}</h2>
                <div class="pm">
                 <button onclick="decrement(${search.id})" class="minus">-</button>
                 <div id=${search.id} class="quantity" >${search.item === undefined ? 0: search.item}</div>
                 <button onclick="increment(${search.id})" class="plus">+</button>
                </div>
            </div>
        </div>
    </div>`}).join(""));
    }
    else{
        shoppingcart.innerHTML = ``;
        label.innerHTML= `<h2 id="cartisempty"> cart is empty </h2>
                            <a href="shop.html" >
                            <button id="backtoshop">back to shop</button> </a>`
    }
}
generatecart(); 