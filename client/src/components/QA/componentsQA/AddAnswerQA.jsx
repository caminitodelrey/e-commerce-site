import React, { useState, useEffect } from 'react';

export default function AddAnswerQA({
  product,
  filteredQuestion,
  addAnswerModal,
  toggleAddAnswerModal,
}) {
  const [answerBody, setAnswerBody] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const handleBodyChange = (e) => {
    setAnswerBody(e.target.value);
  };

  const handleNameChange = (e) => {
    setNickName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  if (addAnswerModal) {
    return (
      <div>
        <h3>Submit your answer</h3>
        <h3>{`${product.name}: "${filteredQuestion.question_body}"`}</h3>
        <div className="add-answer">
          <div className="add-answer-body">
            <span>Your Answer*</span>
            <textarea
              type="text"
              name="add-answer-body"
              maxLength="1000"
              value={answerBody}
              placeholder="Type your answer here..."
              style={{
                height: '100px',
                width: '600px',
              }}
              onChange={handleBodyChange}
            />
          </div>
          <div className="add-answer-nickname">
            <span>What is your Nickname?*</span>
            <textarea
              type="text"
              name="add-answer-nickname"
              maxLength="200"
              value={nickName}
              placeholder="Example: jack543!"
              style={{
                height: '25px',
                width: '600px',
              }}
              onChange={handleNameChange}
            />
            <span>
              For privacy reasons, do not use your full name or email address
            </span>
          </div>
          <div className="add-answer-email">
            <span>Email*</span>
            <textarea
              type="text"
              name="add-question-email"
              maxLength="60"
              value={email}
              placeholder="Example: jack@email.com"
              style={{
                height: '25px',
                width: '600px',
              }}
              onChange={handleEmailChange}
            />
            <span>For authentication reasons, you will not be emailed</span>
            <button type="button">Upload your photos</button>
            <div>
              <button type="button">Submit Answer</button>
              <button type="button" onClick={toggleAddAnswerModal}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
