
// Je veux créer trois boutons qui permettent de générer une novelle grille, soit de loto, soit d'euromillion, soit d'eurodream
// Je veux que ces boutons se trouvent dans une div en-dessous du disclaimer
// Je dois donc récupérer mon élément body
const bodyElement = document.querySelector('body');
// Je dois créer la div qui acceuillera les trois boutons
const divButtons = document.createElement("div")
// Je donne à cette div une nouvelle class
divButtons.classList.add("buttons-container");
// Je créé le bouton de loto
const buttonLoto = document.createElement("button");
buttonLoto.textContent = "LOTO";
buttonLoto.classList.add("button");
divButtons.append(buttonLoto);
// Je créé le bouton d'euromillion
const buttonEuromillion = document.createElement("button");
buttonEuromillion.textContent = "EUROMILLION";
buttonEuromillion.classList.add("button");
divButtons.append(buttonEuromillion);
// Je crée le bouton d'eurodream
const buttonEurodream = document.createElement("button");
buttonEurodream.textContent = "EURODREAM";
buttonEurodream.classList.add("button");
divButtons.append(buttonEurodream);
// J'ajoute la div au body
bodyElement.prepend(divButtons);

// Je veux que lorsque je clique sur le bouton de loto, je genère une nouvelle grille de loto
buttonLoto.addEventListener('click', function(){
    // Je fais en sorte que le contenu du conteneur soit vide pour pouvoir ajouter une nouvelle grille de loto
    const containerElement = document.querySelector('.container');
    containerElement.innerHTML = "";
    tirage(1, 49, 1, 10, 5, 1);
});
// Je veux que lorsque je clique sur le bouton d'euromillion, je genère une nouvelle grille d'euromillion
buttonEuromillion.addEventListener('click', function(){
    const containerElement = document.querySelector('.container');
    containerElement.innerHTML = "";
    tirage(1, 50, 1, 12, 5, 2);
});
// Je veux que lorsque je clique sur le bouton d'eurodream, je genère une nouvelle grille d'eurodream
buttonEurodream.addEventListener('click', function(){
    const containerElement = document.querySelector('.container');
    containerElement.innerHTML = "";
    tirage(1, 40, 1, 5, 6, 1)
});

// Le secret pour devenir millionnaire est encapsulé ici même
function tirage(defaultMin, defaultMax, defaultBonusMin, defaultBonusMax, defaultBall, defaultBonusBall){

    /* CRÉATION DE MES FONCTIONS POUR UN TIRAGE*/
    // Je crée une fonction qui me permet de récupérer un numéro aléatoire entre 1 et le maximum du jeu (défini en paramètre)
    function randomNumber(min = defaultMin, max = defaultMax){
        return Math.floor(Math.random() * (max - min +1)) + min;
    };
    // Je crée une fonction qui me permet de récupérer un numéro aléatoire entre 1 et le maximum du jeu (défini en paramètre)
    function randomNumberBonus(min = defaultBonusMin, max = defaultBonusMax){
        return Math.floor(Math.random() * (max - min +1)) + min;
    };
    
    /* RÉCUPÉRATION DE MON OBJET .CONTAINER */ 
    // Je crée une variable qui récupère mon élément body dans lequel je vais intégrer mes divs
    const containerElement = document.querySelector('.container');
    console.dir(containerElement);
    
    /* CRÉATION DE MES ÉLÉMENTS DIV ET DE LEURS ÉLÉMENTS P, DANS MON ÉLÉMENT .CONTAINER */
    
    //Je crée un tableau vide qui stockera plus tard les valeurs aléatoires obtenues par la fonction randomNumber
    let randomNumberArray = [];

    // Je crée une première boucle qui va créer les X premières div avec la class .ball
    //  - chaque p contiendra un textContent
    //  - chaque textContent affichera un randomNumber
    for (i = 0; i < defaultBall ; i++){
        const divElement = document.createElement('div');
        containerElement.prepend(divElement);
        divElement.classList.add('ball');
        const pElement = document.createElement('p');
        pElement.textContent = `${randomNumber()}`;
        randomNumberArray.unshift(pElement.textContent);
        divElement.append(pElement);
    };
    console.log(randomNumberArray);
    // Je crée une seconde boucle qui va créer les X dernières div avec la class .bonus-ball
    //  - chaque p contiendra un textContent
    //  - chaque textContent affichera un randomNumberBunu
    for (i = 0; i < defaultBonusBall ; i++){
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