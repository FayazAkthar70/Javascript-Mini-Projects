const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let futureDate = new Date(2023,4,17,12,12,0);
 
const giveAway = document.querySelector("#giveaway")
const time = document.querySelectorAll(".countdown > h2")
const deadline = document.querySelector(".deadline")
const year = futureDate.getFullYear()
const month = months[futureDate.getMonth()]
const date = futureDate.getDate()
const day = weekdays[futureDate.getDay()]
const hour = futureDate.getHours()
const mins = futureDate.getMinutes()

giveAway.textContent = `Giveaway ends on ${day}, ${date}th ${month}, ${year} at ${hour}:${mins} GST`

const futureTime = futureDate.getTime()

function format(time) {
    if (time < 10){
        return `0${time}`
    }
    else{
        return `${time}`
    }
}

function getRemainingTime(futureTime){
    const currentTime = new Date().getTime()
    const remainingTime =  futureTime - currentTime   // in milliseconds
    const oneDay = 24 * 60 * 60 *1000
    const oneHour = oneDay / 24
    const oneMinute = oneHour / 60
    const oneSecond = oneMinute / 60
    
    let days = Math.floor(remainingTime / oneDay)
    let hours = Math.floor((remainingTime % oneDay) / oneHour)
    let mins = Math.floor((remainingTime % oneHour) / oneMinute)
    let secs = Math.floor((remainingTime % oneMinute) / oneSecond)
    const values = [days,hours,mins,secs]
    
    time.forEach(function(item,index){
        item.textContent = format(values[index])
    })
    
    if (remainingTime < 1000){
        clearInterval(myInterval)
        deadline.innerHTML = `<h3> Sorry Giveaway is Over</h3>`
    }
}

myInterval = setInterval(function(){getRemainingTime(futureTime)},1000);
