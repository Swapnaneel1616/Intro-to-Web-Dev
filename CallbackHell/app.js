// -> CALL BACK HELL or CALL BACK NESTING


let head = document.querySelector("h1");

function colorChange(color , delay , nextColorChange){
    setTimeout( ()=>{
        head.style.color = color;
        if(nextColorChange)
            nextColorChange();
    } , delay);
}

colorChange("red" , 1000 , ()=>{
    colorChange("orange", 1000 , ()=>{
        colorChange("green" , 1000);
    });
});