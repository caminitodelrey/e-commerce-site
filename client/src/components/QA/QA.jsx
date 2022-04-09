import React, { useState, useEffect } from 'react';
import axios from 'axios'; // remove after moving axios functions to helper.js
// import TestRenderer from 'react-test-renderer';
// import moment from 'moment';

import getData from '../../../helper.js';
import SearchQA from './componentsQA/SearchQA.jsx';
import ListQA from './componentsQA/ListQA.jsx';
import AddQuestionQA from './componentsQA/AddQuestionQA.jsx';

// export default function QA() { // for testing only, comment out ~~~~~~~~~~~~~~~~~~~~~~
export default function QA({ product }) {
  const [questions, setQuestions] = useState([
    {
      question_id: 573538,
      question_body: 'demo',
      question_date: '2022-02-22T00:00:00.000Z',
      asker_name: 'demo',
      question_helpfulness: 4,
      reported: false,
      answers: {},
    },
  ]);
  const [filteredQuestions, setFilteredQuestions] = useState(questions);
  const [questionsDisplayed, setQuestionsDisplayed] = useState(2);
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const [filtered, setFiltered] = useState(false);

  // // for Testing only, put { product } back on line 11. ~~~~~~~~~~~~~~~~~~~~~~~~
  // const [product, setProduct] = useState({ id: 37484 }); // type product id here
  // useEffect(() => {
  //   getData(`/products/${product.id}`)
  //     .then((res) => setProduct(res.data))
  //     .catch((err) => { throw Error(err); });
  // }, [product.id]);

  useEffect(() => {
    getData(`qa/questions?product_id=${product.id}`)
      .then((res) => {
        setQuestions(
          res.data.results.sort(
            (a, b) => b.question_helpfulness - a.question_helpfulness,
          ),
        );
        setFilteredQuestions(
          res.data.results.sort(
            (a, b) => b.question_helpfulness - a.question_helpfulness,
          ),
        );
      }).catch((err) => { throw Error(err); });
  }, [product.id]);

  // GET /qa/questions/:question_id/answers
  // Answers List
  // Returns answers for a given question. This list does not include any reported answers.

  // ^^^^^DO I NEED THIS API CALL????????

  // PUT /qa/questions/:question_id/helpful
  // Mark Question as Helpful
  // Updates a question to show it was found helpful.
  const handleHelpfulQuestionSubmit = (questionId) => {
    axios({
      method: 'put',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
      url: `/qa/questions/${questionId}/helpful`,
      headers: {
        Authorization: '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',
      },
    }).then((res) => console.log(res)) // refactor???
      .catch((err) => { throw Error(err); });
  };

  // PUT /qa/answers/:answer_id/helpful
  // Mark Answer as Helpful
  // Updates an answer to show it was found helpful.
  const handleHelpfulAnswerSubmit = (answerId) => {
    axios({
      method: 'put',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
      url: `/qa/answers/${answerId}/helpful`,
      headers: {
        Authorization: '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',
      },
    }).then((res) => console.log(res)) // refactor???
      .catch((err) => { throw Error(err); });
  };

  // PUT /qa/questions/:question_id/report
  // Report Question
  // Updates a question to show it was reported.
  // Note, this action does not delete the question,
  // but the question will not be returned in the above GET request.
  const handleReportQuestionSubmit = (questionId) => {
    axios({
      method: 'put',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
      url: `/qa/answers/${questionId}/report`,
      headers: {
        Authorization: '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',
      },
    }).then((res) => console.log(res)) // refactor???
      .catch((err) => { throw Error(err); });
  };

  // PUT /qa/answers/:answer_id/report
  // Report Answer
  // Updates an answer to show it has been reported.
  // Note, this action does not delete the answer,
  // but the answer will not be returned in the above GET request.
  const handleReportAnswerSubmit = (answerId) => {
    axios({
      method: 'put',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
      url: `/qa/answers/${answerId}/report`,
      headers: {
        Authorization: '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',
      },
    }).then((res) => console.log(res)) // refactor???
      .catch((err) => { throw Error(err); });
  };

  // POST /qa/questions
  // Add a Question
  // Adds a question for the given product
  const handleAddQuestionSubmit = (data) => {
    axios({
      method: 'post',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
      url: '/qa/questions/',
      headers: {
        Authorization: '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',
      },
      data,
    }).then((res) => console.log(res)) // refactor???
      .catch((err) => { throw Error(err); });
  };

  // POST /qa/questions/:question_id/answers
  // Add an Answer
  // Adds an answer for the given question
  const handleAddAnswerSubmit = (data, qId) => {
    axios({
      method: 'post',
      baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
      url: `/qa/questions/${qId}/answers`,
      headers: {
        Authorization: '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',
      },
      data,
    }).then((res) => console.log(res)) // refactor???
      .catch((err) => { throw Error(err); });
  };

  const handleMoreQuestions = () => {
    setQuestionsDisplayed(questionsDisplayed + 2);
  };

  const toggleAddQuestionModal = () => {
    setAddQuestionModal(!addQuestionModal);
  };

  const handleSearchFilter = (text) => {
    const newFilteredQuestions = questions.filter((obj) =>
      obj.question_body.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredQuestions(newFilteredQuestions);
    if (text.length < 3) {
      setFiltered(false);
    } else if (text.length > 2) {
      setFiltered(true);
    }
  };

  const questionsList = filtered ? filteredQuestions : questions;

  // const { product, questions } = this.state;
  // console.log(questions);
  return (
    <div className="QA">
      <div>
        <h1>Questions & Answers</h1>
      </div>
      <SearchQA handleSearchFilter={handleSearchFilter} />
      <ListQA
        product={product}
        questions={questionsList}
        questionsDisplayed={questionsDisplayed}
        handleAddAnswerSubmit={handleAddAnswerSubmit}
        handleHelpfulQuestionSubmit={handleHelpfulQuestionSubmit}
        handleHelpfulAnswerSubmit={handleHelpfulAnswerSubmit}
        handleReportQuestionSubmit={handleReportQuestionSubmit}
        handleReportAnswerSubmit={handleReportAnswerSubmit}
      />
      <div className="BottomButtonsQA">
        <div>
          {questionsList.length - questionsDisplayed > 0 ? (
            <input
              type="submit"
              value={`More Answered Questions (${
                questionsList.length - questionsDisplayed
              })`}
              onClick={handleMoreQuestions}
            />
          ) : null}
        </div>
        <div>
          <input
            type="submit"
            value="Add a Question +"
            onClick={toggleAddQuestionModal}
          />
        </div>
        <AddQuestionQA
          product={product}
          addQuestionModal={addQuestionModal}
          toggleAddQuestionModal={toggleAddQuestionModal}
          handleAddQuestionSubmit={handleAddQuestionSubmit}
        />
      </div>
    </div>
  );
}
