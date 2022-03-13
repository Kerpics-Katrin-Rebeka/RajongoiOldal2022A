function buildQuiz(){
    const output = [];
  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
  
        for(letter in currentQuestion.answers){
  
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    quizContainer.innerHTML = output.join('');
}

(function(){
    function buildQuiz(){
        const output = [];
  
        myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
            const answers = [];
  
            for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
            }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
            );
        }
        );

        quizContainer.innerHTML = output.join('');
}
  
function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
  
function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
          question: "1. Kinek a rajtszáma a 16-os szám?",
          answers: {
            a: "Yuki Tsunoda",
            b: "Lance Stroll",
            c: "Charles Leclerc"
          },
          correctAnswer: "c"
        },
        {
          question: "2. Ki nem britt az alábbi versenyzők közül?",
          answers: {
            a: "Lando Norris",
            b: "Daniel Ricciardo",
            c: "George Russell",
            d: "Lewis Hamilton"
          },
          correctAnswer: "b"
        },
        {
          question: "3. Ki a Williams versenyzője az alábbiak közül?",
          answers: {
            a: "Valtteri Bottas",
            b: "Pierre Gasly",
            c: "Guanyu Zhou",
            d: "Alexander Albon"
          },
          correctAnswer: "d"
        },
        {
            question: "4. Ki a legalacsonyabb pilóta az alábbiak közül?",
            answers: {
              a: "Yuki Tsunoda",
              b: "Lando Norris",
              c: "Fernando Alonso"
            },
            correctAnswer: "a"
        },
        {
            question: "5. Melyik versenyző született 1999-ben az alábbi versenyzők közül?",
            answers: {
              a: "Nicholas Latifi",
              b: "Guanyu Zhou",
              c: "Max Verstappen"
            },
            correctAnswer: "b"
        },
        {
            question: "6. Melyik versenyző francia származású az alábbiak közül?",
            answers: {
              a: "Esteban Ocon",
              b: "Sebastian Vettel",
              c: "Charles Leclerc",
              d: "Carlos Sainz Jr."
            },
            correctAnswer: "a"
        },
        {
            question: "7. Ki a legidősebb az alábbiak közül?",
            answers: {
              a: "Sergio Perez",
              b: "Kevin Magnussen",
              c: "Sebastian Vettel",
              d: "Fernando Alonso"
            },
            correctAnswer: "d"
        },
        {
          question: "8. Melyik versenyző nem egy korábbi F1-es versenyző fia?",
          answers: {
            a: "Mick Schumacher",
            b: "Max Verstappen",
            c: "Carlos Sainz Jr."
          },
          correctAnswer: "c"
        },
        {
          question: "9. Melyik pilóta európai származású az alábbiak közül?",
          answers: {
            a: "Lance Stroll",
            b: "Kevin Magnussen",
            c: "Sergio Perez",
            d: "Alexander Albon"
          },
          correctAnswer: "b"
        },
        {
          question: "10. Melyik pilóta nem az Alpha Tauri versenyzője az alábbiak közül?",
          answers: {
            a: "Yuki Tsunoda",
            b: "Pierre Gasly",
            c: "Mick Schumacher"
          },
          correctAnswer: "c"
        },
    ];
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
  