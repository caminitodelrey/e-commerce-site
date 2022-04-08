import React, { useState, useEffect } from 'react';
import AnswerListEntryQA from './AnswerListEntryQA.jsx';
import AddAnswerQA from './AddAnswerQA.jsx';

export default function ListEntryQA({
  product,
  question,
  handleHelpfulQuestionSubmit,
  handleHelpfulAnswerSubmit,
}) {
  const [answersDisplayed, setAnswersDisplayed] = useState(2);
  const [hiddenAnswers, setHiddenAnswers] = useState(true);
  const [addAnswerModal, setAddAnswerModal] = useState(false);
  const [helpfulClickedQ, setHelpfulClickedQ] = useState(false);

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

  const x = question.question_body;
  return (
    <div>
      <div>
        <div>
          <span>
            <strong>{`Q: ${x}`}</strong>
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
