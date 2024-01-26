let accountdisplay = document.getElementById('account')
let account= 1000000
accountdisplay.innerHTML=account;
localStorage.setItem("monies",JSON.stringify(account))

let shop = document.getElementById('shop');
let basket = JSON.parse(localStorage.getItem("joy")) || [];

let label = document.getElementById("label");
let shoppingcart= document.getElementById("shoppingcart");

console.log(basket)






let generateshop =()=>{ 
    return (shop.innerHTML= animalsdata.map((x)=>{
        let { id, name, price, img, alternate, description}=x;
        let search = basket.find((x)=>x.id ===id) || [] 
        return `
        <div id=productid${id} class="cards"><div id="cardcontainer"><div id="cardmain">
        <img width="220" alt="${alternate}" src=${img}>
        <div class="details">
            <h3>${name}</h3>
            <p>${description}</p>
            </div></div>
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
        let search = animalsdata.find((y)=>y.id === id) || [];
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

