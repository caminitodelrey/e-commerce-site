import React, { useState, useEffect } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import {
  ModalContainer,
  ModalTitle,
  ModalProductName,
  ModalContent,
  ModalBody,
  TableRow,
} from '../../../theme/modalStyle.js';
import getData from '../../../../helper.js';

export default function ComparisonModal({ toggleModal, product, mainProduct }) {
  const [features, setFeatures] = useState([]);

  const getFeatures = () => {
    Promise.all([
      getData(`products/${mainProduct.id}`),
      getData(`products/${product.id}`),
    ])
      .then((data) => {
        // main: data[0].data.features
        // related: data[1].data.features
      })
      .catch((err) => {
        throw Error(err);
      });
  };

  useEffect(() => {
    getFeatures();
  }, []);

  return (
    <ModalContainer onClick={toggleModal}>
      <ModalContent onClick={toggleModal}>
        <ModalTitle>
          <p>COMPARING</p>
        </ModalTitle>
        <ModalBody>
          <table>
            <thead>
              <tr>
                <ModalProductName width="30%">
                  {mainProduct.name}
                </ModalProductName>
                <th> </th>
                <ModalProductName width="30%">{product.name}</ModalProductName>
              </tr>
            </thead>
            <tbody>
              <TableRow>
                <td>
                  <FcCheckmark />
                </td>
                <td>GMO and Pesticide-free</td>
                <td>
                  <FcCheckmark />
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <FcCheckmark />
                </td>
                <td>Made with 100% Genetic Modification</td>
                <td> </td>
              </TableRow>
            </tbody>
          </table>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
}
