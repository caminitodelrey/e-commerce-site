import React from 'react';
import getData from '../../../../helper.js';

import { FcCheckmark } from "react-icons/fc";
import { ModalContainer, ModalHeader, ModalContent, ModalBody, TableRow } from '../../../theme/modalStyle.js';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProductFeature: [],
      productFeature: []
    }
  }

  getFeatures() {
    Promise.all([
      getData(`products/${this.props.mainProduct.id}`),
      getData(`products/${this.props.product.id}`)
    ])
      .then(data => {
        let mainProductFeature = [...this.state.mainProductFeature];
        let productFeature = [...this.state.productFeature];

        mainProductFeature.push(data[0].data.features);
        productFeature.push(data[1].data.features);

        this.setState({
          mainProductFeature: mainProductFeature,
          productFeature: productFeature
        })
      })
      .catch(err => {
        console.error('getFeatures Error:', err);
      })
  }

  componentDidMount() {
    this.getFeatures();
  }

  render() {

    return (
      <ModalContainer onClick={this.props.toggleModal}>
        <ModalContent onClick={this.props.toggleModal}>
          <ModalHeader>
            <h3>Compare</h3>
          </ModalHeader>
          <ModalBody>
            <table>
              <thead>
                <tr>
                  <th width='30%'>{this.props.mainProduct.name}</th>
                  <th></th>
                  <th width='30%'>{this.props.product.name}</th>
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
}