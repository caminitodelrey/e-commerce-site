import React from 'react';
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
  // getFeatures() {
  //   Promise.all([
  //     getData(`products/${this.props.mainProduct.id}`),
  //     getData(`products/${this.props.product.id}`),
  //   ])
  //     .then((data) => {
  //       // let mainProductFeature = [...this.state.mainProductFeature];
  //       // let productFeature = [...this.state.productFeature];

  //       // mainProductFeature.push(data[0].data.features);
  //       // productFeature.push(data[1].data.features);

  //       // this.setState({
  //       //   mainProductFeature: mainProductFeature,
  //       //   productFeature: productFeature
  //       // })

  //       let features = [...this.state.features];

  //       let mainProductFeatures = data[0].data.features;
  //       let relatedProductFeatures = data[1].data.features;
  //       let allFeatures = {};

  //       for (let i = 0; i < relatedProductFeatures.length; i += 1) {
  //         let comparisonFeatureObj = {
  //           feature: relatedProductFeatures[i].feature,
  //           relatedValue: relatedProductFeatures[i].value,
  //         };
  //         mainProductFeatures.forEach((featureObj) => {
  //           if (featureObj.feature === comparisonFeatureObj.feature) {
  //             comparisonFeatureObj.mainValue = comparisonFeatureObj.relatedValue;
  //           }
  //         });

  //         comparisonFeatureObj.mainValue = comparisonFeatureObj.mainValue || '';
  //       }
  //     })
  //     .catch((err) => {
  //       console.error('getFeatures Error:', err);
  //     });
  // }

  // componentDidMount() {
  //   this.getFeatures();
  // }

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
                <ModalProductName width="30%">
                  {product.name}
                </ModalProductName>
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
