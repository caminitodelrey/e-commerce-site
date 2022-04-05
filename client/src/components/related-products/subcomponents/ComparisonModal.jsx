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
        const mainFeatures = data[0].data.features;
        const relatedFeatures = data[1].data.features;
        let allFeatures = {};

        console.log('mainFeatures', mainFeatures);
        console.log('relatedFeatures', relatedFeatures);

        let featureCounter = Math.max(mainFeatures.length, relatedFeatures.length);


        for (let i = 0; i < featureCounter; i += 1) {


          let allFeatures = {
            featureType: relatedFeatures[i].feature,
            relatedValue: relatedFeatures[i].value,
          };
        }

        // const dummyFeatures = features;
        // dummyFeatures.push();
        // setFeatures(dummyFeatures);

        // const map = new Map();
        // mainFeatures.forEach((main) => map.set(main.feature, main));
        // relatedFeatures.forEach((related) =>
        //   map.set(related.feature, { ...map.get(related.feature), ...related }));

        // const mergedArr = Array.from(map.values());

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
