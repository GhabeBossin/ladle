import styled from 'styled-components';

const StyledEditBtn = styled.button.attrs({
  type: 'button',
  className: 'btn btn-sm',
})`
  &&& {
    background-color: transparent;
    border: 1px solid #0635C9;

    & :hover {
      border: 1px solid #1AE5BE;
    }
  }
`;

const StyledTable = styled.button.attrs({
  className: 'rounded table'
})`
  &&& {
    border: 1px solid lightgray;
  }
`;


export {
  StyledEditBtn,
  StyledTable
}