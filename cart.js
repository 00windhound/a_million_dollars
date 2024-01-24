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
                        <h4> <p>${search.name}</p> 
                        <p>$ ${search.price}</p>
                        </h4>
                        <button class="delete">delete</button>
                    </div>
                    <div class="cartbuttons"></div>
                    <h3></h3>
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