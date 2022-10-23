let temp = parseFloat(document.querySelector('#tempF').textContent);
let wspeed = parseFloat(document.querySelector('#speed').textContent);

function windChill(tempF, speed) {
    if(temp <= 50 && wspeed >3){
    let winch = 35.74 + 0.6215 * tempF - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * tempF * (Math.pow(speed, 0.16));
    return winch.toFixed(2);
}
else{

    let winch = "N/A"
    return winch

}
}

document.querySelector('#windchill').textContent = windChill(temp, wspeed);