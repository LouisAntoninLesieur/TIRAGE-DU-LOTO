
// ! fabrication de la div et des boutons
const bodyElement = document.querySelector('body');
const divButtons = document.createElement("div")
divButtons.classList.add("buttons-container");
// * bouton pour loto
const buttonLoto = document.createElement("button");
buttonLoto.textContent = "LOTO";
buttonLoto.classList.add("button");
divButtons.append(buttonLoto);
// * bouton pour euromillion
const buttonEuromillion = document.createElement("button");
buttonEuromillion.textContent = "EUROMILLION";
buttonEuromillion.classList.add("button");
divButtons.append(buttonEuromillion);
// * bouton pour eurodream
const buttonEurodream = document.createElement("button");
buttonEurodream.textContent = "EURODREAM";
buttonEurodream.classList.add("button");
divButtons.append(buttonEurodream);
// * ajout de la div dans le body
bodyElement.prepend(divButtons);

// ! paramètres pour les grilles de loto
buttonLoto.addEventListener('click', function(){
    // Je fais en sorte que le contenu du conteneur soit vide pour pouvoir ajouter une nouvelle grille de loto
    const containerElement = document.querySelector('.container');
    containerElement.innerHTML = "";
    tirage(1, 49, 1, 10, 5, 1);
    bodyElement.style.background = "linear-gradient(150deg, rgb(3, 20, 102) 0%, rgb(43, 205, 237) 90%)";
});
// ! paramètres pour les grilles d'euromillion
buttonEuromillion.addEventListener('click', function(){
    const containerElement = document.querySelector('.container');
    containerElement.innerHTML = "";
    tirage(1, 50, 1, 12, 5, 2);
    bodyElement.style.background = "linear-gradient(150deg, rgb(3, 20, 105) 0%, rgb(9, 42, 158) 90%)";
});
// ! paramètres pour les grilles d'eurodream
buttonEurodream.addEventListener('click', function(){
    const containerElement = document.querySelector('.container');
    containerElement.innerHTML = "";
    tirage(1, 40, 1, 5, 6, 1)
    bodyElement.style.background = "linear-gradient(150deg, rgb(120, 30, 166) 0%, rgb(159, 94, 191)90%)";
});

// ! Définition de la fonction de tirage et des paramètres
function tirage(defaultMin, defaultMax, defaultBonusMin, defaultBonusMax, defaultBall, defaultBonusBall){

// ! CRÉATION DE MES FONCTIONS POUR UN TIRAGE
    // * Je crée une fonction qui me permet de récupérer un numéro aléatoire entre 1 et le maximum du jeu (défini en paramètre)
    function randomNumber(min = defaultMin, max = defaultMax){
        return Math.floor(Math.random() * (max - min +1)) + min;
    };
    // * Je crée une fonction qui me permet de récupérer un numéro aléatoire entre 1 et le maximum du jeu (défini en paramètre)
    function randomNumberBonus(min = defaultBonusMin, max = defaultBonusMax){
        return Math.floor(Math.random() * (max - min +1)) + min;
    };
    
    // * RÉCUPÉRATION DE MON OBJET .CONTAINER
    const containerElement = document.querySelector('.container');
    console.dir(containerElement);
    
    // * CRÉATION DE MES ÉLÉMENTS DIV ET DE LEURS ÉLÉMENTS P, DANS MON ÉLÉMENT .CONTAINER
    
    // * Je crée un tableau vide qui stockera plus tard les valeurs aléatoires obtenues par la fonction randomNumber
    let randomNumberArray = [];

    // * Je crée une première boucle qui va créer les X premières div avec la class .ball
    for (i = 0; i < defaultBall ; i++){
        const divElement = document.createElement('div');
        containerElement.prepend(divElement);
        divElement.classList.add('ball');
        const pElement = document.createElement('p');
        pElement.textContent = `${randomNumber()}`;
        randomNumberArray.unshift(pElement.textContent);
        divElement.append(pElement);
        // * J'ajoute un ecouteur d'évenement au click de chaque div pour changer le numéro si besoin
        divElement.addEventListener('click', function(){
            pElement.textContent = `${randomNumber()}`;
        })
    };
    // * Je crée une seconde boucle qui va créer les X dernières div avec la class .bonus-ball
    for (i = 0; i < defaultBonusBall ; i++){
        const divElement = document.createElement('div');
        containerElement.appendChild(divElement);
        divElement.classList.add('bonus-ball');
        const pElement = document.createElement('p');
        divElement.append(pElement);
        pElement.textContent = `${randomNumberBonus()}`;
        // * J'ajoute un ecouteur d'évenement au click de chaque div pour changer le numéro si besoin
        divElement.addEventListener('click', function(){
            pElement.textContent = `${randomNumberBonus()}`;
        })
    };
    
    };

// TODO - J'aimerai qu'un numéro ne sorte pas plus d'une fois par tirage pour empêcher les doublons

// // BONUS - Faire en sorte qu'un bouton permette de générer une nouvelle grille
// // BONUS ENCORE PLUS OUF - Permettre à l'utilisateur de choisir son jeu et générer un nombre de balles en fonction du jeu choisi
// TODO NEXT - Faire en sorte qu'un bouton permette de détruire la grille avec une animation venue toute droite depuis l'ISS