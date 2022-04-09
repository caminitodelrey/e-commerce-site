import React from 'react';
import ListEntryQA from './ListEntryQA.jsx';

export default function ListQA({
  product,
  questions,
  questionsDisplayed,
  handleAddAnswerSubmit,
  handleHelpfulQuestionSubmit,
  handleHelpfulAnswerSubmit,
  handleReportQuestionSubmit,
  handleReportAnswerSubmit,
}) {
  return (
    <div id="list">
      {questions.slice(0, questionsDisplayed).map((q) => (
        <ListEntryQA
          key={q.question_id}
          product={product}
          question={q}
          handleAddAnswerSubmit={handleAddAnswerSubmit}
          handleHelpfulQuestionSubmit={handleHelpfulQuestionSubmit}
          handleHelpfulAnswerSubmit={handleHelpfulAnswerSubmit}
          handleReportQuestionSubmit={handleReportQuestionSubmit}
          handleReportAnswerSubmit={handleReportAnswerSubmit}
        />
      ))}
    </div>
  );
}
