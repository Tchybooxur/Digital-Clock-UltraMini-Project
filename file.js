//
const digitalClock = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    //stick AM or PM suffix to time
    let suff = (hours < 12)? "AM" : "PM";

    //convert to 12-hours format
    hours = (hours > 12)? hours - 12 : hours;

    //pad time components with leading zeros
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    
    //display the finished time
    document.getElementById("clock").innerHTML = hours + "  :  " + minutes + "  :  " + seconds + "  " + suff;
    let t = setTimeout(digitalClock, 500);    
}

onload = digitalClock;