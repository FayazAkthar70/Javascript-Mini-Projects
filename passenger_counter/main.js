//document.getElementById("count").innerText = 1
let countEl =     document.getElementById("count");
let count = 0;
let entriesEl = document.getElementById("entries");

function increment(){
    count++;
    countEl.textContent = count;
}

function decrement() {
    if (count == 0) {
        alert("Passenger count cannot be negative");
    }
    else{
        count --;
        countEl.textContent = count;
    }
}

function reset(){
    count = 0;
    countEl.textContent = count;
}

function save(){
    entriesEl.textContent += count + " - " ;  
}
