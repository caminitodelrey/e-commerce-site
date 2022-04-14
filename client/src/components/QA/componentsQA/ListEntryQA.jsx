import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerListEntryQA from './AnswerListEntryQA.jsx';
import AddAnswerQA from './AddAnswerQA.jsx';

import {
  ButtonDefaultSM,
  ReportClicked,
  HelpfulClicked,
} from '../../../theme/buttonStyle.js';

export default function ListEntryQA({
  product,
  question,
  handleAddAnswerSubmit,
}) {
  const [answersDisplayed, setAnswersDisplayed] = useState(2);
  const [hiddenAnswers, setHiddenAnswers] = useState(true);
  const [addAnswerModal, setAddAnswerModal] = useState(false);
  const [addPhotosModal, setAddPhotosModal] = useState(false);
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

  const toggleAddPhotosModal = () => {
    setAddPhotosModal(!addPhotosModal);
  };

  const handleHelpfulnessClickQ = () => {
    if (!helpfulClickedQ) {
      axios({
        method: 'put',
        url: '/qa/q/helpful',
        data: {
          questionId: question.question_id,
        },
      })
        .then((response) => console.log(response))
        .catch((err) =>
          console.log(
            'ERROR in List Entry QA Axios request to server (PUT to qa/q/helpful)',
          ),
        );
      setHelpfulClickedQ(true);
    }
  };

  const handleReportClickQ = () => {
    if (!reportClickedQ) {
      axios({
        method: 'put',
        url: '/qa/q/report',
        data: {
          questionId: question.question_id,
        },
      })
        .then((response) => console.log(response))
        .catch((err) =>
          console.log(
            'ERROR in List Entry QA Axios request to server (PUT to qa/q/report)',
          ),
        );
      setReportClickedQ(true);
    }
  };

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(169, 169, 169, 0.5)',
        minHeight: '50px',
        paddingTop: '10px',
      }}
    >
      <div style={{ float: 'left', paddingBottom: '10px' }}>
        <strong>{`Q: ${question.question_body}`}</strong>
      </div>
      <div style={{ float: 'right', paddingBottom: '10px' }}>
        {helpfulClickedQ ? (
          <HelpfulClicked type="submit">
            {`Thank you for your feedback! (${
              question.question_helpfulness + 1
            })`}
          </HelpfulClicked>
        ) : (
          <ButtonDefaultSM type="submit" onClick={handleHelpfulnessClickQ}>
            {`Question Helpful (${question.question_helpfulness})`}
          </ButtonDefaultSM>
        )}
        {reportClickedQ ? (
          <ReportClicked>Question Reported</ReportClicked>
        ) : (
          <ButtonDefaultSM type="submit" onClick={handleReportClickQ}>
            Report
          </ButtonDefaultSM>
        )}
        <ButtonDefaultSM type="submit" onClick={toggleAddAnswerModal}>
          Add Answer
        </ButtonDefaultSM>
      </div>
      <AddAnswerQA
        product={product}
        question={question}
        addAnswerModal={addAnswerModal}
        toggleAddAnswerModal={toggleAddAnswerModal}
        handleAddAnswerSubmit={handleAddAnswerSubmit}
        addPhotosModal={addPhotosModal}
        toggleAddPhotosModal={toggleAddPhotosModal}
      />

      {Object.values(question.answers)
        .sort((a, b) => b.helpfulness - a.helpfulness)
        .slice(0, answersDisplayed)
        .map((a) => (
          <AnswerListEntryQA
            key={a.id}
            product={product}
            question={question}
            answer={a}
          />
        ))}

      {Object.values(question.answers).length > 2 ? (
        hiddenAnswers ? (
          <ButtonDefaultSM
            type="submit"
            onClick={handleMoreAnswers}
            style={{ margin: '10px 0' }}
          >
            {`See More Answers (${
              Object.values(question.answers).length - answersDisplayed
            })`}
          </ButtonDefaultSM>
        ) : (
          <ButtonDefaultSM
            type="submit"
            onClick={handleMoreAnswers}
            style={{ margin: '10px 0' }}
          >
            Collapse Answers
          </ButtonDefaultSM>
        )
      ) : null}
    </div>
  );
}
