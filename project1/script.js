const randomColour = function() {
    const hex = '123456789ABCDEF'
    let color = '#'

    for(i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    } 
    return color;
}

// console.log(randomColour());
let intervalId

const startChangingcolour = function() {

    if (!intervalId) {
       intervalId =  setInterval(changeBgColor,1000)
    }
   

    function changeBgColor() {
        document.body.style.backgroundColor = randomColour();
    } 
}

const stopChangingcolour = function() {
    clearInterval(intervalId);
    intervalId = null
}


document.getElementById('start').addEventListener('click',startChangingcolour);

document.getElementById('stop').addEventListener('click',stopChangingcolour);