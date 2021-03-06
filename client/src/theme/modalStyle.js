import styled from 'styled-components';

export const ModalContainer = styled.div`
  z-index: 4;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalFormContainer = styled.form`
  z-index: 4;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.div`
  padding-left: 10px;
  font-size: 0.875em;
  color: rgba(128, 128, 128, 0.8);
`;

export const CompareModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  padding-left: 10px;
  font-size: 0.875em;
  color: rgba(128, 128, 128, 0.8);
`;

export const ModalProductName = styled.th`
  font-weight: 700;
  font-size: 1em;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(3, 115, 83, 0.3);
  width: 150px;
  position: sticky;
  line-height: 1.25;
`;

export const ModalContent = styled.div`
  width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  font-size: .9em;
`;

export const ModalBody = styled.div`
  padding: 10px;
  overflow-y: auto;
`;

export const TableRow = styled.tr`
  height: 40px;
  text-align: left;
  color: rgba(128, 128, 128, 0.8);
  line-height: 1.25;
`;

export const TableRowFeature = styled.td`
  text-align: center;
  color: rgb(50, 78, 89);
  line-height: 1.25;
`;

// Ratings & Reviews
export const RatingsTableRow = styled.tr`
  height: 20px;
  text-align: left;
  line-height: 1.25;
`;

export const RatingsTD = styled.td`
  width: 20%;
  align-items: center;
  padding-bottom: 10px;
  font-size: .9em;
`;