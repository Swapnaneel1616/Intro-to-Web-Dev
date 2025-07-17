let gameSeq = []
let userSeq = []
let btns = ["yellow" , "red" , "purple" , "green"];


let started = false
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function(){
   if(started == false)
   {
    console.log("game started");
    started = true;
    levelUp();
   }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250)
}

function btnflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 250)
}

function levelUp(){
    userSeq = [];
    level++
    h3.innerText = `Level ${level}`;

    //random btn
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameflash(randbtn);
}

function check(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 2000);
        }
    }
    else{
        h3.innerText = `Game OVER !!! PLEASE PRESS ANOTHER KEY TO START.`;
        reset();
    }

    
}

function btnpressed(){
    let btn = this;
    btnflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq)
    check(userSeq.length -1);
}


let Allbtns = document.querySelectorAll(".btn");
for(btn of Allbtns){
    btn.addEventListener("click" , btnpressed);
}



function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}