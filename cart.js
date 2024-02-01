let accountdisplay = document.getElementById("account");
account= JSON.parse(localStorage.getItem("monies"))
accountdisplay.innerHTML= account;

let label = document.getElementById("label");
let shoppingcart= document.getElementById("shoppingcart");
let basket = JSON.parse(localStorage.getItem("joy")) || [];
//console.log(basket)
//console.log(animalsdata) //so we have acess to this
let bill;

let calculation = ()=>{
    let carticon = document.getElementsByClassName("totquantity");
carticon[0].innerHTML = (basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
};

calculation();

let generatecart =()=>{
    if(basket.length !== 0){
        //console.log("data!!!")
        return shoppingcart.innerHTML= basket.map((x)=>{
            let{id,item}=x;
            let search= animalsdata.find((y)=>y.id ===id) || [];
            let{img,alternate,name,price}=search;
            return `
           <div class="cartitem">
                <img width="100px" src=${img} alternate=${alternate}/>
                <div class="details">
                    <div class="titleprice">
                        <h4 class="titleprice2">
                            <p>${name}</p>
                            <p class="cartprice">${price}</p>
                        </h4>
                        <button onclick="removeitem(${id})" id="x"><b>X</b></button>
                    </div>
                    <div class="cartbuttons">
                        <div class="pm">
                            <button onclick="decrement(${id})" class="minus">-</button>
                            <div id=${id} class="quantity" >${item}</div>
                            <button onclick="increment(${id})" class="plus">+</button>
                        </div>
                    </div>
                    <h3 id="itemtimesprice">$ ${item*price}</h3>
                </div>
           </div>
       `}).join("");
    }
    else{
        shoppingcart.innerHTML = ``;
        label.innerHTML= `<h2 id="cartisempty"> cart is empty </h2>
                            <a href="index.html" >
                            <button id="backtoshop">back to home</button> </a>`
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
    generatecart();
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
    totalbill();
};

let removeitem =(id)=>{
let thing = id
basket=basket.filter((x)=>x.id !== thing.id)
localStorage.setItem("joy",JSON.stringify(basket));
generatecart();
totalbill();
calculation();
}

let burnbutton = ()=>{
    basket=[]
    localStorage.setItem("joy",JSON.stringify(basket));
    generatecart();
    calculation();
    
}

let totalbill =()=>{
    if(basket.length !== 0){
        let amount = basket.map((x)=>{
            let{item,id}=x;
            let search = animalsdata.find((y)=> y.id === id)|| [];
            return item* search.price;
        }).reduce((x,y)=>x+y,0);
        bill= amount;
        label.innerHTML=
        `<h2 id="bill">total bill: $ ${amount}</h2>
        <button onclick="checkout()" class="checkout">checkout</button>
        <button onclick="burnbutton()" class="emptycart">burn everything!</button>`;
    }
    else return;
}

totalbill();

let owns= JSON.parse(localStorage.getItem("owned")) || [];

let checkout =()=>{
  
    newaccount= account-bill;
    if(newaccount >= 0){
        localStorage.setItem("monies",JSON.stringify(newaccount))
        accountdisplay.innerHTML= newaccount;

        let i =0;
        while(i<= basket.length-1){
            let search= owns.find((x)=>x.id ===basket[i].id )
            if(search === undefined){ 
                owns.push({id: basket[i].id,item: basket[i].item})
            }
            else{
                search.item += basket[i].item;//need to know how many your trying to buy
            }
            i++
        }
        basket=[]
        localStorage.setItem("joy",JSON.stringify(basket))
        localStorage.setItem("owned",JSON.stringify(owns))
        generatecart()
        calculation()
        console.log("owns"+owns);
        console.log("basket"+ basket);
        console.log(newaccount);
    }
    else{
        alert("you don't have enough money!!! "+newaccount);
    }
}
// i am damn close, the first basket goes in perfectly, but the else statement needs some work.
// as long as i dont add any repeats it works perfectly


/* 
eventually deal with out of money or overdrawn 
center buttons in cart*/