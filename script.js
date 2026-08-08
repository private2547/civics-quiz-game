let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timerInterval = null;
let playerName = "";
let soundEnabled = true;

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
const civicLevel = document.getElementById("civic-level");


// =========================
// START QUIZ
// =========================

function startQuiz() {

    playerName =
        document.getElementById("player-name").value.trim();

    if (playerName === "") {
        alert("Please enter your name");
        return;
    }

    if (!Array.isArray(questions) || questions.length === 0) {
        alert("Questions could not be loaded.");
        return;
    }

    clearInterval(timerInterval);

    currentQuestion = 0;
    score = 0;

    homeScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}


// =========================
// SHOW QUESTION
// =========================

function showQuestion() {

    clearInterval(timerInterval);

    const current = questions[currentQuestion];
console.log("CURRENT QUESTION:", current);

    if (!current) {
        showResult();
        return;
    }
    
    questionNumber.textContent =
        `Question ${currentQuestion + 1}/10`;

    scoreDisplay.textContent =
        `Score: ${score}`;

    questionText.textContent =
        current.question;

    answersContainer.innerHTML = "";

    nextBtn.classList.add("hidden");

    const progress =
        ((currentQuestion + 1) / 10) * 100;

    progressBar.style.width =
        `${progress}%`;

    timeLeft = 20;

    timerDisplay.textContent =
        `⏱️ ${timeLeft}s`;


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
}


// =========================
// SELECT ANSWER
// =========================

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

        button.classList.add("wrong");

        playWrongSound();

        if (allButtons[correctIndex]) {
            allButtons[correctIndex]
                .classList.add("correct");
        }
    }

    nextBtn.classList.remove("hidden");
}


// =========================
// DISABLE ANSWERS
// =========================

function disableAnswers() {

    document
        .querySelectorAll(".answer-btn")
        .forEach(button => {
            button.disabled = true;
        });
}


// =========================
// NEXT QUESTION
// =========================

function nextQuestion() {

    clearInterval(timerInterval);

    currentQuestion++;

    if (currentQuestion < 10) {

        showQuestion();

    } else {

        showResult();

    }
}


// =========================
// RESULT
// =========================

function showResult() {

    clearInterval(timerInterval);

    playFinishSound();

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    playerResult.textContent =
        `Player: ${playerName}`;

    const totalQuestions = 10;

    finalScore.textContent =
        `${score}/${totalQuestions}`;

    const percentage =
        Math.round(
            (score / totalQuestions) * 100
        );

    percentageDisplay.textContent =
        `${percentage}%`;


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


    let bestScore =
        Number(
            localStorage.getItem("civicsBestScore")
        ) || 0;

    if (score > bestScore) {

        bestScore = score;

        localStorage.setItem(
            "civicsBestScore",
            bestScore
        );
    }

    bestScoreDisplay.textContent =
        `🏆 Best Score: ${bestScore}/10`;


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


// =========================
// SOUND
// =========================

function playCorrectSound() {

    if (!soundEnabled) return;

    const audio =
        new Audio("correct.mp3");

    audio.play().catch(() => {});
}


function playWrongSound() {

    if (!soundEnabled) return;

    const audio =
        new Audio("wrong.mp3");

    audio.play().catch(() => {});
}


function playFinishSound() {

    if (!soundEnabled) return;

    const audio =
        new Audio("finish.mp3");

    audio.play().catch(() => {});
}


// =========================
// PLAY AGAIN
// =========================

function restartQuiz() {

    clearInterval(timerInterval);

    document.getElementById("player-name").value = "";

    playerName = "";
    currentQuestion = 0;
    score = 0;

    resultScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
}


// =========================
// BUTTONS
// =========================

startBtn.addEventListener(
    "click",
    startQuiz
);

nextBtn.addEventListener(
    "click",
    nextQuestion
);

restartBtn.addEventListener(
    "click",
    restartQuiz
);


// =========================
// DARK MODE
// =========================

const themeBtn =
    document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        themeBtn.textContent =
            "☀️ Light Mode";

    } else {

        themeBtn.textContent =
            "🌙 Dark Mode";
    }

});


// =========================
// SOUND BUTTON
// =========================

const soundBtn =
    document.getElementById("sound-btn");

soundBtn.addEventListener("click", () => {

    soundEnabled = !soundEnabled;

    soundBtn.textContent =
        soundEnabled
            ? "🔊 Sound ON"
            : "🔇 Sound OFF";

});
