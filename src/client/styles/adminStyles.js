import React from 'react'
import styled from 'styled-components';

const StyledTR = styled.tr`
  ${ ({ enabled }) => (
    enabled === false ?
    `color: rgba(0, 0, 0, 0.5);`
    :
    `color: black;`
  )}
`;

const StyledDelUser = styled.div`
  
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
`;

export {
  StyledTR,
  StyledDelUser,
  ModalContainer,
  ModalWrapper
}