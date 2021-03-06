import React from 'react';
import ListEntryQA from './ListEntryQA.jsx';

export default function ListQA({ product, questions, questionsDisplayed }) {
  return (
    <div
      id="list"
      style={{
        maxWidth: '1200px',
        maxHeight: '550px',
        overflow: 'auto',
        margin: '15px 0px',
      }}
    >
      {questions.slice(0, questionsDisplayed).map((q) => (
        <ListEntryQA key={q.question_id} product={product} question={q} />
      ))}
    </div>
  );
}
