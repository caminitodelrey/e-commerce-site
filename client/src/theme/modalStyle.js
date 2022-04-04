import styled from "styled-components";

export const ModalContainer = styled.div`
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalTitle = styled.div`
  padding-left: 10px;
  font-size: 0.875em;
  color: rgba(128, 128, 128, 0.8)
`

export const ModalProductName = styled.th`
  font-weight: 700;
  font-size: 1em;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(3, 115, 83, 0.3);
`

export const ModalContent = styled.div`
  width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
`

export const ModalBody = styled.div`
  padding: 10px;
`

export const TableRow = styled.tr`
  height: 40px;
  text-align: center;
`