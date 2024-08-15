const quizData = [
    { question: "1. Which state is known for the Charminar?", answers: { a: "Madhya Pradesh", b: "Andhra Pradesh", c: "Telangana", d: "Kerala" }, correct: "c" },
    { question: "2. Where can you visit the Taj Mahal?", answers: { a: "Uttar Pradesh", b: "Rajasthan", c: "Delhi", d: "Haryana" }, correct: "a" },
    { question: "3. Which city is famous for the Gateway of India?", answers: { a: "Mumbai", b: "Pune", c: "Nagpur", d: "Goa" }, correct: "a" },
    { question: "4. In which state is the backwaters of Alleppey located?", answers: { a: "Tamil Nadu", b: "Kerala", c: "Goa", d: "Karnataka" }, correct: "b" },
    { question: "5. Which state is known for the Rock Garden?", answers: { a: "Uttarakhand", b: "Chandigarh", c: "Haryana", d: "Punjab" }, correct: "b" },
    { question: "6. Where can you visit the Qutub Minar?", answers: { a: "Delhi", b: "Jaipur", c: "Agra", d: "Varanasi" }, correct: "a" },
    { question: "7. Which state is known for the Sun Temple at Konark?", answers: { a: "Odisha", b: "West Bengal", c: "Jharkhand", d: "Bihar" }, correct: "a" },
    { question: "8. In which state is the Kaziranga National Park located?", answers: { a: "Assam", b: "Arunachal Pradesh", c: "Nagaland", d: "Meghalaya" }, correct: "a" },
    { question: "9. Which city is known for the Hawa Mahal?", answers: { a: "Jaipur", b: "Agra", c: "Delhi", d: "Bhopal" }, correct: "a" },
    { question: "10. Where is the famous Victoria Memorial located?", answers: { a: "Kolkata", b: "Chennai", c: "Bangalore", d: "Hyderabad" }, correct: "a" },
    { question: "11. Which state is known for the Mysore Palace?", answers: { a: "Karnataka", b: "Kerala", c: "Goa", d: "Madhya Pradesh" }, correct: "a" },
    { question: "12. In which state can you visit the Valley of Flowers?", answers: { a: "Himachal Pradesh", b: "Uttarakhand", c: "Sikkim", d: "Arunachal Pradesh" }, correct: "b" },
    { question: "13. Which state is famous for the Shimla hill station?", answers: { a: "Himachal Pradesh", b: "Uttarakhand", c: "Punjab", d: "Jammu & Kashmir" }, correct: "a" },
    { question: "14. Which city is known for the Ajanta and Ellora Caves?", answers: { a: "Aurangabad", b: "Pune", c: "Mumbai", d: "Nagpur" }, correct: "a" },
    { question: "15. Where can you visit the Golden Temple?", answers: { a: "Amritsar", b: "Chandigarh", c: "Ludhiana", d: "Jalandhar" }, correct: "a" },
    { question: "16. Which state is known for the Khajuraho Temples?", answers: { a: "Madhya Pradesh", b: "Uttar Pradesh", c: "Rajasthan", d: "Bihar" }, correct: "a" },
    { question: "17. In which state can you find the Hampi ruins?", answers: { a: "Karnataka", b: "Andhra Pradesh", c: "Goa", d: "Maharashtra" }, correct: "a" },
    { question: "18. Which city is famous for the Red Fort?", answers: { a: "Delhi", b: "Mumbai", c: "Kolkata", d: "Chennai" }, correct: "a" },
    { question: "19. Which state is known for the Ratha Yatra festival?", answers: { a: "Odisha", b: "Bihar", c: "West Bengal", d: "Jharkhand" }, correct: "a" },
    { question: "20. Where is the Ranthambore National Park located?", answers: { a: "Rajasthan", b: "Madhya Pradesh", c: "Gujarat", d: "Uttar Pradesh" }, correct: "a" },
    { question: "21. Which city is famous for the Lotus Temple?", answers: { a: "Delhi", b: "Hyderabad", c: "Chennai", d: "Kolkata" }, correct: "a" },
    { question: "22. In which state is the Sanchi Stupa located?", answers: { a: "Madhya Pradesh", b: "Bihar", c: "Uttar Pradesh", d: "Chhattisgarh" }, correct: "a" },
    { question: "23. Which state is known for the Kanyakumari Cape?", answers: { a: "Tamil Nadu", b: "Kerala", c: "Andhra Pradesh", d: "Goa" }, correct: "a" },
    { question: "24. Where can you visit the Jaisalmer Fort?", answers: { a: "Rajasthan", b: "Gujarat", c: "Haryana", d: "Punjab" }, correct: "a" },
    { question: "25. Which state is famous for the Chittorgarh Fort?", answers: { a: "Rajasthan", b: "Madhya Pradesh", c: "Uttar Pradesh", d: "Gujarat" }, correct: "a" }
];

const quizForm = document.getElementById('quiz-form');
const questionText = document.getElementById('question-text');
const answersContainer = document.querySelector('.answers-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const timerValue = document.getElementById('timer-value');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const retryQuizButton = document.getElementById('retry-quiz');
const leaderboard = document.getElementById('leaderboard');
const leaderboardList = document.getElementById('leaderboard-list');
const shareTwitter = document.getElementById('share-twitter');
const shareFacebook = document.getElementById('share-facebook');
const highContrastToggle = document.getElementById('high-contrast');
const timerElement = document.getElementById('timer');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let highContrast = false;

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = '';

    for (const [key, value] of Object.entries(currentQuestion.answers)) {
        const answerOption = document.createElement('div');
        answerOption.innerHTML = `
            <label>
                <input type="radio" name="answer" value="${key}">
                ${value}
            </label>
        `;
        answersContainer.appendChild(answerOption);
    }

    progressBar.value = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answerValue = selectedAnswer.value;
        if (answerValue === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            showResult();
        }
    } else {
        alert('Please select an answer.');
    }
}

function showResult() {
    resultContainer.classList.remove('hidden');
    feedbackContainer.classList.add('hidden');

    let resultText = `You scored ${score} out of ${quizData.length}. `;
    if (score >= 20) {
        resultText += 'Excellent!';
    } else if (score >= 15) {
        resultText += 'Good job!';
    } else {
        resultText += 'Better luck next time!';
    }
    resultMessage.textContent = resultText;

    // Display feedback and correct answers
    let feedback = '';
    quizData.forEach((question, index) => {
        feedback += `<p><strong>Q${index + 1}:</strong> ${question.question}</p>`;
        feedback += `<p><strong>Correct Answer:</strong> ${question.answers[question.correct]}</p>`;
    });
    feedbackText.innerHTML = feedback;
    feedbackContainer.classList.remove('hidden');

    // Add leaderboard functionality here
    // For simplicity, we'll skip this part in the initial implementation
}

function startTimer() {
    let timeLeft = 1200; // 10 minutes
    timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerValue.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            alert('Time is up!');
            showResult();
        }
    }, 1000);
}

function toggleHighContrast() {
    if (highContrast) {
        document.body.style.backgroundColor = '#f4f4f9';
        document.body.style.color = '#000';
        document.querySelectorAll('button').forEach(btn => btn.style.backgroundColor = '#4CAF50');
    } else {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#0f07e7';
        document.querySelectorAll('button').forEach(btn => btn.style.backgroundColor = '#333');
    }
    highContrast = !highContrast;
}

document.getElementById('quiz-form').addEventListener('submit', event => {
    event.preventDefault();
    checkAnswer();
});

retryQuizButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    feedbackContainer.classList.add('hidden');
    showQuestion();
    startTimer();
});

highContrastToggle.addEventListener('change', toggleHighContrast);

shareTwitter.addEventListener('click', () => {
    window.open(`https://www.instagram.com/`, '_blank');
});

shareFacebook.addEventListener('click', () => {
    window.open(`https://www.facebook.com/`, '_blank');
});

// Initialize quiz
showQuestion();
startTimer();
