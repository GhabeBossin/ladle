import styled from 'styled-components';

const StyledWordEdit = styled.button.attrs({
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

export {
  StyledTable
}