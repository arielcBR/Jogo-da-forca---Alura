/* VARIAVEIS E CONSTANTES*/
var wordsAdded = ["JAVASCRIPT", "HTML", "ALURA", "CSS", "NODE", "FRAMEWORK", "JAVA", "GIT", "WINDOWS"];
const tentativas = 8;

    /* VARIAVEIS DE CONTROLE */
var erros = 0;
var listaDinamica = [];

/* SELETORES */
const btnStart = document.getElementById("btnStart");
const btnAddWords = document.getElementById("btnAddWord");
const btnCancelGame = document.getElementById("btnCancelGame");
const btnSave = document.getElementById("btnSave");
const btnCancelAdd = document.getElementById("btnCancelAdd");
const btnNewGame = document.getElementById("btnNewGame");
const homePage = document.getElementById("homePage");
const addPage = document.getElementById("addPage");
const gamePage = document.getElementById("gamePage");
const inputWordToAdd = document.getElementById('textInput');
const palavraSecreta = document.getElementById("palavra-secreta");


/* PRINCIPAL */

btnStart.addEventListener("click", () => {
    console.log("Jogo iniciado...");
    initGamePage();
    newGame();
    
});

btnCancelGame.addEventListener("click", () => {
    console.log("Status: " + statusGame);
    if (statusGame == true) {
        initHomePage();
    }
});

btnAddWords.addEventListener("click", () => {
    console.log("Adicionando palavras a lista...");
    initAddPage();
});

btnSaveWord.addEventListener("click", () => {
    if (statusAdd == true) {
        var wordToAdd = inputWordToAdd.value.toUpperCase();
        if (wordToAdd.length > 8 || wordToAdd == "") {
            alert("A palavra está fora das especificações!!!");
            inputWordToAdd.value = " ";
        }
        else {
            inputWordToAdd.value = " ";
            wordsAdded.push(wordToAdd);
            initGamePage();
        }
    }
})

btnCancelAdd.addEventListener("click", () => {
    initHomePage();
});

btnNewGame.addEventListener("click", () => {
    newGame();
})

/* FUNÇÕES */

function initGamePage() {
    gamePage.classList.remove("invisible");
    homePage.classList.add("invisible");
    addPage.classList.add("invisible");
    statusGame = true;
    statusHome = false;
    statusAdd = false;
}

function initAddPage() {
    gamePage.classList.add("invisible");
    homePage.classList.add("invisible");
    addPage.classList.remove("invisible");
    statusGame = false;
    statusHome = false;
    statusAdd = true;
}

function initHomePage() {
    gamePage.classList.add("invisible");
    homePage.classList.remove("invisible");
    addPage.classList.add("invisible");
    statusGame = false;
    statusHome = true;
    statusAdd = false;
}

function choosingWord(wordsAdded) {
    let index = [Math.floor(Math.random() * wordsAdded.length)];
    return wordsAdded[index];
}

function newGame() {
    erros = 0;
    var secretWord = choosingWord(wordsAdded);
    console.log("A palavra secreta é: " + secretWord);
    palavraSecreta.innerHTML = "";
    for (let i = 0; i < secretWord.length; i++){
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp";
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>";
        }
        else {
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"; 
        }
    }
    
}

function checkLetterTyped(letter) {
    alert("Pressionada a letra " + letter);
}