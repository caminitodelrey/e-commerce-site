import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import { ModalContainer, ModalHeader, ModalContent, ModalBody, TableRow } from '../../../theme/modalStyle.js';

export default function Modal ({toggleModal, product, mainProduct}) {

  return (

    <ModalContainer onClick={toggleModal}>
      <ModalContent onClick={toggleModal}>
        <ModalHeader>
          <h3>Comparing</h3>
        </ModalHeader>
        <ModalBody>
          <table>
            <thead>
              <tr>
                <th width='30%'>{mainProduct.name}</th>
                <th></th>
                <th width='30%'>{product.name}</th>
              </tr>
            </thead>
            <tbody>
              <TableRow>
                <td><FcCheckmark /></td>
                <td>GMO and Pesticide-free</td>
                <td><FcCheckmark /></td>
              </TableRow>
              <TableRow>
                <td><FcCheckmark /></td>
                <td>Made with 100% Genetic Modification</td>
                <td></td>
              </TableRow>
            </tbody>
          </table>
        </ModalBody>
      </ModalContent>
    </ModalContainer>

  )
}