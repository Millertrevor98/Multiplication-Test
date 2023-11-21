const questionsCount = 10; // Number of multiplication questions
const minNumber = 1;
const maxNumber = 12; // Maximum multiplication table range

const multiplicationTestForm = document.getElementById('multiplicationTestForm');
const questionsList = document.getElementById('questionsList');
const result = document.getElementById('result');

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestions() {
  for (let i = 0; i < questionsCount; i++) {
    const num1 = generateRandomNumber(minNumber, maxNumber);
    const num2 = generateRandomNumber(minNumber, maxNumber);

    const question = `${i + 1}. ${num1} x ${num2} =`;
    const li = document.createElement('li');
    const label = document.createElement('label');
    label.textContent = question;
    const input = document.createElement('input');
    input.type = 'text';
    input.name = `answer${i + 1}`;
    li.appendChild(label);
    li.appendChild(input);
    questionsList.appendChild(li);
  }
}

function validateTest(event) {
  event.preventDefault();
  let score = 0;
  for (let i = 0; i < questionsCount; i++) {
    const userAnswer = parseInt(document.querySelector(`input[name="answer${i + 1}"]`).value, 10);
    const num1 = parseInt(questionsList.children[i].querySelector('label').textContent.split(' ')[1], 10);
    const num2 = parseInt(questionsList.children[i].querySelector('label').textContent.split(' ')[3], 10);
    const correctAnswer = num1 * num2;
    if (userAnswer === correctAnswer) {
      score++;
    }
  }

  const percentage = (score / questionsCount) * 100;
  const message = `You scored ${score} out of ${questionsCount}. (${percentage.toFixed(2)}%)`;
  result.textContent = message;
}

multiplicationTestForm.addEventListener('submit', validateTest);
generateQuestions();
