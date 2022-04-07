import React, { useState, useEffect } from 'react';

export default function AddQuestion({ product, addQuestionModal, toggleAddQuestionModal }) {
  const [questionBody, setQuestionBody] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const handleBodyChange = (e) => {
    setQuestionBody(e.target.value);
  };

  const handleNameChange = (e) => {
    setNickName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  if (addQuestionModal) {
    return (
      <div>
        <h3>Ask your question</h3>
        <h3>{`about the ${product.name}`}</h3>
        <div className="add-question">
          <div className="add-question-body">
            <span>Your Question*</span>
            <textarea
              type="text"
              name="add-question-body"
              maxLength="1000"
              value={questionBody}
              placeholder="Type your question here..."
              style={{
                height: '100px',
                width: '500px',
              }}
              onChange={handleBodyChange}
            />
          </div>
          <div className="add-question-nickname">
            <span>What is your Nickname?*</span>
            <textarea
              type="text"
              name="add-question-nickname"
              maxLength="200"
              value={nickName}
              placeholder="Example: jackson11!"
              style={{
                width: '500px',
              }}
              onChange={handleNameChange}
            />
            <span>
              For privacy reasons, do not use your full name or email address
            </span>
          </div>
          <div className="add-question-email">
            <span>Email*</span>
            <textarea
              type="text"
              name="add-question-email"
              maxLength="60"
              value={email}
              placeholder="Example: jack@email.com"
              style={{
                width: '500px',
              }}
              onChange={handleEmailChange}
            />
            <span>For authentication reasons, you will not be emailed</span>
            <button type="button">Upload your photos</button>
            <div>
              <button type="button">Submit Answer</button>
              <button type="button" onClick={toggleAddQuestionModal}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
