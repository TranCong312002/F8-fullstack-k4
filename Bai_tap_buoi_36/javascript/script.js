import { client } from "./client.js";
const startTime = document.querySelector(".start-time");
const btnStart = document.querySelector(".btn-start");
const placeQuizStart = document.querySelector(".place-quiz-start");
const quizStart = document.querySelector(".quiz-start");
const quizQuestions = document.querySelector(".quiz-questions");
let index = 0;
let number = 5;
let startTime2 = 0;

const app = {
  timeLine: function (time) {
    if (time - startTime2 >= 1000) {
      console.log(time);
      number--;
      if (number === 0) {
        startTime.innerHTML = "GO !";

        setTimeout(() => {
          quizStart.classList.add("hidden");
          quizQuestions.classList.remove("hidden");
        }, 1000);
        return;
      } else {
        startTime.innerHTML = number;
      }

      startTime2 = time;
    }

    requestAnimationFrame(app.timeLine);
  },
  render: function (questions) {
    quizQuestions.innerHTML = `<div class="quiz-questions-time">
    <div class="time-move"></div>
  </div>
  <div class="place-quiz-questions">
    <div class="quiz-questions-top">
      <div class="info-number-questions">
        <div class="number-question">10</div>
        <div class="streak-question"></div>
      </div>
      <div class="score">Score: 0</div>
    </div>
    <div class="quiz-questions-content">
      <div class="question">${questions.question}</div>
      <div class="answer">
        <div class="answer-item">${questions.answer1}</div>
        <div class="answer-item">${questions.answer2}</div>
        <div class="answer-item">${questions.answer3}</div>
        <div class="answer-item">${questions.answer4}</div>
      </div>
    </div>
    <div class="quiz-questions-bottom">Correct</div>
  </div>`;
    const answer = document.querySelectorAll(".quiz-questions-content .answer");
    console.log(answer);
    answer.forEach((value) => {
      console.log(value);
      {
        value.addEventListener("click", () => {
          console.log(value.innerHTML);
        });
      }
    });
  },
  getQuestion: async function (url) {
    const { data: Ques } = await client.getQuestions(url);
    console.log(Ques.length);
    this.render(Ques[1]);
  },
  start: function (url) {
    this.getQuestion(url);
  },
};
btnStart.addEventListener("click", (e) => {
  placeQuizStart.removeChild(btnStart);
  if (startTime.classList.contains("hidden")) {
    startTime.classList.remove("hidden");
  }
  requestAnimationFrame(app.timeLine);
});
// console.log(number);
app.start("questions");
