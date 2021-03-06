import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchQA from './componentsQA/SearchQA.jsx';
import ListQA from './componentsQA/ListQA.jsx';
import AddQuestionQA from './componentsQA/AddQuestionQA.jsx';
import { ButtonDefaultLG } from '../../theme/buttonStyle.js';

// export default function QA({ onClick }) { // for testing only, comment out ~~~~~~~~~~~~~~~~~~~~~~
export default function QA({ product, onClick }) {
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

  // // for Testing only, also go to line 11. ~~~~~~~~~~~~~~~~~~~~~~~~
  // const [product, setProduct] = useState({ id: 38322 }); // TESTING type product id here
  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: '/qa',
  //     params: {
  //       productId: product.id,
  //     },
  //   })
  //     .then((res) => setProduct(res.data))
  //     .catch((err) => { throw Error(err); });
  // }, [product.id]);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/qa',
      params: {
        productId: product.id,
      },
    })
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
      })
      .catch((err) => {
        throw Error(err);
      });
  }, [product.id]);

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

  return (
    <div className="QA" onClick={onClick} style={{ margin: '100px 0' }}>
      <h1
        style={{
          marginBottom: '10px',
        }}
      >
        Questions & Answers
      </h1>
      <SearchQA product={product} handleSearchFilter={handleSearchFilter} />
      <ListQA
        product={product}
        questions={questionsList}
        questionsDisplayed={questionsDisplayed}
      />
      <div className="BottomButtonsQA">
        {questionsList.length - questionsDisplayed > 0 ? (
          <ButtonDefaultLG
            style={{ width: 'auto', display: 'inline-block' }}
            type="submit"
            onClick={handleMoreQuestions}
          >
            {`More Answered Questions (${
              questionsList.length - questionsDisplayed
            })`}
          </ButtonDefaultLG>
        ) : null}
        <ButtonDefaultLG
          type="submit"
          onClick={toggleAddQuestionModal}
          style={{ width: 'auto', display: 'inline-block' }}
        >
          Add a Question +
        </ButtonDefaultLG>
        <AddQuestionQA
          product={product}
          addQuestionModal={addQuestionModal}
          toggleAddQuestionModal={toggleAddQuestionModal}
        />
      </div>
    </div>
  );
}
