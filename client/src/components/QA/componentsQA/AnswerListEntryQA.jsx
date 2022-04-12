import React, { useState } from 'react';
import moment from 'moment';

import {
  ButtonDefaultSM
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
                height: '150px',
                borderRadius: '5px',
                marginRight: '10px',
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
        {helpfulClickedA
          ? (
            <ButtonDefaultSM type="submit">
              {`Answer Helpful! (${answer.helpfulness + 1})`}
            </ButtonDefaultSM>
          )
          : (
            <ButtonDefaultSM
              type="submit"
              onClick={handleHelpfulnessClickA}
            >
              {`Yes (${answer.helpfulness})`}
            </ButtonDefaultSM>
          )}
        {reportClickedA
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
              onClick={handleReportClickA}
            >
              Report
            </ButtonDefaultSM>
          )}
      </div>
    </>
  );
}
