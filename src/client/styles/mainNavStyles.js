import styled from 'styled-components';
import MainNav from '../components/MainNav'

const StyledMainNav = styled(MainNav)`
  display: flex;
  flex: 1;
  max-height: fit-content;
  min-width: 100%;
  justify-self: flex-start;
  margin-bottom: 1rem;

  & > nav {
    min-width: 100% !important;
  }
`;


export default StyledMainNav