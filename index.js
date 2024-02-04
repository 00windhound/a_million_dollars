let accountdisplay= document.getElementById("account");
let account = JSON.parse(localStorage.getItem("monies"));
let owns = JSON.parse(localStorage.getItem("owned"));
let ownsarea= document.getElementById("owns");
let go = document.getElementById("go");
let cart = JSON.parse(localStorage.getItem("joy"));
let catagory = null;
let alldata = animalsdata.concat(housesdata);

let setmonies =()=>{
    if (Object.is(account,null)){
        account= 1000000; // i only want this done once
        localStorage.setItem("monies",JSON.stringify(account))
    }
    else {
        console.log("account has something..")
        // i want nothing done if account already has a value
    };
}

let setowns = ()=>{
    if(Object.is(owns,null)){
        owns=[];
        localStorage.setItem("owned",JSON.stringify(owns))
    }
    else return;
}

setowns();
setmonies();

console.log(account);
accountdisplay.innerHTML=account;
//i got the account working!!!

let generateowned= () => {
    if(owns.length !== 0){
        return ownsarea.innerHTML= owns.map((x)=>{
            let {id,item}=x;
            let search=alldata.find((y)=>y.id === id) || [];
            let {img,alternate,name}= search;
            return`
                <div class="ownedcards" id="${id}">
                    <div class="ownedheader">
                        <div class="ownedtitle"><b>${name}</b>
                        </div>
                        <div class="ownedamount">
                            <span id="count">count</span> 
                            <div class="ownednumber"><b>${item}</b></div> 
                        </div>
                    </div>
                    <img width="300px" src="${img}" alt="${alternate}"></img>
                </div>
            `
        }).join("")
    }
    else{
        ownsarea.innerHTML='';
        go.innerHTML=`<h1 id="goshopping">you need to go shopping!</h1>`; // it prints it but does not clear what was already there
    }
}
// styling needs to be different based on what if its cards or go shopping
generateowned();

let reset =() => {
owns = []
cart = []
account = 1000000;

localStorage.setItem("owned",JSON.stringify(owns))
localStorage.setItem("joy",JSON.stringify(cart))
localStorage.setItem("monies",JSON.stringify(account))

accountdisplay.innerHTML= account;
generateowned(); //this is not getting called. account and storage was reset.
}

let savecatagory =(event) =>{
    catagory= event.target.id; // returning a blank string
    console.log(event.target);
    console.log(catagory)
    localStorage.setItem("catagory",JSON.stringify(catagory));
    window.location.href = "animals.html";
}

document.getElementById("linktoanimals").addEventListener("click", savecatagory)
document.getElementById("linktohomes").addEventListener("click",savecatagory)
