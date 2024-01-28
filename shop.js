
let accountdisplay = document.getElementById('account')
let account= 1000000
accountdisplay.innerHTML=account;
localStorage.setItem("monies",JSON.stringify(account))

let shop = document.getElementById('shop');
let basket = JSON.parse(localStorage.getItem("joy")) || [];

let label = document.getElementById("label");
let shoppingcart= document.getElementById("shoppingcart");
let carticon = document.getElementById('totquantity')
//console.log(basket)






let generateshop =()=>{ 
    return (shop.innerHTML= animalsdata.map((x)=>{
        let { id, name, price, img, alternate, description}=x; // error in the cart
        let search = basket.find((x)=>x.id ===id) || [] 
        return `
        <div id=productid${id} class="cards">
            <div id="cardcontainer">
                <div id="cardmain">
                <img width="220" alt="${alternate}" src=${img}>
                    <div class="details">
                        <h3>${name}</h3>
                        <p>${description}</p>
                    </div>
                </div>
                <div class="pq">
                    <h2>$ ${price}</h2>
                    <div class="pm">
                        <button onclick="decrement(${id})" class="minus">-</button>
                        <div id=${id} class="quantity" >${search.item === undefined ? 0: search.item}</div>
                        <button onclick="increment(${id})" class="plus">+</button>
                    </div>
                </div>
            </div>
        </div>`;
    }).join(""));
    
};

generateshop();

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
};

let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    //console.log(search);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};
// change the update and calculate so it calcultes first and updates both numbers maybe
let calculation = ()=>{
    let carticon = document.getElementsByClassName("totquantity");
  carticon[0].innerHTML=(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
};

calculation();

