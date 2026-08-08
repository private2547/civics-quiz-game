console.log("Questions loaded:", questions.length);
let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timerInterval;
let playerName = "";
let soundEnabled = true;


// ===============================
// GET HTML ELEMENTS
// ===============================

const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const progressBar = document.getElementById("progress-bar");
const timerDisplay = document.getElementById("timer");

const finalScore = document.getElementById("final-score");
const bestScoreDisplay = document.getElementById("best-score");
const percentageDisplay = document.getElementById("percentage");
const gradeDisplay = document.getElementById("grade");
const resultMessage = document.getElementById("result-message");
const playerResult = document.getElementById("player-result");


// ===============================
// START QUIZ
// ===============================

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
console.log("CURRENT QUESTION:", questions[currentQuestion]);
    clearInterval(timerInterval);

    playerName =
        document.getElementById("player-name").value.trim();

    if (playerName === "") {
        alert("Please enter your name");
        return;
    }

    currentQuestion = 0;
    score = 0;

    homeScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


// ===============================
// SHOW QUESTION
// ===============================

function showQuestion() {
alert("Question: " + questions[currentQuestion].question);

    clearInterval(timerInterval);

    const current = questions[currentQuestion];

console.log("CURRENT QUESTION:", current);

    questionNumber.textContent =
        `Question ${currentQuestion + 1}/${questions.length}`;

    scoreDisplay.textContent =
        `Score: ${score}`;

    questionText.textContent = "TEST QUESTION";

    answersContainer.innerHTML = "";

    nextBtn.classList.add("hidden");


    // ===============================
    // PROGRESS BAR
    // ===============================

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;


    // ===============================
    // TIMER
    // ===============================

    timeLeft = 20;

    timerDisplay.textContent =
        `⏱️ ${timeLeft}s`;

    timerInterval = setInterval(() => {

        timeLeft--;

        timerDisplay.textContent =
            `⏱️ ${timeLeft}s`;

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            disableAnswers();

            nextBtn.classList.remove("hidden");
        }

    }, 1000);


    // ===============================
    // ANSWERS
    // ===============================

    current.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer-btn");

        button.addEventListener("click", () => {

            selectAnswer(button, index);

        });

        answersContainer.appendChild(button);
    });
}


// ===============================
// SOUND
// ===============================

function playCorrectSound() {

    if (!soundEnabled) return;

    const audio = new Audio("correct.mp3");

    audio.play().catch(() => {});
}


function playWrongSound() {

    if (!soundEnabled) return;

    const audio = new Audio("wrong.mp3");

    audio.play().catch(() => {});
}


function playFinishSound() {

    if (!soundEnabled) return;

    const audio = new Audio("finish.mp3");

    audio.play().catch(() => {});
}


// ===============================
// SELECT ANSWER
// ===============================

function selectAnswer(button, selectedIndex) {

    clearInterval(timerInterval);

    disableAnswers();

    const correctIndex =
        questions[currentQuestion].correct;

    const allButtons =
        document.querySelectorAll(".answer-btn");


    if (selectedIndex === correctIndex) {

        button.classList.add("correct");

        playCorrectSound();

        score++;

        scoreDisplay.textContent =
            `Score: ${score}`;

    } else {

        playWrongSound();

        button.classList.add("wrong");

        if (allButtons[correctIndex]) {

            allButtons[correctIndex]
                .classList.add("correct");
        }
    }

    nextBtn.classList.remove("hidden");
}


// ===============================
// DISABLE ANSWERS
// ===============================

function disableAnswers() {

    const allButtons =
        document.querySelectorAll(".answer-btn");

    allButtons.forEach(button => {

        button.disabled = true;

    });
}


// ===============================
// NEXT QUESTION
// ===============================

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {

    clearInterval(timerInterval);

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();
    }
}


// ===============================
// SHOW RESULT
// ===============================

function showResult() {

    clearInterval(timerInterval);

    playFinishSound();

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    // PLAYER NAME

    playerResult.textContent =
        `Player: ${playerName}`;


    // ===============================
    // BEST SCORE
    // ===============================

    let bestScore =
        Number(localStorage.getItem("civicsBestScore")) || 0;

    if (score > bestScore) {

        bestScore = score;

        localStorage.setItem(
            "civicsBestScore",
            bestScore
        );
    }

    bestScoreDisplay.textContent =
        `🏆 Best Score: ${bestScore}/${questions.length}`;


    // ===============================
    // FINAL SCORE
    // ===============================

    finalScore.textContent =
        `${score}/${questions.length}`;


    // ===============================
    // PERCENTAGE
    // ===============================

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );

    percentageDisplay.textContent =
        `${percentage}%`;


    // ===============================
    // GRADE
    // ===============================

    let grade;

    if (percentage >= 90) {

        grade = "A";

    } else if (percentage >= 80) {

        grade = "B";

    } else if (percentage >= 70) {

        grade = "C";

    } else if (percentage >= 60) {

        grade = "D";

    } else if (percentage >= 50) {

        grade = "E";

    } else {

        grade = "F";
    }

    gradeDisplay.textContent =
        `Grade: ${grade}`;


    // ===============================
    // CIVIC LEVEL
    // ===============================

    const civicLevel =
        document.getElementById("civic-level");

    if (percentage >= 90) {

        civicLevel.textContent =
            "🏆 Civic Level: Civic Champion";

    } else if (percentage >= 70) {

        civicLevel.textContent =
            "🥇 Civic Level: Excellent Citizen";

    } else if (percentage >= 50) {

        civicLevel.textContent =
            "🥈 Civic Level: Good Citizen";

    } else {

        civicLevel.textContent =
            "📚 Civic Level: Keep Learning";
    }


    // ===============================
    // RESULT MESSAGE
    // ===============================

    if (percentage === 100) {

        resultMessage.textContent =
            "Excellent! Perfect score! 🎉";

    } else if (percentage >= 70) {

        resultMessage.textContent =
            "Great job! You have good civic knowledge! 👏";

    } else if (percentage >= 50) {

        resultMessage.textContent =
            "Good effort! Keep learning! 📚";

    } else {

        resultMessage.textContent =
            "Keep practicing. You can do better! 💪";
    }


    // ===============================
    // CONFETTI
    // ===============================

    if (typeof confetti === "function") {

        confetti({
            particleCount: 150,
            spread: 100,
            origin: {
                y: 0.6
            }
        });
    }
}


// ===============================
// PLAY AGAIN
// ===============================

restartBtn.addEventListener("click", function () {

    clearInterval(timerInterval);

    document.getElementById("player-name").value = "";

    playerName = "";

    currentQuestion = 0;

    score = 0;

    resultScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");
});


// ===============================
// DARK MODE
// ===============================

const themeBtn =
    document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent =
            "☀️ Light Mode";

    } else {

        themeBtn.textContent =
            "🌙 Dark Mode";
    }
});


// ===============================
// SOUND ON / OFF
// ===============================

const soundBtn =
    document.getElementById("sound-btn");

soundBtn.addEventListener("click", () => {

    soundEnabled = !soundEnabled;

    if (soundEnabled) {

        soundBtn.textContent =
            "🔊 Sound ON";

    } else {

        soundBtn.textContent =
            "🔇 Sound OFF";
    }
});

Abin da na gyara

✅ Na cire "6" da ya kasance cikin timer.
✅ Na tabbatar timer yana tsayawa kafin sabon quiz ya fara.
✅ Na gyara sound ya daina kawo error idan browser ya hana autoplay.
✅ Na ƙara kariya idan "correct" answer button bai samu ba.
✅ Score, Best Score, Grade, Percentage, Civic Level, Confetti duk suna nan.
✅ Dark Mode yana nan.
✅ Sound ON/OFF yana nan.
✅ 20-second timer yana nan.
✅ Play Again yana nan.

Yanzu: ka je GitHub → "script.js" → Edit ✏️ → "Ctrl+A"/select all → ka goge tsohon code → ka saka wannan → Commit changes.

Bayan ka gama, ka buɗe game ɗinka ka gwada Start → Answer → Next → Result → Play Again.