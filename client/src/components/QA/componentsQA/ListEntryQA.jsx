import React, { useState, useEffect } from 'react';
import AnswerListEntryQA from './AnswerListEntryQA.jsx';
import AddAnswerQA from './AddAnswerQA.jsx';

export default function ListEntryQA({
  product,
  question,
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
          <span>
            <strong>{`Q: ${question.question_body}`}</strong>
          </span>
          <div>
            <span>Helpful? </span>
            {helpfulClickedQ
              ? (
                <>
                  <button type="submit">Question Helpful!</button>
                  <span>
                    {` (${question.question_helpfulness + 1})`}
                  </span>
                </>
              )
              : (
                <>
                  <button
                    type="submit"
                    onClick={handleHelpfulnessClickQ}
                  >
                    Yes
                  </button>
                  <span>{` (${question.question_helpfulness})`}</span>
                </>
              )}
            <span>{' | '}</span>
            {reportClickedQ
              ? <button type="submit">Reported</button>
              : (
                <button
                  type="submit"
                  onClick={handleReportClickQ}
                >
                  Report
                </button>
              )}
            <span>{' | '}</span>
            <input
              type="submit"
              value="Add Answer"
              onClick={toggleAddAnswerModal}
            />
          </div>
        </div>
        <AddAnswerQA
          product={product}
          question={question}
          addAnswerModal={addAnswerModal}
          toggleAddAnswerModal={toggleAddAnswerModal}
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
            <input
              type="submit"
              value={`\\/ See More Answers (${
                Object.values(question.answers).length - answersDisplayed
              })`}
              onClick={handleMoreAnswers}
            />
          ) : (
            <input
              type="submit"
              value="Collapse Answers"
              onClick={handleMoreAnswers}
            />
          )
        ) : null}
      </div>
    </div>
  );
}
