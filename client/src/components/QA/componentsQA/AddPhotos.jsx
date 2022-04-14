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
  ButtonDefaultLG,
} from '../../../theme/buttonStyle.js';

export default function AddPhotosQA({
  product,
  addPhotosModal,
  setPhoto1,
  // toggleAddQuestionModal,
  // handleAddQuestionSubmit,
}) {
  const [photosURL, setPhotosURL] = useState([]);
  const [showAddPhoto, setShowAddPhoto] = useState(false);
  const [photo1Url, setPhoto1Url] = useState('');

  // const handleAddQuestionClick = (data) => {
  //   handleAddQuestionSubmit(data);
  //   setQuestionBody('');
  //   setNickName('');
  //   setEmail('');
  //   toggleAddQuestionModal();
  // };
  const handleUploadPhotos = () => {
    setShowAddPhoto(!showAddPhoto);
    setPhoto1(photo1Url);
  }

  const handlePhoto1UrlChange = (e) => {
    setPhoto1Url(e.target.value);
  };

  const addPhotoComponent = !showAddPhoto ?
    <ButtonDefaultSM onClick={handleUploadPhotos}>Upload your photos</ButtonDefaultSM>
    : (
      <ModalContainer>
        <ModalContent>
          <ModalTitle>
            <h1>Add photos to your answer</h1>
          </ModalTitle>
          <ModalBody>
            <div className="add-photos-body">
              <textarea
                type="text"
                name="add-answer-body"
                maxLength="1000"
                value={photo1Url}
                placeholder="Paste url here..."
                style={{
                  height: '25px',
                  width: '550px',
                }}
                onChange={handlePhoto1UrlChange}
              />
            </div>
            <ButtonDefaultLG
              type="button"
              onClick={handleUploadPhotos}
            >
              Upload Photos
            </ButtonDefaultLG>
            <ButtonDefaultLG
              type="button"
              onClick={handleUploadPhotos}
            >
              Cancel
            </ButtonDefaultLG>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    );

  return (
    <div>{addPhotoComponent}</div>
  )
}