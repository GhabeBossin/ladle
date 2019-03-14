import styled from 'styled-components';
import { Button } from 'reactstrap'

const AlignX = styled(Button)`
  align-self: flex-end;
  position: relative;
  left: 17px;
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
  max-width: 60%;
  overflow: scroll;
  border-radius: 5px;
  padding: 1em;
`;

export { 
  AlignX,
  ModalContainer,
  ModalWrapper
}