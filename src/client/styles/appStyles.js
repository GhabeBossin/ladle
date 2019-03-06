import styled from 'styled-components';

const StyledAppContainer = styled.div.attrs({
  className: "shadow-sm",
})`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: calc(100vh - 2.5em);
`;

export default StyledAppContainer