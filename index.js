let accountdisplay= document.getElementById("account");
let account = JSON.parse(localStorage.getItem("monies"))
let owns = JSON.parse(localStorage.getItem("owned"))

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
