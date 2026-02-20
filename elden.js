// =====================================
// GOLDEN ORDER LIGHT - FULL JS VERSION
// =====================================

// sélection de tous les boutons du site
const buttons = document.querySelectorAll(
".elden-btn, .boss-buttons a, .navbar a"
);

// fonction pour créer le dégradé sacré
function applyGoldenStyle(btn){

btn.style.position = "relative";
btn.style.overflow = "hidden";
btn.style.transition = "0.3s";

// dégradé doré initial
btn.style.backgroundImage =
"linear-gradient(120deg,#1a1a1a,#1a1a1a)";
}

// animation lumière
function startLight(btn){

let pos = -100;

btn.lightInterval = setInterval(()=>{

pos += 4;

btn.style.backgroundImage =
`linear-gradient(120deg,
#1a1a1a 0%,
#1a1a1a ${pos}%,
rgba(255,215,120,0.8) ${pos+10}%,
#1a1a1a ${pos+20}%
)`;

if(pos > 200){
pos = -100;
}

},16); // ~60fps
}

// stop animation
function stopLight(btn){

clearInterval(btn.lightInterval);

btn.style.backgroundImage =
"linear-gradient(120deg,#1a1a1a,#1a1a1a)";

}

// application à chaque bouton
buttons.forEach(btn=>{

applyGoldenStyle(btn);

btn.addEventListener("mouseenter",()=>{

btn.style.transform = "translateY(-3px) scale(1.05)";
btn.style.boxShadow = "0 0 25px rgba(255,215,120,0.6)";
startLight(btn);

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform = "";
btn.style.boxShadow = "";
stopLight(btn);

});

});

// =====================================
// BACKGROUND ORDRE D'OR CANVAS
// =====================================

const canvas = document.getElementById("gold-bg");
const ctx = canvas.getContext("2d");

// taille écran
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// mettre le canvas derrière tout
canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";

// particules dorées
const particles = [];

for(let i=0;i<40;i++){
particles.push({
x: Math.random()*canvas.width,
y: Math.random()*canvas.height,
size: Math.random()*3+1,
speed: Math.random()*0.5+0.2
});
}

function animateGold(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

// couleur ordre d'or
ctx.fillStyle = "rgba(255,215,120,0.6)";

ctx.beginPath();
ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
ctx.fill();

p.y -= p.speed;

if(p.y < 0){
p.y = canvas.height;
p.x = Math.random()*canvas.width;
}

});

requestAnimationFrame(animateGold);
}

animateGold();

// =====================================
// POPUP CHOIX DE FIN + IMAGE + RETOUR
// =====================================

const choixBtns = document.querySelectorAll("#decision .elden-btn");

// création popup
const popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%,-50%) scale(0)";
popup.style.background = "#14141c";
popup.style.border = "1px solid #d4af37";
popup.style.padding = "40px";
popup.style.borderRadius = "15px";
popup.style.color = "#e6d3a3";
popup.style.textAlign = "center";
popup.style.zIndex = "9999";
popup.style.transition = "0.4s";
popup.style.maxWidth = "500px";

document.body.appendChild(popup);
const popupImg = document.createElement("img");
popupImg.style.width = "200px";
popupImg.style.borderRadius = "10px";
popupImg.style.marginBottom = "20px";

const popupText = document.createElement("p");
popupText.style.fontSize = "22px";

const btnRetour = document.createElement("button");
btnRetour.textContent = "↩ Retour";
btnRetour.style.marginTop = "20px";
btnRetour.style.padding = "10px 18px";
btnRetour.style.background = "#d4af37";
btnRetour.style.border = "none";
btnRetour.style.cursor = "pointer";
btnRetour.style.borderRadius = "8px";

popup.appendChild(popupImg);
popup.appendChild(popupText);
popup.appendChild(btnRetour);


// =====================================
// COOKIE BANNER SIMPLE
// =====================================

if(!localStorage.getItem("cookieAccepted")){

const cookieBox = document.createElement("div");

cookieBox.style.position="fixed";
cookieBox.style.bottom="0";
cookieBox.style.left="0";
cookieBox.style.width="100%";
cookieBox.style.background="#14141c";
cookieBox.style.color="#e6d3a3";
cookieBox.style.padding="15px";
cookieBox.style.textAlign="center";
cookieBox.style.zIndex="9999";
cookieBox.style.borderTop="1px solid #d4af37";

cookieBox.innerHTML = `
🍪 Ce site utilise des cookies pour améliorer l'expérience.
<button id="acceptCookie">Accepter</button>
`;

document.body.appendChild(cookieBox);

document.getElementById("acceptCookie").onclick = ()=>{
localStorage.setItem("cookieAccepted","true");
cookieBox.remove();
};

}

// =====================================
// COOKIE BANNER ELDEN RING STYLE
// =====================================

document.addEventListener("DOMContentLoaded", ()=>{

if(!localStorage.getItem("eldenCookie")){

const cookieBox = document.createElement("div");

cookieBox.style.position="fixed";
cookieBox.style.bottom="0";
cookieBox.style.left="0";
cookieBox.style.width="100%";
cookieBox.style.background="rgba(10,10,15,0.95)";
cookieBox.style.color="#e6d3a3";
cookieBox.style.padding="18px";
cookieBox.style.textAlign="center";
cookieBox.style.zIndex="99999";
cookieBox.style.borderTop="1px solid #d4af37";
cookieBox.style.backdropFilter="blur(6px)";
cookieBox.style.transform="translateY(100%)";
cookieBox.style.transition="0.6s ease";

cookieBox.innerHTML = `
✨ Une Grâce ancienne veille sur ce site.
En continuant, vous acceptez les cookies nécessaires.

<br><br>

<button id="eldenAccept">Accepter la Grâce</button>
`;

document.body.appendChild(cookieBox);

// apparition douce
setTimeout(()=>{
cookieBox.style.transform="translateY(0)";
},200);


// bouton accepter
const btn = document.getElementById("eldenAccept");

btn.style.padding="10px 20px";
btn.style.background="#14141c";
btn.style.color="#e6d3a3";
btn.style.border="1px solid #d4af37";
btn.style.cursor="pointer";
btn.style.fontFamily="Poppins";
btn.style.transition="0.3s";


// glow doré
btn.addEventListener("mouseenter",()=>{
btn.style.boxShadow="0 0 20px rgba(255,215,120,0.7)";
btn.style.transform="scale(1.05)";
});

btn.addEventListener("mouseleave",()=>{
btn.style.boxShadow="";
btn.style.transform="scale(1)";
});


btn.onclick = ()=>{
localStorage.setItem("eldenCookie","ok");
cookieBox.style.transform="translateY(100%)";
setTimeout(()=>cookieBox.remove(),600);
};

}

});


// =====================================
// MENU HAMBURGER ORDRE D'OR UPGRADE
// =====================================

const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

if(toggleBtn){

toggleBtn.addEventListener("click", ()=>{

toggleBtn.classList.toggle("active");
navMenu.classList.toggle("active");
navbar.classList.toggle("open");

});

}

// fermeture auto quand on clique un lien
document.querySelectorAll(".nav-links a").forEach(link=>{
link.addEventListener("click",()=>{

navMenu.classList.remove("active");
toggleBtn.classList.remove("active");
navbar.classList.remove("open");

});
});