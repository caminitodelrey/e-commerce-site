import React, { useState, useEffect } from 'react';
import AnswerListEntryQA from './AnswerListEntryQA.jsx';
import AddAnswerQA from './AddAnswerQA.jsx';

import {
  ButtonDefaultSM
} from '../../../theme/buttonStyle.js';

export default function ListEntryQA({
  product,
  question,
  handleAddAnswerSubmit,
  handleHelpfulQuestionSubmit,
  handleHelpfulAnswerSubmit,
  handleReportQuestionSubmit,
  handleReportAnswerSubmit,
}) {
  const [answersDisplayed, setAnswersDisplayed] = useState(2);
  const [hiddenAnswers, setHiddenAnswers] = useState(true);
  const [addAnswerModal, setAddAnswerModal] = useState(false);
  const [helpfulClickedQ, setHelpfulClickedQ] = useState(false);
  const [reportClickedQ, setReportClickedQ] = useState(false);

  const handleMoreAnswers = () => {
    answersDisplayed === 2
      ? setAnswersDisplayed(question.answers.length)
      : setAnswersDisplayed(2);
    setHiddenAnswers(!hiddenAnswers);
  };

  const toggleAddAnswerModal = () => {
    setAddAnswerModal(!addAnswerModal);
  };

  const handleHelpfulnessClickQ = () => {
    if (!helpfulClickedQ) {
      handleHelpfulQuestionSubmit(question.question_id);
      setHelpfulClickedQ(true);
    }
  };

  const handleReportClickQ = () => {
    if (!reportClickedQ) {
      handleReportQuestionSubmit(question.question_id);
      setReportClickedQ(true);
    }
  };

  // const { question_body, question_helpfulness, answers } = question;
  // const x = question.question_body;
  return (
    <div>
      <div>
        <div>
          <br/>
          <div
            style={{ "float": "left", "paddingBottom": '10px' }}
          >
            <strong>{`Q: ${question.question_body}`}</strong>
          </div>
          <div
            style={{ "float": "right" , "paddingBottom": '10px'}}
          >
            {helpfulClickedQ
              ? (
                <ButtonDefaultSM type="submit">
                  {`Question Helpful! (${question.question_helpfulness + 1})`}
                </ButtonDefaultSM>
              )
              : (
                <ButtonDefaultSM
                  type="submit"
                  onClick={handleHelpfulnessClickQ}
                >
                  {`Yes (${question.question_helpfulness})`}
                </ButtonDefaultSM>
              )}
            {reportClickedQ
              ? <ButtonDefaultSM
                  type="submit"
                  style={{
                    color: 'red',
                  }}
                >
                    Reported
                </ButtonDefaultSM>
              : (
                <ButtonDefaultSM
                  type="submit"
                  onClick={handleReportClickQ}
                >
                  Report
                </ButtonDefaultSM>
              )}
            <ButtonDefaultSM
              type="submit"
              onClick={toggleAddAnswerModal}
            >
              Add Answer
            </ButtonDefaultSM>
          </div>
        </div>
        <AddAnswerQA
          product={product}
          question={question}
          addAnswerModal={addAnswerModal}
          toggleAddAnswerModal={toggleAddAnswerModal}
          handleAddAnswerSubmit={handleAddAnswerSubmit}
        />
        <div>
          {Object.values(question.answers)
            .sort((a, b) => b.helpfulness - a.helpfulness)
            .slice(0, answersDisplayed)
            .map((a) => (
              <AnswerListEntryQA
                key={a.id}
                product={product}
                question={question}
                answer={a}
                handleHelpfulAnswerSubmit={handleHelpfulAnswerSubmit}
                handleReportAnswerSubmit={handleReportAnswerSubmit}
              />
            ))}
        </div>
      </div>
      <div>
        {Object.values(question.answers).length > 2 ? (
          hiddenAnswers ? (
            <ButtonDefaultSM
              type="submit"
              onClick={handleMoreAnswers}
            >
              {`See More Answers (${
                Object.values(question.answers).length - answersDisplayed
              })`}
            </ButtonDefaultSM>
          ) : (
            <ButtonDefaultSM
              type="submit"
              onClick={handleMoreAnswers}
            >
              Collapse Answers
            </ButtonDefaultSM>
          )
        ) : null}
      </div>
    </div>
  );
}
