let barContainer=document.getElementById("barcon");
let randomArrButton=document.getElementById("randomarrbutton");
let sortButton=document.getElementById("sortbutton");

let minRange=1;
let maxRange=20;
let numberOfBars=60;
let unsortedArray=new Array(numberOfBars);

function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function randomUnsortedArray(){
    for(let i=0;i<numberOfBars;i++){
        unsortedArray[i]=randomNum(minRange,maxRange);
    }
    return unsortedArray;
}

document.addEventListener("DOMContentLoaded",function(){
    randomUnsortedArray();
    randerBars(unsortedArray);
})

function randerBars(Array){
    for(let i=0;i<Array.length;i++){
        let bars=document.createElement("div");
        bars.classList.add("bar");
        bars.style.height=Array[i]*10 + "px";
        bars.style.backgroundColor="rgba(255,255,255,0.8)";
        barContainer.appendChild(bars);
    }
}

randomArrButton.addEventListener("click",function(){
    randomUnsortedArray();
    barContainer.innerHTML="";
    randerBars(unsortedArray);


})

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms))
}

async function insertionSort(Array){
    let bar=document.getElementsByClassName("bar");
        for (let i = 1; i < Array.length; i++) {
            let key = Array[i];
            let j = i - 1;

            while (j >= 0 && Array[j] > key) {
                Array[j + 1] = Array[j];
                bar[j+1].style.height=Array[j+1]*10+"px";
                bar[j+1].style.backgroundColor="rgba(0,255,0,0.8)";
                j = j - 1;
                
                await sleep(100);
            }
            Array[j + 1] = key;
            bar[j+1].style.height=Array[j+1]*10+"px";
            bar[j+1].style.backgroundColor="rgba(0,255,0,0.8)";
            await sleep(100);
        }
        for(let i=0;i<Array.length;i++){
            bar[i].style.backgroundColor="rgba(255,255,255,0.8)";
        }

        
        console.log(Array);
        return Array;
}

sortButton.addEventListener("click",function(){
    let sorted_array = insertionSort(unsortedArray);

    console.log(sorted_array);
})