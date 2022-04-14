import React, { useState } from 'react';
import axios from 'axios';
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
  ButtonDefaultLG,
} from '../../../theme/buttonStyle.js';

export default function AddQuestionQA({
  product,
  addQuestionModal,
  toggleAddQuestionModal,
  handleAddQuestionSubmit,
}) {
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

  const handleAddQuestionClick = (data) => {
    if (questionBody.length < 1) {
      return alert('Please add a question.');
    } else if (nickName.length < 1) {
      return alert('Please add a Nickname.');
    } else if (email.length < 1) {
      return alert('Please add an email.');
    } else if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      )
    ) {
      return alert('Please enter a valid email address.');
    } else {
      axios({
        method: 'post',
        url: '/qa/q/add',
        data,
      })
        .then((res) => console.log(res)) // REFACTOR OR REMOVE CONSOLE.LOG
        .catch((err) => console.error(err));
      setQuestionBody('');
      setNickName('');
      setEmail('');
      toggleAddQuestionModal();
    }
  };

  if (addQuestionModal) {
    return (
      <ModalContainer>
        <ModalContent>
          <ModalTitle>
            <h1>Ask your question</h1>
            <h3
              style={{
                color: 'rgb(10, 89, 81)',
              }}
            >{`about the ${product.name}`}</h3>
          </ModalTitle>
          <ModalBody>
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
                    width: '550px',
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
                    height: '25px',
                    width: '550px',
                  }}
                  onChange={handleNameChange}
                />
                <br />
                <span>
                  For privacy reasons, do not use your full name or email
                  address
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
                    height: '25px',
                    width: '550px',
                  }}
                  onChange={handleEmailChange}
                />
                <br />
                <span>For authentication reasons, you will not be emailed</span>
                <div>
                  <ButtonDefaultLG
                    type="button"
                    onClick={() =>
                      handleAddQuestionClick({
                        body: questionBody,
                        name: nickName,
                        email,
                        product_id: product.id,
                      })
                    }
                  >
                    Submit Question
                  </ButtonDefaultLG>
                  <ButtonDefaultLG
                    type="button"
                    onClick={toggleAddQuestionModal}
                  >
                    Cancel
                  </ButtonDefaultLG>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    );
  }
}
