


let cardContainer=document.createElement("div");
let image=document.createElement("img");
let title=document.createElement("p");
let price=document.createElement("span");
let buyNowBtn=document.createElement("button");

image.setAttribute("src","https://www.livemint.com/lm-img/img/2024/06/18/600x338/laptoppppp_cleanup_1718705991705_1718706003867.PNG")
image.style.width="500px"
title.textContent="hp latop i7"
price.textContent=50000;
buyNowBtn.innerText="BUYNOW"

cardContainer.style.border="2px solid black";
cardContainer.style.borderRadius="15px";
cardContainer.style.padding="15px";
cardContainer.style.display="inline-block"
cardContainer.style.background="linear-gradient(lightgreen,lightyellow)";


cardContainer.append(image,title,price,buyNowBtn)
document.body.appendChild(cardContainer)