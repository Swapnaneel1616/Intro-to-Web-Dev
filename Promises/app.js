let h1 = document.querySelector("h1");
function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1; // generates 1–5
            if (num > 3) {
                reject("promise rejected");  // randomly reject if number is 4 or 5
            }
            else{
            h1.style.color = color;
            resolve("Color Changed");
            }
        }, delay)
    });
}

//USing promise to change color one by one

colorChange("red" , 1000).then(()=>{
    console.log("red color");
    return colorChange("orange" , 2000)
    })
    .then(()=>{
        console.log("Orange color");
        return colorChange("green" , 3000)
    })
    .then(()=>{
            console.log("Green Color")
        })
    .catch((error)=>{
        console.log("ERROR");
    })