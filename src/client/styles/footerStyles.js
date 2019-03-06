import styled from 'styled-components';
import Footer from '../Footer'

const StyledFooter = styled(Footer)`
  display: flex;
  flex: 1;
  min-width: 100%;
  justify-self: flex-end;
  justify-content: flex-end;
  opacity: .75;
  & > footer {
    min-width: 100% !important;
  }
`;

export default StyledFooter