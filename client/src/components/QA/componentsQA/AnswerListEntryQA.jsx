import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function AnswerListEntryQA({
  answer,
  handleHelpfulAnswerSubmit,
}) {
  const [helpfulClickedA, setHelpfulClickedA] = useState(false);
  const handleHelpfulnessClickA = () => {
    if (!helpfulClickedA) {
      handleHelpfulAnswerSubmit(answer.id);
      setHelpfulClickedA(true);
    }
  };
  return (
    <>
      <div className="answer-body">
        <span>
          <strong>A:</strong>
          {` ${answer.body}`}
        </span>
      </div>
      {answer.photos.length ? (
        <div className="pictures">
          {answer.photos.map((pic) => (
            <img
              key={pic}
              src={pic}
              style={{ height: '100px' }}
              alt={`${answer.answerer_name}'s data failed to load`}
              className="answer-pic"
            />
          ))}
        </div>
      ) : null}
      <div className="">
        <span>{`by: ${answer.answerer_name}, `}</span>
        <span>{moment(answer.date).format('MMMM D, YYYY')}</span>
        <span>{' | '}</span>
        <span>Helpful? </span>
        {helpfulClickedA
          ? (
            <>
              <button type="submit">Answer Helpful!</button>
              <span>{` (${answer.helpfulness + 1})`}</span>
            </>
          )
          : (
            <>
              <button
                type="submit"
                onClick={handleHelpfulnessClickA}
              >
                Yes
              </button>
              <span>{` (${answer.helpfulness})`}</span>
            </>
          )}
        <span>{' | '}</span>
        <input
          type="submit"
          value="Report"
          onKeyPress={null}
          tabIndex={0}
          // onClick={handleReport}
        />
      </div>
    </>
  );
}
