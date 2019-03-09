import styled from 'styled-components';
import Footer from '../components/Footer'

const StyledFooter = styled(Footer)`
  display: flex;
  flex: 1;
  min-width: 100%;
  justify-self: flex-end;
  justify-content: flex-end;
  opacity: .75;
  /* & span {
    color: #1AE5BE !important
  } */
`;

export default StyledFooter