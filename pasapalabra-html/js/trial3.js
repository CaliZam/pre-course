// Pasapalabra
var questions = [

    { letter: "a", answer: ["abducir", "abandonar", "arrancar"], status: 0, question: [("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"), ("CON LA A. dejar,olvidar,..."), ("CON LA A. sacar de raiz")] },
    { letter: "b", answer: ["bingo", "birlar", "beber"], status: 0, question: [("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"), ("CON LA B. Hurtar algo sin intimidación y con disimulo."), ("CON LA B. Ingerir un líquido")] },
    { letter: "c", answer: ["churumbel", "correr", "cantar"], status: 0, question: [("CON LA C. Niño, crío, bebé"), ("CON LA C. Hacer algo con rapidez, darse prisa"), ("CON LA C.Dicho de una persona: Producir con la voz sonidos melodiosos, formando palabras o sin formarlas")] },
    { letter: "d", answer: ["diarrea", "divertido", "diverso"], status: 0, question: [("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"), ("CON LA D. Alegre, festivo y de buen humor."), ("CON LA D. De distinta naturaleza, especie, número, forma"), ] },
    { letter: "e", answer: ["ectoplasma", "estorbar", "eructar"], status: 0, question: [("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"), (" CON LA E. Poner dificultad u obstáculo a la ejecución de algo."), ("CON LA E. Expeler con ruido por la boca los gases del estómago.")] },
    { letter: "f", answer: ["facil", "fardar", "festejar"], status: 0, question: [("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"), ("CON LA F. Presumir, jactarse, alardear."), ("CON LA F. Celebrar algo con una fiesta u otra manifestación de alegría o agrado.")] },
    { letter: "g", answer: ["galaxia", "garantia", "garganta"], status: 0, question: [("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"), ("CON LA G. Compromiso temporal del fabricante o vendedor, por el que se obliga a reparar gratuitamente algo vendido en caso de avería."), ("CON LA G. Espacio interno comprendido entre el velo del paladar y la entrada del esófago y de la laringe.")] },
    { letter: "h", answer: ["harakiri", "habano", "huerto"], status: 0, question: [("CON LA H. Suicidio ritual japonés por desentrañamiento"), ("CON LA H. Cigarro puro elaborado en la isla de Cuba con hoja de la planta de aquel país."), ("CON LA H. Terreno de corta extensión, generalmente cercado, en que se cultivan verduras, legumbres y árboles frutales.")] },
    { letter: "i", answer: ["iglesia", "iterar", "ingresar"], status: 0, question: [("CON LA I. Templo cristiano"), ("CON LA I. recorrer un flujo de datos mediante bucles"), ("COM LA I. Meter a un enfermo en un establecimiento sanitario para su tratamiento.")] },
    { letter: "j", answer: ["jabali", "juzgar", "jerarquia"], status: 0, question: [("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"), ("CON LA J. Formar opinión sobre algo o alguien."), ("CON LA J.Gradación de personas, valores o dignidades.")] },
    { letter: "k", answer: ["kamikaze", "karaoke", "karate"], status: 0, question: [("CON LA K. Persona que se juega la vida realizando una acción temeraria"), ("CON LA K. Diversión consistente en interpretar una canción sobre un fondo musical grabado, mientras se sigue la letra que aparece en una pantalla."), ("CON LA K. Modalidad de lucha japonesa, basada en golpes secos realizados con el borde de la mano, los codos o los pies, y que es fundamentalmente un arte de defensa.")] },
    { letter: "l", answer: ["licantropo", "librar", "liga"], status: 0, question: [("CON LA L. Hombre lobo"), ("CON LA L. Sacar o preservar a alguien de un trabajo, mal o peligro."), ("CON LA L. Cinta o banda de tejido normalmente elástico para sujetar las medias o los calcetines.")] },
    { letter: "m", answer: ["misantropo", "mimar", "migrar"], status: 0, question: [("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"), ("CON LA M. Tratar con excesivo regalo, cariño y condescendencia a alguien, y en especial a los niños."), ("CON LA M. Trasladarse desde el lugar en que se habita a otro diferente.")] },
    { letter: "n", answer: ["necedad", "navegable", "negar"], status: 0, question: [("CON LA N. Demostración de poca inteligencia"), ("CON LA N. Dicho de un río, de un lago, de un canal, etc.: Apto para navegar."), ("CON LA N.  Dejar de reconocer algo, no admitir su existencia.")] },
    { letter: "o", answer: ["orco", "ostra", "obcecar"], status: 0, question: [("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"), ("CON LA O. Concha de la madreperla."), ("CON LA O. Cegar, deslumbrar u ofuscar.")] },
    { letter: "p", answer: ["protoss", "promulgar", "pactar"], status: 0, question: [("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"), ("CON LA P. Hacer que algo se divulgue y propague mucho en el público."), ("CON LA P. Acordar algo entre dos o más personas o entidades, obligándose mutuamente a su observancia.")] },
    { letter: "q", answer: ["queso", "quemar", "quitar"], status: 0, question: [("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"), ("CON LA Q. Dicho del fuego: Destruir algo o a alguien."), ("CON LA Q. Tomar o coger algo ajeno, hurtar.")] },
    { letter: "r", answer: ["raton", "rascar", "reptar"], status: 0, question: [("CON LA R. Roedor"), ("CON LA R. Refregar o frotar fuertemente la piel con algo agudo o áspero, y por lo regular con las uñas."), ("CON LA R. Andar arrastrándose como algunos reptiles.")] },
    { letter: "s", answer: ["stackoverflow", "sorber", "seco"], status: 0, question: [("CON LA S. Comunidad salvadora de todo desarrollador informático"), ("CON LA S. Beber aspirando."), ("CON LA S. Dicho de una cosa: Que carece de agua u otro líquido.")] },
    { letter: "t", answer: ["terminator", "tranquilidad", "tropiezo"], status: 0, question: [("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"), ("CON LA T. Cualidad de tranquilo."), ("CON LA T. Dificultad, contratiempo o impedimento en un trabajo, negocio o pretensión")] },
    { letter: "u", answer: ["unamuno", "urgir", "ulceroso"], status: 0, question: [("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"), ("CON LA U. Pedir o exigir algo con urgencia o apremio."), ("CON LA U. Que tiene úlceras.")] },
    { letter: "v", answer: ["vikingos", "verter", "vertebrado"], status: 0, question: [("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"), ("CON LA V. Derramar o vaciar líquidos, y también cosas menudas, como sal, harina, "), ("CON LA V. Que tiene vértebras.")] },
    { letter: "w", answer: ["sandwich", "windsurf", "wasabi"], status: 0, question: [("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"), ("CON LA W. Deporte que consiste en deslizarse por el agua sobre una tabla especial provista de una vela."), ("CON LA W. se emplea como condimento japonés. Se extrae del tallo de la planta del mismo nombre")] },
    { letter: "x", answer: ["botox", "xilofono", "xenofobia"], status: 0, question: [("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"), ("CON LA X. Instrumento musical de percusión formado por láminas generalmente de madera, ordenadas horizontalmente según su tamaño y sonido, que se hacen sonar golpeándolas con dos baquetas."), ("CON LA X. Fobia a los extranjeros.")] },
    { letter: "y", answer: ["peyote", "yihad", "yegua"], status: 0, question: [("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"), ("CON LA Y. Guerra santa de los musulmanes."), ("CON LA Y. Hembra del caballo.")] },
    { letter: "z", answer: ["zen", "zozobrar", "zoo"], status: 0, question: [("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"), ("CON LA Z. Dicho de una embarcación: Peligrar por la fuerza y contraste de los vientos."), ("CON LA Z. parque zoológico.")] },

];

var roscoLetters = document.getElementById("rosco");
var startPLay = document.getElementById("start");
var checkAnswerButton = document.getElementById("check-asnwer");
var pasapalabraButton = document.getElementById("pasapalabra");
var rosco = document.getElementsByClassName("letters");
var name = document.getElementById("nickname").innerText;

var result = 0;
var isOver = false:
    var otherPlayers = [
        { name: 'Donald Trump', points: 2 },
        { name: 'Goku', points: 8 },
        { name: 'Bill Gates', points: 25 }
    ];


function pasalacabra() {
    var userWantsToPlay = helloAndStart();
    if (!userWantsToPlay) {
        alert('Gracias por participar ' + name + "!!");
        return;
    }
    runGame();
}


function runGame() {
    var index = 0;
    var whichQuestion = Math.floor(Math.random() * 3);
    var keepPlaying = true;
    while (keepPlaying) { // noprotect
        isCompleted = isGameCompleted();
        if (isCompleted) {
            finalScore();
            return;
        }
        if (index === questions.length) {
            index = 0;
        }
        if (questions[index].status === 0) {
            var promptAnswer = prompt(questions[index].question[whichQuestion]);
            if (promptAnswer !== null) {
                promptAnswer = promptAnswer.toLowerCase();
            }
            if (promptAnswer == "") {
                alert('No has indicado ninguna respuesta, ' + name + ' por favor indica Pasapalabra si quieres continuar con la siguiente letra, o presiona "Cancelar" para finalizar.');
            } else if (promptAnswer === null || promptAnswer.toLowerCase() == "end") {
                alert('Gracias por participar ' + name + '\nHas respondido ' + (index + 1) + ' preguntas, con un total de ' + result + ' aciertos');
                return;
            } else if (promptAnswer == "pasapalabra") {
                index++;
                alert('Pasamos palabra!!');
            } else {
                checkTheAnswer(promptAnswer, index, whichQuestion);
                index++;
            }
        } else {
            ++index;
        }
    }
}


function checkTheAnswer(answer, index, whichQuestion) {
    if (answer == questions[index].answer[whichQuestion]) {
        questions[index].status = 1;
        result++;
        alert('Correcto!!\nLlevas ' + result + ' aciertos');
    } else {
        alert('Lo sentimos, respuesta incorrecta\nLlevas ' + result + ' aciertos');
        questions[index].status = 1;
    }
}

function isGameCompleted() {;
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].status === 0) {
            return false;
        }
    }
    return true;
}

function finalScore() {
    console.log('Asi quedan los puntajes:\n');
    for (var i = 0; i < otherPlayers.length; i++) {
        console.log(otherPlayers[i].name + ' ' + otherPlayers[i].points);
    }
    console.log(name + ' ' + result);
}


pasalacabra();