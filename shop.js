
let accountdisplay = document.getElementById('account');


let shop = document.getElementById('shop');
let basket = JSON.parse(localStorage.getItem("joy")) || [];
let account = JSON.parse(localStorage.getItem("monies"));
let catagory = JSON.parse(localStorage.getItem("catagory"));
accountdisplay.innerHTML=account;
let label = document.getElementById("label");
let shoppingcart= document.getElementById("shoppingcart");
let carticon = document.getElementById('totquantity')
console.log(account);
let print= null;
// if else to seeif its this name than set data to equal this array



let generateshop =()=>{ 
    return (shop.innerHTML= print.map((x)=>{
        let { id, name, price, img, alternate, description}=x; // error in the cart
        let search = basket.find((x)=>x.id ===id) || [] 
        return `
        <div id=productid${id} class="cards">
            <div id="cardcontainer">
                <div id="cardmain">
                    <img width="220" alt="${alternate}" src=${img}>
                    <div class="carddetails">
                        <h2>${name}</h2>
                        <p>${description}</p>
                    </div>
                </div>
            </div>
            <div class="cardfooter">
                <h2>$ ${price}</h2>
                <div class="shoppm">
                    <button onclick="decrement(${id})" class="minus">-</button>
                        <div id=${id} class="quantity" >${search.item === undefined ? 0: search.item}
                        </div>
                    <button onclick="increment(${id})" class="plus">+</button>
                </div>
            </div>
        </div>`;
    }).join(""));
    
};

let generatefashion = () =>{//giving an error when i click up or down the id is messed up
    return(
        shop.innerHTML= print.map((x)=>{
            let {id, name, price, img, alternate} = x;
            let search = basket.find((x)=>x.id === id) || []
            return`
        <div id=productid${id} class="fashioncard">
            <div class="picname">
                <h2 class="fashionname">${name}</h2>
                <img width="220" alt="${alternate}" src="${img}">
            </div>
            <div class="fashionfooter">
                <h2 class="fashionprice">${price}</h2>
                <div class="buttonsammount">
                    <button onclick="decrement(${id}" class="fashionminus">-</button>
                        <div class="fashionammount" >${search.item === undefined ? 0: search.item}
                        </div>
                    <button onclick="increment(${id})" class="fashionplus">+</button>
                </div>
            </div>
        </div>
            `
        }).join("")
    )
}

let chosecatagory =() =>{
    if(catagory === "linktoanimals" || catagory === "backanimals"){
        print= animalsdata;
        generateshop();
    }
    else if(catagory === "linktohomes" || catagory === "backhomes"){
        print= housesdata;
        generateshop();
    }
    else if(catagory === "linktotoys" || catagory === "backtoys"){
        print= toydata;
        generateshop();
    }
    else{
        print= clothesdata;
        generatefashion();
    }
}

chosecatagory();

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
    let carticon = document.getElementById("totalquantity");
  carticon.innerHTML=(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
};

calculation();

