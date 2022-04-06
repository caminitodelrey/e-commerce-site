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

// Compare button container
export const CompareButtonContainer = styled.div`
  position: absolute;
  top: 0%;
  transform: translateX(0%);
  padding: 10px 10px 7px 10px;
  color: rgba(11, 191, 125);

  &:hover {
    cursor: pointer;
  }
`;

export const CompareButton = styled.button`
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  padding: 8px;
  background-color: rgba(11, 191, 125, .9);
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;
