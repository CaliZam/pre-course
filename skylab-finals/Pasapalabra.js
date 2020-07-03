// Pasapalabra

var questions = [
    { letter: "a", result: 0, answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { letter: "b", result: 0, answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { letter: "c", result: 0, answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
    { letter: "d", result: 0, answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { letter: "e", result: 0, answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
    { letter: "f", result: 0, answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
    { letter: "g", result: 0, answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
    { letter: "h", result: 0, answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
    { letter: "i", result: 0, answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },
    { letter: "j", result: 0, answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
    { letter: "k", result: 0, answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
    { letter: "l", result: 0, answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },
    { letter: "m", result: 0, answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
    { letter: "n", result: 0, answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },
    { letter: "ñ", result: 0, answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
    { letter: "o", result: 0, answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
    { letter: "p", result: 0, answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
    { letter: "q", result: 0, answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
    { letter: "r", result: 0, answer: "raton", status: 0, question: "CON LA R. Roedor" },
    { letter: "s", result: 0, answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
    { letter: "t", result: 0, answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
    { letter: "u", result: 0, answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
    { letter: "v", result: 0, answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
    { letter: "w", result: 0, answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
    { letter: "x", result: 0, answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
    { letter: "y", result: 0, answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos" },
    { letter: "z", result: 0, answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
];

var getName = [];
var result = 0;

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
    var i = 0;
    var keepAskingQuestion = true;
    while (keepAskingQuestion) {
        var promptAnswer = prompt(questions[i].question);
        if (promptAnswer !== null) {
            promptAnswer = promptAnswer.toLowerCase();
        }
        if (promptAnswer == "") {
            alert('No has indicado ninguna respuesta, ' + getName + ' por favor indica Pasapalabra si quieres continuar con la siguiente letra, o presiona "Cancelar" para finalizar.');
        } else if (promptAnswer === null || promptAnswer.toLowerCase() == "end") {
            alert('Gracias por participar ' + getName);
            keepAskingQuestion = false;
        } else if (promptAnswer == "pasapalabra") {
        	alert('Pasamos palabra!!');
        	questions[i].status = 0;
            i++;
        } else {
            checkTheAnswer(promptAnswer, i);
            i++;
        }
        keepAskingQuestion = !(allQuestionHaveBeenAnswered() || promptAnswer == "end" || promptAnswer === null);
    }
}

function checkTheAnswer(answer, index) {
    if (answer == questions[index].answer) {
        questions[index].status = 1;
        questions[index].result = 1;
        result++;
        alert('Correcto!!\nLlevas ' + (index+1) + ' preguntas, con un total de ' + result + ' aciertos');
    } else {
        alert('Lo sentimos, respuesta incorrecta\nLlevas ' + (index+1) + ' preguntas, con un total de ' + result + ' aciertos');
        questions[index].status = 1;
        questions[index].result = 0;
    }
}

function allQuestionHaveBeenAnswered() {
    for (var status in questions) {
        if (status.hasOwnProperty(0)) {
            return false;
        } else {
            return true;
        }
    }
}
pasalacabra();