var hourHand = document.getElementById("hour")
var minuteHand = document.getElementById("minutes")
var secondHand = document.getElementById("seconds")

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    var hour = Math.trunc((time / 86400) * 24); // hour of the day in 24h format
    var minute = Math.trunc(((time / 60)) % 60);
    var second = time % 60;
    // console.log(`${hour}:${minute}:${second}`);
    
    // more precise positioning of hour hand
    var hourHandDeg = (hour%12-30)*30
    var hourHandDeg2 = (minute/12)*6


    secondHand.style.transform = `rotate(${(second-30)*6}deg)`
    minuteHand.style.transform = `rotate(${(minute-30)*6}deg)`
    hourHand.style.transform = `rotate(${hourHandDeg+hourHandDeg2}deg)`



  }, 1000);
  