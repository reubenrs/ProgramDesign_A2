//Variable stores answer for current question
var currentquestion = 0

console.log(currentquestion)
//Array to store questions, responses to the questions and correct answer for the question (true/false)
var questions = [{
    "question": "Do people who have had COVID-19 and recovered need to get vaccinated?",
    "response": "People who have had COVID-19 and recovered should still be vaccinated. The protection someone gains from having COVID-19 varies from person to person.",
    "answer": true
}, {
    "question": "Do COVID-19 vaccines cause autoimmune diseases?",
    "response": "Autoimmune diseases, such as arthritis and multiple sclerosis, are chronic (long-term) illnesses and there is no evidence to suggest that COVID-19 vaccines can cause autoimmune diseases.",
    "answer": false
}, {
    "question": "Can COVID-19 vaccines connect me to the internet?",
    "response": "COVID-19 vaccines do not, and cannot, connect you to the internet.",
    "answer": false
}, {
    "question": "Are COVID-19 vaccines mandatory in Australia?",
    "response": "Vaccination for COVID-19 is voluntary, as are all vaccinations in Australia, and people maintain the option to choose.",
    "answer": false
}, {
    "question": "Do I have to wait between getting the Influenza (flu) and COVID-19 vaccine?",
    "response": "COVID-19 vaccines can be co-administered (that is, given on the same day) with an influenza vaccine. Find out more below.",
    "answer": true
}, {
    "question": "Can COVID-19 vaccines alter my DNA?",
    "response": "No, COVID-19 vaccines do not alter your DNA. Find out more below.",
    "answer": false
}];

//Main initialising function that resets quiz and sets it up
(function () {
    quizReset()

    document.getElementById("checkfalse").addEventListener("click", function(event) {
        check(false);
    })
    document.getElementById("checktrue").addEventListener("click", function(event) {
        check(true);
    })
    document.getElementById("quizreset").addEventListener("click", function(event) {
        quizReset();
    })
    document.getElementById("nextquestion").addEventListener("click", function(event) {
        nextQuestion();
    });

})();

//Checks whether or not the chosen answer is correct for the current question
function check(answer) {
    document.getElementById('questionresponse').classList.remove('correct','incorrect');
    var questionanswer = questions[currentquestion].answer;
    if (questionanswer === answer) {
        document.getElementById('questionresponse').classList.add('correct');
        document.getElementById('questionresponse').innerHTML = "Correct! " + questions[currentquestion].response;
    } else {
        document.getElementById("questionresponse").classList.add('incorrect');
        document.getElementById('questionresponse').innerHTML = "Incorrect! " + questions[currentquestion].response;
    }
    document.getElementById('questionresponse').classList.remove('hidden');
    document.getElementById('nextquestion').classList.remove('hidden');
    document.getElementById('checktrue').classList.add('hidden');
    document.getElementById('checkfalse').classList.add('hidden');
}

function nextQuestion() {
    document.getElementById('questionresponse').classList.add('hidden');
    if (currentquestion < questions.length - 1) {
        currentquestion += 1;
        document.getElementById('nextquestion').classList.add('hidden');
        document.getElementById('quizreset').classList.add('hidden');
        document.getElementById('checktrue').classList.remove('hidden');
        document.getElementById('checkfalse').classList.remove('hidden');
    } else {
        document.getElementById('nextquestion').classList.add('hidden');
        document.getElementById('questioncontainer').classList.add('hidden');
        document.getElementById('quizreset').classList.remove('hidden');
        document.getElementById('checktrue').classList.add('hidden');
        document.getElementById('checkfalse').classList.add('hidden');
    }
    document.getElementById('questionresponse').classList.add('hidden');
    document.getElementById('questiontext').innerHTML = questions[currentquestion].question;
}

//Main reseting function. Hides or shows elements and sets up question.
function quizReset() {
    currentquestion = 0;
    document.getElementById('questionresponse').classList.add('hidden');
    document.getElementById('nextquestion').classList.add('hidden');
    document.getElementById('quizreset').classList.add('hidden');
    document.getElementById('questioncontainer').classList.remove('hidden');
    document.getElementById('checktrue').classList.remove('hidden');
    document.getElementById('checkfalse').classList.remove('hidden');
    document.getElementById('questiontext').innerHTML = questions[currentquestion].question;
}