import styled from 'styled-components';
import MainNav from '../components/MainNav'

const StyledMainNav = styled(MainNav).attrs({
  className: 'shadow-sm'
})`
  display: flex;
  flex: 1;
  max-height: fit-content;
  min-width: 100%;
  justify-self: flex-start;
  margin-bottom: 2em;

  & > nav {
    min-width: 100% !important;
  }

  & .navbar-brand {
    color: #0635C9 !important;
    transition: color .15s !important;

    :hover {
      color: #1AE5BE !important;
    }
  }
`;


export default StyledMainNav