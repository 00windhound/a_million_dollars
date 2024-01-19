let accountdisplay = document.getElementById('account')
let account= 1000000
accountdisplay.innerHTML=account

let shop = document.getElementById('shop');

let shopcarddata =[
    {id: "animalslion", 
    name:"lion", 
    price: 6000, 
    img: "pics/lillion.png",
    alternate:"a quick doodle of a lion",
    description: "show that your the king with this powerfull beast! keep in mind the upkeep and possibly a great life insurance policy."},

    {id: "animalsflamingo",
    name:"flamingo", 
    price: 3000, 
    img: "pics/lilflamingo.png",
    alternate:"a quick flamingo drawing",
    description: "elegant bird is the perfect addition for a backyard pond"},

    {id: "animalssnake",
    name: "snake",
    price: 100,
    img: "pics/lilsnake.png",
    alternate: "a crappy snake drawing",
    description: "for the reptyle lovers, our snakes are docile and have vivid colors. can be fed live or frozen food."},

    {id: "animalsbunny",
    name: "bunny",
    price: 25,
    img: "pics/bunny.jpg",
    alternate:"picture of a black bunny",
    description:"adorable, easy, and kids love it"},
   
    {id:"animalscheetah",
    name: "cheetah",
    price: 50000,
    img:"pics/cheetah.jpg",
    alternate:"headshot of a georgous cheetah",
    description:"beautiful, great for racing, cubs can even be kind of tamed."},
    
    {id:"animalsseahorse",
    name:"seahorse",
    price: 1000,
    img:"pics/seahorse.jpg",
    alternate:"picture of a pink seahorse against purple corals",
    description: "price includes the tank and basic equipment."},

    {id:"animalshorse",
    name:"horse",
    price: 7000,
    img:"pics/horses.jpg",
    alternate:"picture of a red, a black, and a white horse in a field",
    description: "beautiful horses. many breeds and colors.  great quality and temperment, raised to be family pets. many are broke to ride, though for fulls or yearlings you're on your own."}
]

let basket = [];


let generateshop =()=>{
    return (shop.innerHTML= shopcarddata.map((x)=>{
        let { id, name, price, img, alternate, description}=x;
        return `
        <div id=productid${id} class="cards"><div id="cardcontainer"><div id="cardmain">
        <img width="220" alt="${alternate}" title="${alternate}" src=${img}>
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
    calculation();
};

let calculation = ()=>{
    let carticon = document.getElementById("totquantity");
    console.log( basket.map((x)=> x.item ).reduce((x,y)=> x + y, 0)); // did not want to work for me.
};




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