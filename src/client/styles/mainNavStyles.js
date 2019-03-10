import styled from 'styled-components';
import MainNav from '../components/MainNav'

const StyledMainNav = styled(MainNav).attrs({
  className: 'shadow-sm',
})`
  display: flex;
  flex: 1;
  max-height: fit-content;
  min-width: 100%;
  justify-self: flex-start;
  margin-bottom: 2em;

  & > nav {
    min-width: 100%;
  }

  &&& .navbar-brand {
    color: #0635C9;
    transition: color .3s;

    :hover {
      color: #1AE5BE;
      transition: color .3s;
    }
  }

  &&& .nav-link:active {

  }
`;


export default StyledMainNav