import React, { useState } from 'react';
import moment from 'moment';

import {
  WriteReviewButtons
} from '../../../theme/buttonStyle.js';

export default function AnswerListEntryQA({
  answer,
  handleHelpfulAnswerSubmit,
  handleReportAnswerSubmit,
}) {
  const [helpfulClickedA, setHelpfulClickedA] = useState(false);
  const [reportClickedA, setReportClickedA] = useState(false);

  const handleHelpfulnessClickA = () => {
    if (!helpfulClickedA) {
      handleHelpfulAnswerSubmit(answer.id);
      setHelpfulClickedA(true);
    }
  };

  const handleReportClickA = () => {
    if (!reportClickedA) {
      handleReportAnswerSubmit(answer.id);
      setReportClickedA(true);
    }
  };

  return (
    <>
      <br/>
      <div className="answer-body">
        <div style={{ "dispay": "flex" }}>
          <strong>A:</strong>
          {` ${answer.body}`}
        </div>
      </div>
      {answer.photos.length ? (
        <div className="pictures">
          {answer.photos.map((pic) => (
            <img
              key={pic}
              src={pic}
              style={{
                height: '100px',
                'border-radius': '5px',
                paddingRight: '10px',
              }}
              alt={`${answer.answerer_name}'s data failed to load`}
              className="answer-pic"
            />
          ))}
        </div>
      ) : null}
      <div className="bottom of answer"
      >
        <span>{`by: ${answer.answerer_name}, `}</span>
        <span>{moment(answer.date).format('MMMM D, YYYY')}</span>
        <span>{' | '}</span>
        <span>Helpful? </span>
        {helpfulClickedA
          ? (
            <>
              <WriteReviewButtons type="submit">Answer Helpful!</WriteReviewButtons>
              <span>{` (${answer.helpfulness + 1})`}</span>
            </>
          )
          : (
            <>
              <WriteReviewButtons
                type="submit"
                onClick={handleHelpfulnessClickA}
              >
                Yes
              </WriteReviewButtons>
              <span>{` (${answer.helpfulness})`}</span>
            </>
          )}
        <span>{' | '}</span>
        {reportClickedA
          ? <WriteReviewButtons type="submit">Reported</WriteReviewButtons>
          : (
            <WriteReviewButtons
              type="submit"
              onClick={handleReportClickA}
            >
              Report
            </WriteReviewButtons>
          )}
      </div>
    </>
  );
}
