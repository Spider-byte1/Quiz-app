const questions = [
    {
      question: "What is the correct syntax for referring to an external script called 'app.js'?",
      answers: [
        { text: "<script href='app.js'>", correct: false },
        { text: "<script name='app.js'>", correct: false },
        { text: "<script src='app.js'>", correct: true },
        { text: "<script file='app.js'>", correct: false },
      ],
    },
    {
      question: "Which company developed JavaScript?",
      answers: [
        { text: "Mozilla", correct: false },
        { text: "Netscape", correct: true },
        { text: "Microsoft", correct: false },
        { text: "Google", correct: false },
      ],
    },
    {
      question: "Inside which HTML element do we put JavaScript?",
      answers: [
        { text: "<js>", correct: false },
        { text: "<scripting>", correct: false },
        { text: "<script>", correct: true },
        { text: "<javascript>", correct: false },
      ],
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      answers: [
        { text: "String", correct: false },
        { text: "Number", correct: false },
        { text: "Boolean", correct: false },
        { text: "Float", correct: true },
      ],
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      answers: [
        { text: "msgBox('Hello World');", correct: false },
        { text: "alertBox('Hello World');", correct: false },
        { text: "alert('Hello World');", correct: true },
        { text: "msg('Hello World');", correct: false },
      ],
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      answers: [
        { text: "var colors = 'red', 'green', 'blue'", correct: false },
        { text: "var colors = ['red', 'green', 'blue']", correct: true },
        { text: "var colors = (1:'red', 2:'green')", correct: false },
        { text: "var colors = 1 = ('red'), 2 = ('green')", correct: false },
      ],
    },
    {
      question: "How does a WHILE loop start?",
      answers: [
        { text: "while (i <= 10)", correct: true },
        { text: "while i = 1 to 10", correct: false },
        { text: "while (i <= 10; i++)", correct: false },
        { text: "while i <= 10 then", correct: false },
      ],
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      answers: [
        { text: "*", correct: false },
        { text: "-", correct: false },
        { text: "=", correct: true },
        { text: "+", correct: false },
      ],
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      answers: [
        { text: "onmouseover", correct: false },
        { text: "onchange", correct: false },
        { text: "onmouseclick", correct: false },
        { text: "onclick", correct: true },
      ],
    },
    {
      question: "How do you declare a JavaScript variable?",
      answers: [
        { text: "v carName;", correct: false },
        { text: "variable carName;", correct: false },
        { text: "var carName;", correct: true },
        { text: "let carName;", correct: true },
      ],
    },
    {
      question: "What will `typeof null` return?",
      answers: [
        { text: "'object'", correct: true },
        { text: "'null'", correct: false },
        { text: "'undefined'", correct: false },
        { text: "'boolean'", correct: false },
      ],
    },
    {
      question: "What is the output of `NaN === NaN`?",
      answers: [
        { text: "true", correct: false },
        { text: "false", correct: true },
        { text: "NaN", correct: false },
        { text: "undefined", correct: false },
      ],
    },
    {
      question: "Which method converts a JSON string into a JavaScript object?",
      answers: [
        { text: "JSON.stringify()", correct: false },
        { text: "JSON.parse()", correct: true },
        { text: "JSON.convert()", correct: false },
        { text: "JSON.toObject()", correct: false },
      ],
    },
    {
      question: "How do you write a comment in JavaScript?",
      answers: [
        { text: "<!-- Comment -->", correct: false },
        { text: "// Comment", correct: true },
        { text: "** Comment **", correct: false },
        { text: "# Comment", correct: false },
      ],
    },
    {
      question: "Which of these is not a JavaScript framework?",
      answers: [
        { text: "React", correct: false },
        { text: "Vue", correct: false },
        { text: "Angular", correct: false },
        { text: "Django", correct: true },
      ],
    },
    {
      question: "Which method adds a new element to the end of an array?",
      answers: [
        { text: "pop()", correct: false },
        { text: "shift()", correct: false },
        { text: "push()", correct: true },
        { text: "unshift()", correct: false },
      ],
    },
    {
      question: "How do you check if two variables are equal in both value and type?",
      answers: [
        { text: "==", correct: false },
        { text: "!=", correct: false },
        { text: "===", correct: true },
        { text: "equals", correct: false },
      ],
    },
    {
      question: "What is the correct syntax for an arrow function?",
      answers: [
        { text: "function => () {}", correct: false },
        { text: "() => {}", correct: true },
        { text: "() => []", correct: false },
        { text: "=> {}", correct: false },
      ],
    },
    {
      question: "What does the `map()` function do?",
      answers: [
        { text: "Creates a new array with results of calling a function on every element", correct: true },
        { text: "Filters out elements", correct: false },
        { text: "Sorts the array", correct: false },
        { text: "Mutates the original array", correct: false },
      ],
    },
    {
      question: "What is a closure in JavaScript?",
      answers: [
        { text: "A function inside an array", correct: false },
        { text: "A function with no parameters", correct: false },
        { text: "A function having access to its outer scope", correct: true },
        { text: "An error handling mechanism", correct: false },
      ],
    },
    // Add 10 more here if you'd like even more coverage
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  const questionEl = document.getElementById("question");
  const answerBtns = document.getElementById("answer-buttons");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreEl = document.getElementById("score");
  const timerEl = document.getElementById("timer");
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
  }
  
  function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    timerEl.textContent = `Time: ${timeLeft}`;
    timerInterval = setInterval(() => {
      timeLeft--;
      timerEl.textContent = `Time: ${timeLeft}`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        nextBtn.click();
      }
    }, 1000);
  }
  
  function showQuestion() {
    resetState();
    startTimer();
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
      answerBtns.appendChild(button);
    });
  }
  
  function resetState() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
      answerBtns.removeChild(answerBtns.firstChild);
    }
  }
  
  function selectAnswer(e) {
    clearInterval(timerInterval);
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) score++;
  
    Array.from(answerBtns.children).forEach(button => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.style.backgroundColor = "green";
      } else {
        button.style.backgroundColor = "red";
      }
    });
  
    nextBtn.style.display = "inline-block";
  }
  
  function showScore() {
    clearInterval(timerInterval);
    document.getElementById("question-container").style.display = "none";
    nextBtn.style.display = "none";
    resultContainer.classList.remove("hide");
    scoreEl.innerText = score;
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  startQuiz();
  