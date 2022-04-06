import styled from 'styled-components';

// Wishlist and Remove buttons container
export const ActionButtonContainer = styled.div`
  position: absolute;
  top: 0%;
  transform: translateX(630%);
  padding: 10px 10px 7px 10px;
  border-radius: 0 6px;
  background: #fff;
  color: rgba(11, 191, 125);

  &:hover {
    cursor: pointer;
  }
`;

// Compare button
export const CompareButton = styled.button`
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  padding: 8px;
  color: rgba(11, 191, 125, .9);
  background-color: #fff;
  box-shadow: 5px 5px 12px -5px rgba(0, 0, 0, 0.1)
`;

// Compare button container
export const CompareButtonContainer = styled.div`
  position: absolute;
  top: 0%;
  transform: translateX(0%);
  padding: 10px 10px 7px 10px;
  color: rgba(11, 191, 125);

  &:hover ${CompareButton} {
    cursor: pointer;
    color: #fff;
    background-color: rgba(11, 191, 125, .9);
    box-shadow: 0px 5px 10px rgba(46, 229, 157, 0.4);
  }
`;
