const { data } = require('./p4-data');

function getQuestions(){
    return data.map(item => item.question);
}
function getAnswers(){
    return data.map(item => item.answer);
}

function getQuestionsAnswers(){
    return data.map(item => ({question: item.question, answer: item.answer}));
}

function getQuestion(number = ""){
    const result = {
        question: '',
        number: Number(number),
        error: '',
      };

    
      if (number === '' || isNaN(result.number) || !Number.isInteger(result.number) || result.number < 1 || result.number > data.length) {
        result.error = 'Error';
        return result;
      }

    result.question = data[number - 1].question;
      return result;
}

function getAnswer(number = ""){
    const result = {
        answer: '',
        number: Number(number),
        error: '',
      };

    
      if (number === '' || isNaN(result.number) || !Number.isInteger(result.number) || result.number < 1 || result.number > data.length) {
        result.error = 'Error';
        return result;
      }

    const item = data[number - 1];
    result.answer = item.answer;
      return result;
}

function getQuestionAnswer(number = ""){
    const result = {
        question: '',
        answer: '',
        number: Number(number),
        error: '',
      };

      if (number === '' || isNaN(result.number) || !Number.isInteger(result.number) || result.number < 1 || result.number > data.length) {
        result.error = 'Error';
        return result;
      }
        const item = data[number - 1];
        result.question = item.question;
        result.answer = item.answer;
      
    
      return result;
}

// let a = getQuestion();
// let b = getAnswer();
// let c = getQuestionAnswer();
// //console.log(a);
// //console.log(b);
// console.log(c);

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false; //check
  const testGetAs = false; //check
  const testGetQsAs = false; //check
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }

  module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
  };