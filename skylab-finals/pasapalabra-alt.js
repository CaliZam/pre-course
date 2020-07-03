// Pasapalabra

var questions = [
    { letter: "a", answer: ["abducir", "abandonar", "arrancar"], status: 0, question: [("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"), ("CON LA A. dejar,olvidar,..."), ("CON LA A. sacar de raiz")] },
    { letter: "b", answer: ["bingo", "birlar", "beber"], status: 0, question: [("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"), ("CON LA B. Hurtar algo sin intimidación y con disimulo."), ("CON LA B. Ingerir un líquido")] },
    { letter: "c", answer: ["churumbel", "correr", "cantar"], status: 0, question: [("CON LA C. Niño, crío, bebé"), ("CON LA C. Hacer algo con rapidez, darse prisa"), ("CON LA C.Dicho de una persona: Producir con la voz sonidos melodiosos, formando palabras o sin formarlas")] },
    { letter: "d", answer: ["diarrea", "divertido", "diverso"], status: 0, question: [("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"), ("CON LA D. Alegre, festivo y de buen humor."), ("CON LA D. De distinta naturaleza, especie, número, forma")] },
    { letter: "e", answer: ["ectoplasma", "estorbar", "eructar"], status: 0, question: [("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"), (" CON LA E. Poner dificultad u obstáculo a la ejecución de algo."), ("CON LA E. Expeler con ruido por la boca los gases del estómago.")] }
];

var getName = [];
var result = 0;
var keepPlaying = true;

var otherPlayers = [
    { name: 'Donald Trump', points: 2 },
    { name: 'Goku', points: 8 },
    { name: 'Bill Gates', points: 25 }
];


function pasalacabra() {
    var userWantsToPlay = helloAndStart();
    if (!userWantsToPlay) {
        alert('Gracias por participar ' + getName + "!!");
        return;
    }
    runGame();
}


function helloAndStart() {
    var keepAskingName = true;
    while (keepAskingName) {
        var getName = prompt('Hola, indicanos tu nombre para comenzar:');
        if (getName === null) {
            alert('ok gracias por participar.');
            keepAskingName = false;
        } else if (getName) {
            var isValidInput = getName.match('^[a-zA-Z ]+$');
            if (!isValidInput) {
                alert('No ha introducido datos correctos');
                keepAskingName = true;
            } else if (getName) {
                alert("Bienvenido " + getName);
                keepAskingName = false;
                var shallWeStart = confirm('Empezamos?');
                return shallWeStart;
            }
        }
    }
}


function runGame() {
    var index = 0;
    debugger
    var whichQuestion = Math.floor(Math.random() * 3);
    var keepPlaying = true;
    while (keepPlaying) {
        var isGameCompleted = completedOrNot;
        if (isGameCompleted) {
            finalScore();
        } else if (!isGameCompleted && index === questions.length) {
            index = 0;
        }
        if (questions[index].status === 0) {
            var promptAnswer = prompt(questions[index].question[whichQuestion]);
            if (promptAnswer !== null) {
                promptAnswer = promptAnswer.toLowerCase();
            }
            if (promptAnswer == "") {
                alert('No has indicado ninguna respuesta, ' + getName + ' por favor indica Pasapalabra si quieres continuar con la siguiente letra, o presiona "Cancelar" para finalizar.');
            } else if (promptAnswer === null || promptAnswer.toLowerCase() == "end") {
                alert('Gracias por participar ' + getName + '\nHas respondido ' + (index + 1) + ' preguntas, con un total de ' + result + ' aciertos');
                return keepPlaying = false;
            } else if (promptAnswer == "pasapalabra") {
                index++;
                alert('Pasamos palabra!!');
            } else {
                checkTheAnswer(promptAnswer, index, whichQuestion);
                index++;
            }
        }
    }
}


function checkTheAnswer(answer, index, whichQuestion) {
    if (answer == questions[index].answer[whichQuestion]) {
        questions[index].status = 1;
        questions[index].result = 1;
        result++;
        alert('Correcto!!\nLlevas ' + (index + 1) + ' preguntas, con un total de ' + result + ' aciertos');
    } else {
        alert('Lo sentimos, respuesta incorrecta\nLlevas ' + (index + 1) + ' preguntas, con un total de ' + result + ' aciertos');
        questions[index].status = 1;
        questions[index].result = 0;
    }
}

var completedOrNot;

function isGameCompleted() {;
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].status == 0) {
            completedOrNot = false;
        } else {
            completedOrNot = true;
        }
    }
    return completedOrNot;
}

function finalScore() {
    for (var i = 0; i < otherPlayers.length; i++) {
        alert('Asi quedan los puntajes:\n' + otherPlayers[i].name + '\n' + otherPlayers[i].points + getName + '\n' + result);
    }
}
//if at least one status == 0 - return true (meaning game is completed)
// if all questions have status != 0, return false (nmeaning game is NOT completed

pasalacabra();