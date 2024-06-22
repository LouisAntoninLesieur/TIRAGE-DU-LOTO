
// Je pose la question à l'utilisateur pour savoir s'il veut effectuer un T-Ragozaur.
const question = confirm("Voulez-vous laisser Math.floor(Math.random(🤯)) vous faire gagner de l'argent en mâsse ?");
// Si l'utilisateur confirm, la function tirage(s'exécute)
// Si non, le navigateur affiche un message d'honte éternelle sur 120 générations

if (question){
    tirage();
}else{
    loser();
};

function loser(){
    alert("Bouh, vous ratez quelque chose !");
    const containerElement = document.querySelector('.container');
    console.dir(containerElement);
    const loserImg = document.createElement('img');
    loserImg.src = "loser.jpg";
    containerElement.append(loserImg);
    loserImg.style.borderRadius = "24px";
};

// Le secret pour devenir millionnaire est encapsulé ici même
function tirage(){

    /* CRÉATION DE MES FONCTIONS POUR UN TIRAGE DE LOTO */
    
    // Je crée une fonction qui me permet de récupérer un numéro aléatoire entre 1 et 49
    function randomNumber(min = 1, max = 49){
        return Math.floor(Math.random() * (max - min +1)) + min;
    };
    // Je crée une fonction qui me permet de récupérer un numéro aléatoire entre 1 et 10
    function randomNumberBonus(min = 1, max = 10){
        return Math.floor(Math.random() * (max - min +1)) + min;
    };
    
    /* RÉCUPÉRATION DE MON OBJET .CONTAINER */
    
    // Je crée une variable qui récupère mon élément body dans lequel je vais intégrer mes divs
    const containerElement = document.querySelector('.container');
    console.dir(containerElement);
    
    /* CRÉATION DE MES ÉLÉMENTS DIV ET DE LEURS ÉLÉMENTS P, DANS MON ÉLÉMENT .CONTAINER */
    
    // Je crée une première boucle qui va créer les X premières div avec la class .ball
    //  - chaque p contiendra un textContent
    //  - chaque textContent affichera un randomNumber
    for (i = 0; i < 5 ; i++){
        const divElement = document.createElement('div');
        containerElement.prepend(divElement);
        divElement.classList.add('ball');
        const pElement = document.createElement('p');
        divElement.append(pElement);
        pElement.textContent = `${randomNumber()}`;
    };
    
    // Je crée une seconde boucle qui va créer les X dernières div avec la class .bonus-ball
    //  - chaque p contiendra un textContent
    //  - chaque textContent affichera un randomNumberBunu
    for (i = 0; i < 1 ; i++){
        const divElement = document.createElement('div');
        containerElement.appendChild(divElement);
        divElement.classList.add('bonus-ball');
        const pElement = document.createElement('p');
        divElement.append(pElement);
        pElement.textContent = `${randomNumberBonus()}`;
    };
    
    };

// TODO - J'aimerai qu'un numéro ne sorte pas plus d'une fois par tirage pour empêcher les doublons

// BONUS - Faire en sorte qu'un bouton permette de générer une nouvelle grille
// BONUS ENCORE PLUS OUF - Permettre à l'utilisateur de choisir son jeu et générer un nombre de balles en fonction du jeu choisi
// BONUS ATOMIQUE - Faire en sorte qu'un bouton permette de détruire la grille avec une animation venue toute droite depuis l'ISS