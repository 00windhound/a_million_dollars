let accountdisplay = document.getElementById('account')
let account= 1000000
accountdisplay.innerHTML=account

let shop = document.getElementById('shop');

let generateshop =()=>{
    return `
    <div class="cards"><div id="cardcontainer"><div id="cardmain">
    <img width="220" src="pics/lillion.png">
    <div class="details">
        <h3>lion</h3>
        <p>show that your the king with this powerfull beast! keep in mind the upkeep and possibly a great life insurance policy.</p>
        </div></div>
        <div class="pq">
            <h2>$ 6,000</h2>
            <div class="pm">
             <button id="minus">-</button>
             <div id="quantity">0</div>
             <button id="plus">+</button>
            </div>
        </div>
    </div>
</div>`
};

generateshop();