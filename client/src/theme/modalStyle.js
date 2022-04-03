import styled from "styled-components";

export const ModalContainer = styled.div`
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

export const ModalHeader = styled.div`
  padding: 15px 0 0 50px;
`

export const ModalContent = styled.div`
  width: 600px;
  background-color: white;
`

export const ModalBody = styled.div`
  padding: 10px;
`

export const TableRow = styled.tr`
  height: 40px;
  text-align: center;
`