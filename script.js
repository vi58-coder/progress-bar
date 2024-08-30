const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const pogEl = document.querySelector(".progress-bar-front")

const stepsEl = document.querySelectorAll(".step")



let currentChecked = 1

nextEl.addEventListener("click", ()=>{
   currentChecked++ ;
   if (currentChecked > stepsEl.length){
    currentChecked = stepsEl.length;
   }
    updateStepProgress()
});


prevEl.addEventListener("click", ()=>{
   currentChecked--;
   if (currentChecked < 1){
    currentChecked = 1;
   }
    updateStepProgress()
});

function updateStepProgress(){
    stepsEl.forEach((stepsEl, idx)=>{
        if(idx < currentChecked){
          stepsEl.classList.add("checked");
          stepsEl.innerHTML = `<i class="fa-solid fa-check"></i> <small>${idx === 0 ? "Start" : idx === stepsEl.length - 1 ?  "Final" : "Step" + idx}</small>`; 
        }else{
            stepsEl.classList.remove("checked");
            stepsEl.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
        }
    });

    const checkedNumber = document.querySelectorAll(".checked")

    pogEl.style.width = ((checkedNumber.length -1) / (stepsEl.length -1)) * 100 +  "%";

    if(currentChecked === 1){
        prevEl.disabled = true;
    }else if(currentChecked === stepsEl.length){
        nextEl.disabled = true;
    }else{
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
}
