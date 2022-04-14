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
  // toggleAddQuestionModal,
  // handleAddQuestionSubmit,
}) {
  const [photosURL, setPhotosURL] = useState([]);
  const [showAddPhoto, setShowAddPhoto] = useState(false);

  // const handleAddQuestionClick = (data) => {
  //   handleAddQuestionSubmit(data);
  //   setQuestionBody('');
  //   setNickName('');
  //   setEmail('');
  //   toggleAddQuestionModal();
  // };
  const handleUploadPhotos = () => {
    setShowAddPhoto(!showAddPhoto);
  }

  const addPhotoComponent = !showAddPhoto ?
    <ButtonDefaultSM onClick={handleUploadPhotos}>Upload photosssssssss</ButtonDefaultSM>
    : (
      <ModalContainer>
        <ModalContent>
          <ModalTitle>
            <h1>Upload photos</h1>
          </ModalTitle>
          <ModalBody>
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

  //
  return (
    <div>
      {addPhotoComponent}
    </div>
  )
}