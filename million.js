let accountdisplay = document.getElementById('account')
let account= 1000000
accountdisplay.innerHTML=account

let shop = document.getElementById('shop');

let shopcarddata =[
    {id: "animalslion", 
    name:"lion", 
    price: 6000, 
    img: "pics/lillion.png",
    description: "show that your the king with this powerfull beast! keep in mind the upkeep and possibly a great life insurance policy."},

    {id: "animalsflamingo",
    name:"flamingo", 
    price: 3000, 
    img: "pics/lilflamingo.png",
    description: "elegant bird is the perfect addition for a backyard pond"},

    {id: "animalssnake",
    name: "snake",
    price: 100,
    img: "pics/lilsnake.png",
    description: "for the reptyle lovers, our snakes are docile and have vivid colors. can be fed live or frozen food."},

    {id: "animalsbunny",
    name: "bunny",
    price: 25,
    img: "pics/lilbunny.png",
    description:"adorable, easy, and kids love it"},
]

let basket = [];


let generateshop =()=>{
    return (shop.innerHTML= shopcarddata.map((x)=>{
        let { id, name, price, img, description}=x;
        return `
        <div id=productid${id} class="cards"><div id="cardcontainer"><div id="cardmain">
        <img width="220" src=${img}>
        <div class="details">
            <h3>${name}</h3>
            <p>${description}</p>
            </div></div>
            <div class="pq">
                <h2>$ ${price}</h2>
                <div class="pm">
                 <button onclick="decrement(${id})" class="minus">-</button>
                 <div id=${id} class="quantity" >0</div>
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
   /* console.log(basket);*/
    update(selecteditem.id);
};

let decrement = (id) => {
    let selecteditem = id;
    let search = basket.find((x)=> x.id === selecteditem.id);
    if(search.item === 0 || search.item === undefined)return;
    else{ search.item -= 1;}
    /*console.log(basket);*/
    update(selecteditem.id);
};

let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    console.log(search);
    document.getElementById(id).innerHTML = search.item;
};

let calculation = ()=>{}




/*let inc = (id) => {
    let selectedid= id;
    let search = basket.find((x) => x.id === selectedid.id);
    if(search === undefined){
        basket.push({id: selectedid.id, item: 1})}
    else{
        search.item += 1;}
       update(selectedid.id);
    console.log(basket);
};

let dec = (id) => {
    let selectedid= id;
    let search = basket.find((x) => x.id === selectedid.id);
    if(search.item === 0)return;
    else{
        search.item -= 1;}
       update(selectedid.id);
    console.log(basket);
};

let update = (id) => {
let search = basket.find((x)=> x.id === id);
document.getElementById(id).innerHTML =search.item;
};*/