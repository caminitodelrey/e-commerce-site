import React from 'react';
import { FcCheckmark } from "react-icons/fc";

export default function Modal ({toggleModal, product, mainProduct}) {

  return (
    <dialog
      open
      onClick={toggleModal}
      style={{position:'absolute'}}
    >
      <div onClick={toggleModal}>
        <h1>Comparing</h1>
        <table>
          <tr>
            <th>{mainProduct.name}</th>
            <th></th>
            <th>{product.name}</th>
          </tr>
          <tr>
            <td><FcCheckmark /></td>
            <td>GMO and Pesticide-free</td>
            <td><FcCheckmark /></td>
          </tr>
          <tr>
            <td><FcCheckmark /></td>
            <td>Made with 100% Genetic Modification</td>
            <td></td>
          </tr>
        </table>
      </div>
    </dialog>
  )
}