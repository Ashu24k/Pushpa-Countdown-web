var CDtime = new Date("Aug 15, 2024 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var disTime = CDtime - now;

    var Days = Math.floor(disTime / (1000 * 60 * 60 * 24));
    var Hours = Math.floor((disTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Minutes = Math.floor((disTime % (1000 * 60 * 60 )) / (1000 * 60));
    var Seconds = Math.floor((disTime % (1000 * 60)) / 1000);

    document.getElementById("Days").innerHTML = Days;
    document.getElementById("Hours").innerHTML = Hours;
    document.getElementById("Minutes").innerHTML = Minutes;
    document.getElementById("Seconds").innerHTML = Seconds;

},1000);