/* VARIAVEIS */
var wordsAdded = ["JAVASCRIPT", "HTML", "BOOTSTRAP", "CSS", "NODE", "FRAMEWORK", "JAVA", "GIT", "WINDOWS"];

    /* VARIAVEIS DE CONTROLE */
var statusHome = false;
var statusAdd = false;
var statusGame = false;

/* SELETORES */
const btnStart = document.getElementById("btnStart");
const btnAddWords = document.getElementById("btnAddWord");
const homePage = document.getElementById("homePage");
const addPage = document.getElementById("addPage");
const gamePage = document.getElementById("gamePage");
const btnCancelGame = document.getElementById("btnCancelGame");
const btnSave = document.getElementById("btnSave");
const btnCancelAdd = document.getElementById("btnCancelAdd");
const btnSaveWord = document.getElementById("btnSaveWord");
const inputWordToAdd = document.getElementById('textInput');


/* PRINCIPAL */

btnStart.addEventListener("click", () => {
    console.log("Jogo iniciado...");
    initGamePage();
    // Sortear a palavra
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
        if (wordToAdd.length > 8) {
            alert("A palavra inserida excedeu o tamanho máximo!!!");
        }
        else {
            inputWordToAdd.value = " ";
            wordsAdded.push(wordToAdd);
            initGamePage();
        }
    }
})

btnCancelAdd.addEventListener("click", () => {
    if (statusAdd == true) {
        initHomePage();
    }
});

/* FUNÇÕES */

function choosingWord(wordsAdded) {
    let index = [Math.floor(Math.random() * wordsAdded.length)];
    return wordsAdded[index];
}

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
