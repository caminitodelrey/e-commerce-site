import React, { useState, useEffect } from 'react';
import AnswerListEntryQA from './AnswerListEntryQA.jsx';

export default function ListEntryQA({ product, filteredQuestion }) {
  const [answersDisplayed, setAnswersDisplayed] = useState(2);
  const [hiddenAnswers, setHiddenAnswers] = useState(true);
  const handleMoreAnswers = () => {
    answersDisplayed === 2
      ? setAnswersDisplayed(filteredQuestion.answers.length)
      : setAnswersDisplayed(2);
    setHiddenAnswers(!hiddenAnswers);
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
            />
          </div>
        </div>
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
