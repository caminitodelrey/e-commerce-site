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

export default function AddPhoto ({ handleShowAddPhoto, toggleAddPhoto, handleShowPic }) {
  const [url, setUrl] = useState('');

  const handleUrlInput = (e) => {
    setUrl(e.target.value);
  }

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>
          <h1>
            Add Photo Url
          </h1>
        </ModalTitle>
        <ModalBody>
          <input
            type="text"
            onChange={handleUrlInput}
            style={{ marginBottom: '20px' }}
          />
          <br />
          <ButtonDefaultLG
            // onClick={
            //   handleShowAddPhoto(url)
            // }
            onClick={(e) => {
              handleShowAddPhoto(url);
              toggleAddPhoto(e);

            }}
          >Upload Photos</ButtonDefaultLG>
          <ButtonDefaultLG onClick={toggleAddPhoto}>Cancel</ButtonDefaultLG>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  )
}