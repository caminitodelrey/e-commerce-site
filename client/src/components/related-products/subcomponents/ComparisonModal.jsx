import React, { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import { FcCheckmark } from 'react-icons/fc';
import { GrClose } from 'react-icons/gr';
import {
  ModalContainer,
  CompareModalTitle,
  ModalProductName,
  ModalContent,
  ModalBody,
  TableRow,
  TableRowFeature,
} from '../../../theme/modalStyle.js';

import axios from 'axios';

export default function ComparisonModal({ toggleModal, product, mainProduct }) {
  const [features, setFeatures] = useState([]);
  const [isLoaded, setisLoading] = useState(false);

  console.log(product)

  const handleServerRoutes = (url, id) => (
    axios({
      method: 'get',
      url: url,
      params: {
        productId: id,
      }
    })
  );

  const getFeatures = () => {
    Promise.all([
      handleServerRoutes('/product', mainProduct.id),
      handleServerRoutes('/product', product.id),
    ]).then((data) => {
      const mainFeatures = data[0].data.features;
      const relatedFeatures = data[1].data.features;
      const map = new Map();

      mainFeatures.forEach((main) => {
        const sorted = {
          feature: main.feature,
          main: main.value,
          related: null,
        };
        map.set(main.feature, sorted);
      });

      relatedFeatures.forEach((related) => {
        const relatedSorted = {
          feature: related.feature,
          main: null,
          related: related.value,
        };
        map.set(related.feature, relatedSorted);
      });

      mainFeatures.forEach((main) => {
        relatedFeatures.forEach((related) => {
          if (main.feature.includes(related.feature)) {
            const combined = {
              feature: main.feature,
              main: main.value,
              related: related.value,
            };
            map.set(main.feature, combined);
          }
        });
      });

      const mergedArr = Array.from(map.values());

      setFeatures(mergedArr);
      setisLoading(true);
    })
    .catch((err) => {
      console.log('err in ComparisonModal');
    });
  };

  useEffect(() => {
    getFeatures();
  }, []);

  if (isLoaded) {
    return (
      <ModalContainer>
        <ModalContent>
          <CompareModalTitle>
            <p>COMPARING</p>
            <p
              onClick={toggleModal}
              style={{ cursor: 'pointer' }}
            >
              <GrClose />
            </p>
          </CompareModalTitle>
          <ModalBody>
            <table>
              <thead>
                <tr>
                  <ModalProductName>
                    {mainProduct.name}
                  </ModalProductName>

                  <th width="300px"> </th>
                  <ModalProductName>
                    {product.name}
                  </ModalProductName>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <TableRow key={feature.feature}>
                    <td>
                      {feature.main !== null ? (
                        <div style={{ 'display': 'flex', 'flexDirection': 'row'}}>
                          <div style={{ 'marginRight': '5px'}}><FcCheckmark /></div>
                          <div>{feature.main}</div>
                        </div>
                      ) : (
                        ''
                      )}
                    </td>
                    <TableRowFeature>
                      {feature.feature}
                    </TableRowFeature>
                    <td>
                      {feature.related !== null ? (
                        <div style={{ 'display': 'flex', 'flexDirection': 'row'}}>
                        <div style={{ 'marginRight': '5px'}}><FcCheckmark /></div>
                        <div>{feature.related}</div>
                      </div>
                      ) : (
                        ''
                      )}
                    </td>
                  </TableRow>
                ))}
              </tbody>
            </table>
          </ModalBody>
        </ModalContent>
      </ModalContainer>
    );
  }
}
