
let randNoImg1=Math.floor(Math.random()*6+1);
let randImg1="images/dice"+ randNoImg1 + ".png";
document.querySelector(".dice .img1") .setAttribute("src", randImg1);


let randNOImg2=Math.floor(Math.random()*6+1);
var randImg2="images/dice"+ randNOImg2 + ".png";
document.querySelector(".dice .img2") .setAttribute("src", randImg2);

if(randImg1>randImg2){
    document.querySelector(".container h1").textContent="Player 1 wins!";
}
else if(randImg1===randImg2){
    document.querySelector(".container h1").textContent="Draw!";
}
else{
    document.querySelector(".container h1").textContent="Player2 wins!";
}