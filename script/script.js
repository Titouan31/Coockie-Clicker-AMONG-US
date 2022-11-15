
let nb_click = 0;
let cpc = 1;
let cps = 0;
let price = 10;
let priceauto = 20;
const fps = 30;

function majInterface() {
    document.getElementById('result').innerHTML = Math.round(nb_click);
    phrase()
}
function add() {
    nb_click += cpc;
    majInterface()
     document.getElementById('tonID').src = "images/image" + Math.floor(Math.random() * 6) + ".png";
    
}

function reset() {
    nb_click = 0;
    cpc = 1;
    cps = 0;
    price = 10;
    priceauto = 20;
    result.innerHTML = nb_click;
}

function multiplier() {
    if(nb_click >= price) {
    cpc += 1;
    nb_click -= price;
    price = Math.round(price * 1.3);
    majInterface()
    document.getElementById('mult').innerHTML = "+1 Among Us - Prix : " + price;}
    else {
        alert ("Non, tu ne peux pas pour l'instant !")
    }
}

function automatic() {
    if(nb_click >= priceauto) {
        nb_click -= priceauto;
        cps += 1;
        priceauto = Math.round(priceauto * 1.5);
        majInterface()
        document.getElementById('auto').innerHTML = "+1 Click automatique - Prix : " + priceauto;
    }
}



setInterval (function() {
    nb_click += cps/fps;
    majInterface()
}, 1000/fps)


function phrase () {
    if (nb_click > 10) {
        document.getElementById('aleatoire').innerHTML = "Il se passe quelque chose de suspect..";
    }
    if (nb_click > 25) {
        document.getElementById('aleatoire').innerHTML = "Il y a du bruit a proximite";
    }
    if (nb_click > 40) {
        document.getElementById('aleatoire').innerHTML = "Ne t'approche pas de la bouche d'aeration !";
    }
    if (nb_click > 50) {
        document.getElementById('aleatoire').innerHTML = "Il semblerai y avoir un mort dans la piece d'a cote";
    }
}

let phrases = ['Le suspect est proche', 'Attention tu es en danger !', 'Le suspect est parmis vous..', 'Quelqu un viens vers toi !', 'Du sang...'];
var aleatoire = Math.floor(Math.random()*phrases.length);
var final = phrases[aleatoire];
console.log(final);
document.getElementById('aleatoire').innerHTML = final;





var saveGameLoop = setInterval(function(){saveGame()}, 100);
			function saveGame(){
				localStorage.nb_click = nb_click;
				localStorage.cpc = cpc;
				localStorage.cps = cps;
				localStorage.price = price;
				localStorage.priceauto = priceauto;
            }
            