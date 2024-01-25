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
            <div class="cartitem">
                <img width="100px" src=${search.img} alt="${search.alternate}/>
                <div class="details">
                    <div class="titleprice">
                        <h4 class="title"> <p>${search.name}</p> 
                        <p class="itemp">$ ${search.price}</p>
                        </h4>
                       
                    
                    <div class="pm">
                        <button onclick="decrement(${id})" class="minus">-</button>
                        <div id=${id} class="quantity">${item}</div>
                        <button onclick="increment(${id})" class="plus">+</button>
                        </div>
                     <button class="delete">delete</button>
                     </div>
                    <h3>$ ${item*search.item}</h3>
                
                </div>
            </div>
       `}).join(""));
    }
    else{
        shoppingcart.innerHTML = ``;
        label.innerHTML= `<h2 id="cartisempty"> cart is empty </h2>
                            <a href="shop.html" >
                            <button id="backtoshop">back to shop</button> </a>`
    }
}
generatecart(); 


let increment = (id) => {
    let selecteditem = id;
    let search = basket.find((x)=> x.id === selecteditem.id);
    if(search === undefined){
    basket.push({
        id: selecteditem.id,
        item: 1,
    })}
    else{search.item += 1;}
    localStorage.setItem("joy",JSON.stringify(basket))
   /* console.log(basket);*/
    update(selecteditem.id);
};

let decrement = (id) => {
    let selecteditem = id;
    let search = basket.find((x)=> x.id === selecteditem.id);
    if(search === undefined) return;
    else if(search.item === 0) return;
    else{ search.item -= 1;}
    update(selecteditem.id);
    basket = basket.filter((x)=>x.item !== 0);
    localStorage.setItem("joy",JSON.stringify(basket));
    generatecart();
};

let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    //console.log(search);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};