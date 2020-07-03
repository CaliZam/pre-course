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


function pasalacabra() {
    helloAndStart();
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
            var isValidInput = getName.match('^[a-zA-Z]+$');
            if (!isValidInput) {
                alert('No ha introducido datos correctos');
                keepAskingName = true;
            } else if (getName) {
                alert("Bienvenido " + getName);
                keepAskingName = false;
                var shallWeStart = confirm('Empezamos?');
                if (shallWeStart) {
                    runGame();
                } else {
                    alert('Gracias por participar ' + getName + "!!");
                }
            }
        }
    }
    return getName;
}


function runGame() {
    do {
        var whichQuestion = Math.floor(Math.random() * 3);
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].status == 0 && keepPlaying == true) {
                var promptAnswer = prompt(questions[i].question[whichQuestion]);
                if (promptAnswer !== null) {
                    promptAnswer = promptAnswer.toLowerCase();
                }
                if (promptAnswer == "") {
                    alert('No has indicado ninguna respuesta, ' + getName + ' por favor indica Pasapalabra si quieres continuar con la siguiente letra, o presiona "Cancelar" para finalizar.');
                } else if (promptAnswer === null || promptAnswer.toLowerCase() == "end") {
                    alert('Gracias por participar ' + getName + '\nHas respondido ' + (i + 1) + ' preguntas, con un total de ' + result + ' aciertos');
                    return keepPlaying = false;
                } else if (promptAnswer == "pasapalabra") {
                    alert('Pasamos palabra!!');
                } else {
                    checkTheAnswer(promptAnswer, i);
                }
            }

        }
    } while (keepPlaying);
    return whichQuestion;
    console.log(whichQuestion);
}
var whichQuestion;
console.log(whichQuestion);

function checkTheAnswer(answer, index) {
    console.log(whichQuestion);
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



pasalacabra();