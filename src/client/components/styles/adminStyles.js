import styled from 'styled-components';
import { Button } from 'reactstrap';

const StyledTR = styled.tr`
  ${ ({ enabled }) => (
    enabled === false ?
    `color: rgba(0, 0, 0, 0.5);`
    :
    `color: black;`
  )}
`;

const StyledTD = styled.td`
  display: flex;
  justify-content: space-evenly;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DelBtn = styled(Button)`
  background-color: #dc3545 !important;
  & :hover {
    background-color: black !important;
  }
`;

export {
  StyledTR,
  StyledTD,
  BtnDiv,
  DelBtn
}
