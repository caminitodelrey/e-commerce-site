import React, { useState, useEffect } from 'react';
import AnswerListEntryQA from './AnswerListEntryQA.jsx';
import AddAnswerQA from './AddAnswerQA.jsx';

export default function ListEntryQA({
  product,
  filteredQuestion,
}) {
  const [answersDisplayed, setAnswersDisplayed] = useState(2);
  const [hiddenAnswers, setHiddenAnswers] = useState(true);
  const [addAnswerModal, setAddAnswerModal] = useState(false);

  const handleMoreAnswers = () => {
    answersDisplayed === 2
      ? setAnswersDisplayed(filteredQuestion.answers.length)
      : setAnswersDisplayed(2);
    setHiddenAnswers(!hiddenAnswers);
  };

  const toggleAddAnswerModal = () => {
    setAddAnswerModal(!addAnswerModal);
  };

  const x = filteredQuestion.question_body;
  return (
    <div>
      <div>
        <div>
          <span>
            <strong>{`Q: ${x}`}</strong>
          </span>
          <div>
            <span>
              Helpful?
              {' '}
            </span>
            <input type="submit" value="Yes" />
            <span>
              {' '}
              {`(${filteredQuestion.question_helpfulness})`}
            </span>
            <span>
              {' | '}
            </span>
            <input
              type="submit"
              value="Add Answer"
              onClick={toggleAddAnswerModal}
            />
          </div>
        </div>
        <AddAnswerQA
          product={product}
          filteredQuestion={filteredQuestion}
          addAnswerModal={addAnswerModal}
          toggleAddAnswerModal={toggleAddAnswerModal}
        />
        <div>
          {Object.values(filteredQuestion.answers).slice(0, answersDisplayed).map((a) => (
            <AnswerListEntryQA
              key={a.id}
              product={product}
              filteredQuestion={filteredQuestion}
              answer={a}
            />
          ))}
        </div>
      </div>
      <div>
        {Object.values(filteredQuestion.answers).length > 2
          ? (hiddenAnswers ? (
            <input
              type="submit"
              value={`\\/ See More Answers (${Object.values(filteredQuestion.answers).length - answersDisplayed})`}
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
