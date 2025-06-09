//
const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
  } = require('./p4-module');
  
const express = require('express');
const app = express();

const HOST = 'localhost';
const PORT = 3000;

//questions
app.get('/cit/question', (req, res) => {
    res.status(200).type('application/json; charset=utf-8');
    res.send(getQuestions());
});

//answers
app.get('/cit/answer', (req, res) => {
    res.status(200).type('application/json; charset=utf-8');
    res.send(getAnswers());
});

//questions and answers
app.get('/cit/questionanswer', (req, res) => {
    res.status(200).type('application/json; charset=utf-8');
    res.send(getQuestionsAnswers());
});

//question by number
app.get('/cit/question/:number', (req, res) => {
    res.status(200).type('application/json; charset=utf-8');
    res.send(getQuestion(req.params.number));
});

//answer by number
app.get('/cit/answer/:number', (req, res) => {
    res.status(200).type('application/json; charset=utf-8');
    res.send(getAnswer(req.params.number));
});

// questions and answers by numbers
app.get('/cit/questionanswer/:number', (req, res) => {
    res.status(200).type('application/json; charset=utf-8');
    res.send(getQuestionAnswer(req.params.number));
});


//Handle 404 for all other routes

app.use((req, res) => {
res.status(404).send('404 Not Found');
});

//start server
app.listen(PORT, HOST, () => {
console.log(`Server running at http://${HOST}:${PORT}`);
});