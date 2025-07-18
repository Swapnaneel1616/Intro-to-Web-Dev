let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");


btn.addEventListener("click", function(){
    console.log(input.value);
    let item = document.createElement("li");
    item.innerText = input.value;
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");

    item.append(dltbtn);
    ul.appendChild(item);
    input.value = "";
});

// let delbtns = document.querySelectorAll(".delete");
// for(del of delbtns){
//     del.addEventListener("click" , function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let itemList = event.target.parentElement;
        itemList.remove();
    }
    else{
        console.log("Don't Delete")
    }
})