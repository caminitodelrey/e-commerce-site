import React, { useState } from 'react';
import {
  ModalContainer,
  ModalTitle,
  ModalProductName,
  ModalContent,
  ModalBody,
  TableRow,
} from '../../../theme/modalStyle.js';
import {
  ButtonDefaultSM,
} from '../../../theme/buttonStyle.js';

export default function AddAnswerQA({
  product,
  question,
  addAnswerModal,
  toggleAddAnswerModal,
  handleAddAnswerSubmit,
}) {
  const [answerBody, setAnswerBody] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleBodyChange = (e) => {
    setAnswerBody(e.target.value);
  };

  const handleNameChange = (e) => {
    setNickName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddAnswerClick = (data) => {
    handleAddAnswerSubmit(data, question.question_id);
    setAnswerBody('');
    setNickName('');
    setEmail('');
    toggleAddAnswerModal();
  };

  if (addAnswerModal) {
    return (
      <ModalContainer>
        <ModalContent>
          <ModalTitle>
            <h3>Submit your answer</h3>
            <h3>{`${product.name}: "${question.question_body}"`}</h3>
          </ModalTitle>
          <ModalBody>
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
                    width: '550px',
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
                    width: '550px',
                  }}
                  onChange={handleNameChange}
                />
                <br/>
                <span>For privacy reasons, do not use your full name or email address</span>
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
                    width: '550px',
                  }}
                  onChange={handleEmailChange}
                />
                <br/>
                <span>For authentication reasons, you will not be emailed</span>
                <br/>
                <ButtonDefaultSM type="button">Upload your photos</ButtonDefaultSM>
                <div>
                  <ButtonDefaultSM
                    type="button"
                    onClick={() => handleAddAnswerClick({
                      body: answerBody,
                      name: nickName,
                      email,
                      photos,
                    })}
                  >
                    Submit Answer
                  </ButtonDefaultSM>
                  <ButtonDefaultSM type="button" onClick={toggleAddAnswerModal}>Cancel</ButtonDefaultSM>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    );
  }
}
