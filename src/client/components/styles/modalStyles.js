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
  background-color: rgba(0, 0, 0, 0.5);
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  padding-top: 25vh;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-width: fit-content;
  max-width: 60vw;
  overflow: scroll;
  z-index: 4;
  border-radius: 5px;
  padding: .2em 1.5em 1.5em;
`;

export { 
  AlignX,
  ModalContainer,
  ModalWrapper
}