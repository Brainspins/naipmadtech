// Инициализация индекса вопроса
let currentQuestionIndex = 0;

// Массив с вопросами и аудиофайлами
const questions = [
    { text: "Go to the furthest point of the room and meditate about life.", agreeAudio: "sounds/agree4.mp3", disagreeAudio: "sounds/disagree1.mp3", backgroundImage: "images/background1.jpg" },
    { text: "Would you like to read someone else’s thoughts?", agreeAudio: "sounds/agree2.mp3", disagreeAudio: "sounds/disagree2.mp3", backgroundImage: "images/background3.jpg" },
    { text: "Take the microphone and make some beatbox.", agreeAudio: "sounds/agree1.mp3", disagreeAudio: "sounds/disagree3.mp3", backgroundImage: "images/background2.jpg" },
    { text: "Play some mysterious notes on the piano.", agreeAudio: "sounds/agree3.mp3", disagreeAudio: "sounds/disagree4.mp3", backgroundImage: "images/background4.jpg" },
    { text: "Ask for 1 min of silence and listen the sounds of the room.", agreeAudio: "sounds/agree4.mp3", disagreeAudio: "sounds/disagree1.mp3", backgroundImage: "images/background5.jpg" },
    { text: "Are you still here?", agreeAudio: "sounds/agree1.mp3", disagreeAudio: "sounds/disagree2.mp3", backgroundImage: "images/background6.jpg" },
    { text: "Invite another participant to respond to this message and continue.", agreeAudio: "sounds/agree2.mp3", disagreeAudio: "sounds/disagree3.mp3", backgroundImage: "images/background9.jpg" },
    { text: "Do you like coffee from the Blockhouse?", agreeAudio: "sounds/agree3.mp3", disagreeAudio: "sounds/disagree4.mp3", backgroundImage: "images/background7.jpg" },
    { text: "Create a little conducting piece: when you raise your hands, everybody shouts. When your hands are down, everybody is quite. You can play with that and create dynamics, new sounds… Enjoy!", agreeAudio: "sounds/agree4.mp3", disagreeAudio: "sounds/disagree1.mp3", backgroundImage: "images/background9.jpg" },
    { text: "Did you like it?", agreeAudio: "sounds/agree1.mp3", disagreeAudio: "sounds/disagree1.mp3", backgroundImage: "images/background10.jpg" },

    // Добавьте больше вопросов по аналогии
];

function playSound(soundFile, callback) {
    var sound = new Howl({
        src: [soundFile],
        onend: callback
    });
    sound.play();
}

function changeBackground(imageFile) {
    // Замените 'body' на селектор нужного контейнера, если требуется
    document.body.style.backgroundImage = `url('${imageFile}')`;
}
function changeQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerHTML = questions[currentQuestionIndex].text;
        // Изменение фона
        changeBackground(questions[currentQuestionIndex].backgroundImage);
    } else {
        document.getElementById('question').innerHTML = "Jump as high as you can! Thank you!";
        // Скрываем кнопки или делаем их неактивными
        document.getElementById('agree').style.display = 'none';
        document.getElementById('disagree').style.display = 'none';
    }
}


document.getElementById('agree').addEventListener('click', function() {
    // Воспроизвести музыку согласия и ждать ее окончания
    playSound(questions[currentQuestionIndex].agreeAudio, changeQuestion);
});

document.getElementById('disagree').addEventListener('click', function() {
    // Воспроизвести музыку несогласия и ждать ее окончания
    playSound(questions[currentQuestionIndex].disagreeAudio, changeQuestion);
});

// Инициализируем первый вопрос
document.getElementById('question').innerHTML = questions[0].text;

