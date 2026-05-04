const express = require('express');
const router = express.Router();

// 1. Hard-coded questions
const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

// 2. Game State (tracking score and progress)
let userScore = 0;
let currentQuestionIndex = 0;

// GET /quiz - Display the current question
router.get('/', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    const currentQuestion = triviaQuestions[currentQuestionIndex].question;
    res.send({
      message: "Trivia Question",
      question: currentQuestion,
      instructions: "Submit your answer via a POST request to /quiz with the key 'answer'"
    });
  } else {
    res.redirect('/quiz/score');
  }
});

// POST /quiz - Submit answer and move forward
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;

  if (currentQuestionIndex < triviaQuestions.length) {
    const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

    let feedback = "";
    // Check answer (case-insensitive)
    if (userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      userScore++;
      feedback = "Correct!";
    } else {
      feedback = `Incorrect! The correct answer was ${correctAnswer}.`;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < triviaQuestions.length) {
      res.send({
        feedback: feedback,
        nextStep: "Perform a GET request to /quiz for the next question."
      });
    } else {
      res.send({
        feedback: feedback,
        nextStep: "Quiz finished! Perform a GET request to /quiz/score to see your total."
      });
    }
  } else {
    res.status(400).send({ error: "Quiz already finished. See /quiz/score" });
  }
});

// GET /quiz/score - Display final score
router.get('/score', (req, res) => {
  const finalScore = userScore;
  const totalQuestions = triviaQuestions.length;

  // Reset the game for next time
  userScore = 0;
  currentQuestionIndex = 0;

  res.send({
    message: "Quiz Complete!",
    finalScore: `${finalScore} out of ${totalQuestions}`,
    playAgain: "Go back to GET /quiz to start over."
  });
});

module.exports = router;

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and mount the router
const quizRouter = require('./routes/quiz');
app.use('/quiz', quizRouter);

app.listen(port, () => {
  console.log(`Trivia Game running at`);
});

