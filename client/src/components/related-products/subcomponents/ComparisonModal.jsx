import React, { useState, useEffect } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import {
  ModalContainer,
  ModalTitle,
  ModalProductName,
  ModalContent,
  ModalBody,
  TableRow,
  TableRowFeature,
} from '../../../theme/modalStyle.js';
import getData from '../../../../helper.js';

export default function ComparisonModal({ toggleModal, product, mainProduct }) {
  const [features, setFeatures] = useState([]);
  const [isLoaded, setisLoading] = useState(false);

  const getFeatures = () => {
    Promise.all([
      getData(`products/${mainProduct.id}`),
      getData(`products/${product.id}`),
    ])
      .then((data) => {
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
        throw Error(err);
      });
  };

  useEffect(() => {
    getFeatures();
  }, []);

  if (isLoaded) {
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
                  <ModalProductName>{mainProduct.name}</ModalProductName>
                  <th width="300px"> </th>
                  <ModalProductName>{product.name}</ModalProductName>
                </tr>
              </thead>
              <tbody>
                {features.map((feature) => (
                  <TableRow key={feature.feature}>
                    <td>
                      {feature.main !== null ? (
                        <div>
                          &nbsp;
                          &nbsp;
                          <FcCheckmark />
                          &nbsp;
                          &nbsp;
                          {feature.main}
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
                        <div>
                          &nbsp;
                          &nbsp;
                          <FcCheckmark />
                          &nbsp;
                          &nbsp;
                          {feature.related}
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
