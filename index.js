let accountdisplay= document.getElementById("account");
let account = JSON.parse(localStorage.getItem("monies"))
let owns = JSON.parse(localStorage.getItem("owned"))
let ownsarea= document.getElementById("owns");

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

setmonies();

console.log(account);
accountdisplay.innerHTML=account;
//i got the account working!!!

let generateowned= () => {
    if(owns.length !== 0){
        return ownsarea.innerHTML= owns.map((x)=>{
            let {id,item}=x;
            let search=animalsdata.find((y)=>y.id === id) || [];
            let {img,alternate,name}= search;
            return`
                <div class="ownedcards" id="${id}">
                    <div class="ownedheader">
                        <div class="ownedtitle"><b>${name}</b>
                        </div>
                        <div class="ownedamount">
                            count 
                            <div class="ownednumber"><b>${item}</b>
                            </div> 
                        </div>
                    </div>
                    <img width="300px" src="${img}" alt="${alternate}"></img>
                </div>
            `
        }).join("")
    }
    else{
        ownsarea.innerHTML=`<h1>you need to go shopping!</h1>`;
    }
}
