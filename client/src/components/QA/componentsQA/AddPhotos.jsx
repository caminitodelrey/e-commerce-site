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
  setPhotos,
}) {
  const [photosURL, setPhotosURL] = useState([]);
  const [showAddPhoto, setShowAddPhoto] = useState(false);
  const [photo1Url, setPhoto1Url] = useState('');
  const [photo2Url, setPhoto2Url] = useState('');
  const [photo3Url, setPhoto3Url] = useState('');
  const [photo4Url, setPhoto4Url] = useState('');
  const [photo5Url, setPhoto5Url] = useState('');

  const handleUploadPhotos = () => {
    setPhoto1(photo1Url); // REMOVE
    setPhotos([photo1Url, photo2Url, photo3Url, photo4Url, photo5Url]);
    setPhoto1Url('');
    setPhoto2Url('');
    setPhoto3Url('');
    setPhoto4Url('');
    setPhoto5Url('');
    setShowAddPhoto(!showAddPhoto);
  };

  const toggleAddPhotoModal = () => {
    setPhoto1Url('');
    setPhoto2Url('');
    setPhoto3Url('');
    setPhoto4Url('');
    setPhoto5Url('');
    setShowAddPhoto(!showAddPhoto);
  };

  const handlePhoto1UrlChange = (e) => {
    setPhoto1Url(e.target.value);
  };

  const handlePhoto2UrlChange = (e) => {
    setPhoto2Url(e.target.value);
  };

  const handlePhoto3UrlChange = (e) => {
    setPhoto3Url(e.target.value);
  };

  const handlePhoto4UrlChange = (e) => {
    setPhoto4Url(e.target.value);
  };

  const handlePhoto5UrlChange = (e) => {
    setPhoto5Url(e.target.value);
  };

  const addPhotoComponent = !showAddPhoto ? (
    <ButtonDefaultSM
      onClick={toggleAddPhotoModal}
      style={{
        marginTop: '15px',
        marginBottom: '25px',
      }}
    >
      Upload your photos
    </ButtonDefaultSM>
  ) : (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>
          <h1>Add photos to your answer</h1>
        </ModalTitle>
        <ModalBody>
          <textarea
            type="text"
            name="photo1Url"
            maxLength="1000"
            value={photo1Url}
            placeholder="Paste url here..."
            style={{
              height: '25px',
              width: '550px',
            }}
            onChange={handlePhoto1UrlChange}
          />
          <textarea
            type="text"
            name="photo2Url"
            maxLength="1000"
            value={photo2Url}
            placeholder="Paste url here..."
            style={{
              height: '25px',
              width: '550px',
            }}
            onChange={handlePhoto2UrlChange}
          />
          <textarea
            type="text"
            name="photo3Url"
            maxLength="1000"
            value={photo3Url}
            placeholder="Paste url here..."
            style={{
              height: '25px',
              width: '550px',
            }}
            onChange={handlePhoto3UrlChange}
          />
          <textarea
            type="text"
            name="photo4Url"
            maxLength="1000"
            value={photo4Url}
            placeholder="Paste url here..."
            style={{
              height: '25px',
              width: '550px',
            }}
            onChange={handlePhoto4UrlChange}
          />
          <textarea
            type="text"
            name="photo5Url"
            maxLength="1000"
            value={photo5Url}
            placeholder="Paste url here..."
            style={{
              height: '25px',
              width: '550px',
            }}
            onChange={handlePhoto5UrlChange}
          />
          <div
            style={{
              marginTop: '15px',
            }}>
            <ButtonDefaultLG type="button" onClick={handleUploadPhotos}>
              Upload Photos
            </ButtonDefaultLG>
            <ButtonDefaultLG type="button" onClick={toggleAddPhotoModal}>
              Cancel
            </ButtonDefaultLG>
          </div>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );

  return <div>{addPhotoComponent}</div>;
}
