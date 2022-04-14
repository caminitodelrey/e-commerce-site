import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import {
  ButtonDefaultSM,
  ReportClicked,
} from '../../../theme/buttonStyle.js';

export default function AnswerListEntryQA({
  answer,
}) {
  const [helpfulClickedA, setHelpfulClickedA] = useState(false);
  const [reportClickedA, setReportClickedA] = useState(false);

  const handleHelpfulnessClickA = () => {
    if (!helpfulClickedA) {
      axios({
        method: 'put',
        url: '/qa/a/helpful',
        data: {
          answerId: answer.id,
        }
      }).then((response) => console.log(response))
      .catch((err) => console.log('ERROR in AnswerListEntryQA Axios request to server (PUT to qa/a/helpful)'));
      setHelpfulClickedA(true);
    }
  };

  const handleReportClickA = () => {
    if (!reportClickedA) {
      axios({
        method: 'put',
        url: '/qa/a/report',
        data: {
          answerId: answer.id,
        }
      }).then((response) => console.log(response))
      .catch((err) => console.log('ERROR in AnswerListEntryQA Axios request to server (PUT to qa/a/report)'));
      setReportClickedA(true);
    }
  };

  return (
    <div
      style={{
        marginLeft: '25px'
      }}
    >
      <br/>
      <div
        className="answer-body"
      >
        <div style={{ "dispay": "flex" }}>
          <p><strong>A:</strong>{` ${answer.body}`}</p>
        </div>
      </div>
      {answer.photos.length ? (
        <div className="pictures">
          {answer.photos.map((pic) => (
            <img
              key={Math.random()}
              src={pic}
              style={{
                height: '150px',
                marginRight: '10px',
              }}
              alt={`${answer.answerer_name}'s data failed to load`}
              className="answer-pic"
            />
          ))}
        </div>
      ) : null}
      <div className="bottom of answer">
        <span>{`by: ${answer.answerer_name}, `}</span>
        <span>{moment(answer.date).format('MMMM D, YYYY')}</span>
        {helpfulClickedA
          ? (
            <ButtonDefaultSM type="submit">
              {`Thank you for your feedback! (${answer.helpfulness + 1})`}
            </ButtonDefaultSM>
          )
          : (
            <ButtonDefaultSM
              type="submit"
              onClick={handleHelpfulnessClickA}
            >
              {`Helpful (${answer.helpfulness})`}
            </ButtonDefaultSM>
          )}
        {reportClickedA
          ? <ReportClicked>Answer Reported</ReportClicked>
          : (
            <ButtonDefaultSM
              type="submit"
              onClick={handleReportClickA}
            >
              Report
            </ButtonDefaultSM>
          )}
      </div>
    </div>
  );
}
