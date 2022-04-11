import React, { useState, useEffect } from 'react';
import { HeaderSearch } from '../../theme/headerStyle.js';

export default function Header({ handleProductChange }) {

  // const [isSearching, setIsSearching] = useState(false);
  // const [searchText, setSearchText] = useState('');

  // const handleSearchChange = (e) => {
  //   setIsSearching(true);
  //   setSearchText(e.target.value);
  // }

  // const handleSearchSubmit = (e) => {
  //   if (e.keyCode = 13) {
  //     // add handleSearchFilter(searchText);
  //   }
  // }

  // const handleSearchListClick = (productId) => {
  //   handleProductChange(productId);
  // }

  // // page 1 - 203
  // const pageNum = [...Array(204).keys()].map((i) => i + 1);

  // getSearchedProduct = () => {
  //   for (let i = 0; i < pageNum.length; i += 1) {
  //     getData(`products?page=${pageNum[i]}`)
  //       .then((data) => {
  //         console.log(data)
  //       })
  //   }
  // }

  // useEffect(() => {
  //   getSearchedProduct();
  // })

  return (
    <>
      <HeaderSearch>
        <input
          type="search"
          placeholder="Search"
          // maxLength="100"
          // value={searchText}
          // onChange={handleSearchChange}
          // onKeyDown={(e) => handleSearchSubmit(e)}
        />

      </HeaderSearch>

      {/* {displayModal && (
        <ModalContainer>
          TEXT
        </ModalContainer>
      )} */}
    </>
  )
}