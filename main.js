var canvas = document.querySelector('canvas')
canvas.height = 655;
canvas.width = 375;
ctx = canvas.getContext('2d');
ctx.fillStyle = "#2C4B61"
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.beginPath();
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = "bold 30px Helvetica";
ctx.fillStyle = "#fff"
ctx.fillText("TIME REMAINING", 185, 450);
ctx.beginPath();
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = "15px Helvetica";
ctx.fillStyle = "#fff"
ctx.fillText("HOURS", 70, 602);
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = "15px Helvetica";
ctx.fillStyle = "#fff"
ctx.fillText("MINUTES", 196, 602);
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = "15px Helvetica";
ctx.fillStyle = "#fff"
ctx.fillText("SECONDS", 315, 602);

// time function start here
var timeLeft = 60 * 60;
var countdown = 0
var gif = new GIF({
workers: 4,
workerScript: '/gif.worker.js',
quality: 1,
dither: 'Atkinson-serpentine',
width: 375,
height: 655
});
function formatTime(s) {
    const minutes = Math.floor( s / 60);
    var second = s % 60; 
    const hours = Math.floor(minutes / 60);
    var min = minutes % 60;
    let hrs = hours < 10 ?  `0${hours}` : `${hours}`
    let minute = min < 10 ? `0${min}` : `${min}`;
    let sec = second < 10 ? `0${second}` : `${second}`;
    return [hrs, minute, sec]
}
    for(countdown = 30*60; countdown < timeLeft; countdown++){
        var texts = formatTime(timeLeft - countdown)
        // ctx.fillRect(21, 500, 339, 90)
        ctx.beginPath();
        ctx.fillStyle = "#79BB59"
        ctx.fillRect(25, 500, 90, 90)
        ctx.fillStyle = "#fff"
        ctx.fillRect(128, 525, 12, 12)
        ctx.fillStyle = "#fff"
        ctx.fillRect(128, 558, 12, 12)
        ctx.fillStyle = "#BE565D"
        ctx.fillRect(152, 500, 90, 90)
        ctx.fillStyle = "#fff"
        ctx.fillRect(251, 525, 12, 12)
        ctx.fillStyle = "#fff"
        ctx.fillRect(251, 558, 12, 12)
        ctx.fillStyle = "#8286EE"
        ctx.fillRect(269, 500, 90, 90)
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "60px Helvetica";
        ctx.fillStyle = "#fff"
        ctx.fillText(texts[0], 70, 548);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "60px Helvetica";
        ctx.fillStyle = "#fff"
        ctx.fillText(texts[1], 196, 548);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "60px Helvetica";
        ctx.fillStyle = "#fff"
        ctx.fillText(texts[2], 315, 548);
            gif.addFrame(canvas, {
                copy: true,
                delay: 1000,
             });
             console.log(countdown);
             
    }
gif.on("finished", function(blob) {
var img = document.querySelector("img");
img.src = URL.createObjectURL(blob);
console.log(img.src);

});
gif.render();    
