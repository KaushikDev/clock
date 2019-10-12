

const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


setInterval(showTime, 1000);

function showTime(){
    const timeNow = new Date();

    const secs = timeNow.getSeconds();
    const secsDegrees = ((secs/60) * 360) + 90;
    secHand.style.transform = `rotate(${secsDegrees}deg)`;

    const mins = timeNow.getMinutes();
    const minsDegrees = ((mins/60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hrs = timeNow.getHours();
    const hrsDegrees = ((hrs/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hrsDegrees}deg)`;

    console.log(hrs + " : " + mins + " : " + secs);
}


showTime();