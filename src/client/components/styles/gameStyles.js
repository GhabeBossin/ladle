import styled from 'styled-components';
import { Button } from 'reactstrap';

const StyledCard = styled.div.attrs({
  className: "card text-center border-0 shadow",
})`
  margin: 0 3em 3em;
`;

const StyledCardBody = styled.div.attrs({
  className: "card-img-overlay"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const StyledBtnDiv = styled.div.attrs({
  className: 'pb-5 border-bottom'
})`
  display:flex;
  justify-content: center;
`;

const StyledCardButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: fit-content;
`;

const BigBtn = styled(Button).attrs({
  size: 'lg'
})``;

export {
  BigBtn,
  StyledBtnDiv,
  StyledCard,
  StyledCardBody,
  StyledCardButtons
}