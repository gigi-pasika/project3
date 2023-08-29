const shuffle = document.querySelector("#shuffle");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

shuffle.addEventListener("click", () => {
    if(card1.style.opacity == 0 && card2.style.opacity == 0 && card3.style.opacity == 0 ){
        card1.style.opacity = 1.0;
    }
    else if(card1.style.opacity == 1.0 && card2.style.opacity == 0 && card3.style.opacity == 0 ){
        card1.style.opacity = 0;
        card2.style.opacity = 1.0;

    }else if( card1.style.opacity == 0 && card2.style.opacity == 1.0 && card3.style.opacity == 0 ){
        card2.style.opacity = 0;
        card3.style.opacity = 1.0;
    }else if( card1.style.opacity == 0 && card2.style.opacity == 0 && card3.style.opacity == 1.0 ){
        card3.style.opacity = 0;
        card1.style.opacity = 1.0;
    }
})


// let changeColor = document.querySelector("#myButton");

// let changeH1 = document.querySelector(".changeH1");
// let changeP = document.querySelector(".changeP");

// changeColor.addEventListener("click", () => {
//   if(changeH1.style.color == "antiquewhite"  &&  changeP.style.color == "skyblue" ) {
//     changeH1.style.color = "green";
//   }
// }
// )