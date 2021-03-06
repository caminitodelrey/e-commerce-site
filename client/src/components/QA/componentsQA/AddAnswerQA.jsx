import React, { useState } from 'react';
import axios from 'axios';
import AddPhotos from './AddPhotos.jsx';
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

export default function AddAnswerQA({
  product,
  question,
  addAnswerModal,
  toggleAddAnswerModal,
  addPhotosModal,
  toggleAddPhotosModal,
}) {
  const [answerBody, setAnswerBody] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [photo1, setPhoto1] = useState(''); // REMOVE

  const handleBodyChange = (e) => {
    setAnswerBody(e.target.value);
  };

  const handleNameChange = (e) => {
    setNickName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const addDefaultSrc = (ev) => {
    ev.target.src =
      'https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png';
    alert('You must enter the following: a valid image url');
  };

  const handleUploadPhotosClick = (photos) => {
    setPhoto1(photos);
    setPhotos(photos);
    toggleAddPhotosModal();
  };

  const handleAddAnswerClick = (data) => {
    if (answerBody.length < 1) {
      return alert('Please add an answer.');
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
      const cat = 'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80';
      axios({
        method: 'post',
        url: '/qa/a/add',
        data: {
          questionId: question.question_id,
          data: {
            body: answerBody,
            name: nickName,
            email,
            photos,
          },
        },
      })
        .then((res) => console.log(res)) // REFACTOR OR REMOVE CONSOLE.LOG
        .catch((err) => console.error(err));
      setAnswerBody('');
      setNickName('');
      setEmail('');
      setPhoto1('');
      toggleAddAnswerModal();
    }

  };

  const clickX = () => {
    setAnswerBody('');
    setNickName('');
    setEmail('');
    setPhoto1('');
    toggleAddAnswerModal();
  };

  if (addAnswerModal) {
    return (
      <ModalContainer>
        <ModalContent>
          <ModalTitle>
            <div
              style={{
                display: 'flex'
              }}>
              <h1>Submit your answer</h1>
              <h1
                onClick={clickX}
                style={{
                  cursor: 'Pointer',
                  marginLeft: '55%',
                }}>X</h1>
            </div>
            <h2
              style={{
                color: 'rgb(10, 89, 81)',
              }}
            >{`${product.name}: "${question.question_body}"`}</h2>
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
                    marginBottom: '10px',
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
                <br />
                <div
                  style={{
                    fontWeight: 'lighter',
                    fontStyle: 'italic',
                    fontSize: '80%',
                    marginBottom: '10px',
                  }}
                >
                  For privacy reasons, do not use your full name or email
                  address
                </div>
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
                <br />
                <span
                  style={{
                    fontWeight: 'lighter',
                    fontStyle: 'italic',
                    fontSize: '80%',
                  }}
                >
                  For authentication reasons, you will not be emailed
                </span>
                <br />
                {photo1 == '' ? null : (
                  <img
                    onError={addDefaultSrc}
                    style={{
                      height: '50px',
                      width: 'auto',
                    }}
                    src={photo1}
                    alt={'Photo1'}
                  />
                )}
                <AddPhotos
                  setPhotos={setPhotos}
                  setPhoto1={setPhoto1}
                  toggleAddPhotosModal={toggleAddPhotosModal}
                  handleUploadPhotosClick={handleUploadPhotosClick}
                />
                <div>
                  <ButtonDefaultLG
                    type="button"
                    onClick={() =>
                      handleAddAnswerClick({
                        body: answerBody,
                        name: nickName,
                        email,
                        photos,
                      })
                    }
                  >
                    Submit Answer
                  </ButtonDefaultLG>
                  <ButtonDefaultLG type="button" onClick={clickX}>
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
