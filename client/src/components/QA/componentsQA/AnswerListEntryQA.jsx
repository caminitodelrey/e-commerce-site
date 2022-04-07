import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function AnswerListEntryQA({ answer }) {
  return (
    <>
      <div className="answer-body">
        <span>
          <strong>A:</strong>
          {' '}
          {answer.body}
        </span>
      </div>
      {answer.photos.length ? (
        <div className="pictures">
          {answer.photos.map((pic) => (
            <img
              key={pic}
              src={pic}
              style={{ height: '100px', weight: '100px' }}
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
        <span>{'Helpful? '}</span>
        <input
          type="submit"
          value="Yes"
          onKeyPress={null}
          tabIndex={0}
          // onClick={handleHelpful}
        />
        <span>{` (${answer.helpfulness})`}</span>
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
