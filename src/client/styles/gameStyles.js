import styled from 'styled-components';

const StyledCard = styled.div.attrs({
  className: "card text-center flash-card front border-0",
})`
  margin: 1em 0 3em;
`;

const StyledCardBody = styled.div.attrs({
  className: "card-img-overlay"
})`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
`;

const StyledBtnDiv = styled.div`
  display:flex;
  justify-content: center;
`;

const StyledCardButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: fit-content;
`;

export {
  StyledBtnDiv,
  StyledCard,
  StyledCardBody,
  StyledCardButtons
}