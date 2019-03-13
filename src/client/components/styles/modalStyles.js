import styled from 'styled-components';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  padding-bottom: 8em;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-width: 20vw;
  max-width: 60vw;
  overflow: scroll;
  border-radius: 5px;
  padding: 2.5em 2em;
`;

export { 
  ModalContainer,
  ModalWrapper
}