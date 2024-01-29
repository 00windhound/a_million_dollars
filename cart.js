let accountdisplay = document.getElementById("account");
account= JSON.parse(localStorage.getItem("monies"))
accountdisplay.innerHTML= account;

let label = document.getElementById("label");
let shoppingcart= document.getElementById("shoppingcart");
let basket = JSON.parse(localStorage.getItem("joy")) || [];
//console.log(basket)
console.log(animalsdata) //so we have acess to this

let calculation = ()=>{
    let carticon = document.getElementsByClassName("totquantity");
carticon[0].innerHTML = (basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
};

calculation();

let generatecart =()=>{
    if(basket.length !== 0){
        console.log("data!!!")
        return shoppingcart.innerHTML= basket.map((x)=>{ console.log(x)
            let{id,item}=x;
            let search= animalsdata.find((y)=>y.id ===id) || [];
            return `
           <div class="cartitem">
                <img width="100px" src=${search.img} alternate=${search.alternate}/>
                <div class="details">
                    <div class="titleprice">
                        <h4>
                            <p>${search.name}
                            <p>${search.price}
                        </h4>
                        <button id="x">X</button>
                    </div>
                    <div class="cartbuttons"></div>
                </div>
           </div>
       `}).join("");
    }
    else{
        shoppingcart.innerHTML = ``;
        label.innerHTML= `<h2 id="cartisempty"> cart is empty </h2>
                            <a href="animals.html" >
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