let accountdisplay = document.getElementById('account')
let account= 1000000
accountdisplay.innerHTML=account

let shop = document.getElementById('shop');
let shopcarddata =[
    {id: "1", 
    name:"lion", 
    price: 6000, 
    img: "pics/lillion.png",
    description: "show that your the king with this powerfull beast! keep in mind the upkeep and possibly a great life insurance policy."},

    {id: "2",
    name:"flamingo", 
    price: 3000, 
    img: "pics/lilflamingo.png",
    description: "elegant bird is the perfect addition for a backyard pond"},

    {id: "3",
    name: "snake",
    price: 100,
    img: "pics/lilsnake.png",
    description: "for the reptyle lovers, our snakes are docile and have vivid colors. can be fed live or frozen food."},

    {id: "4",
    name: "bunny",
    price: 25,
    img: "pics/lilbunny.png",
    description:"adorable, easy, and kids love it"},
]

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
                 <button id="minus">-</button>
                 <div id=${id}id="quantity">0</div>
                 <button id="plus">+</button>
                </div>
            </div>
        </div>
    </div>`;
    }).join(""));
    
};

generateshop();