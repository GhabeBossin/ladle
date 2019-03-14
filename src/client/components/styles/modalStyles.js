import styled from 'styled-components';
import { Button } from 'reactstrap'

const AlignX = styled(Button)`
  align-self: flex-end;
  position: relative;
  left: 20px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 2;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-width: fit-content;
  max-width: 70%;
  border-radius: 5px;
  padding: 0 1.5em 1.5em;
`;

export { 
  AlignX,
  ModalContainer,
  ModalWrapper
}