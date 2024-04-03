var deg = 6;
var hr = document.querySelector(".hour-hand");
var mn = document.querySelector(".minute-hand");
var sc = document.querySelector(".sec-hand");

setInterval(() => {
    var mvDate = new Date();
    console.log(mvDate);
    var hourMv = mvDate.getHours();
    var hourMv = hourMv*30;
    var minMv = mvDate.getMinutes() * 6;
    var secMv = mvDate.getSeconds() * 6;
    hr.style.transform = `rotate(${hourMv}deg)`;
    mn.style.transform = `rotate(${minMv}deg)`;
    sc.style.transform = `rotate(${secMv}deg)`;
}, 1000);