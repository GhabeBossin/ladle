import styled from 'styled-components';
import Footer from '../user/Footer'
import MainNav from '../user/MainNav'
import { 
  ListGroup,
  ListGroupItem } from 'reactstrap'

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: calc(100vh - 2em);
`;

const FuzzyDDF = styled(ListGroup)`
  position: absolute;
  top: 2.95em;
  width: 285px;
  z-index: 2;
`;

const FuzzyInner = styled(ListGroupItem)`
  padding: .5em !important;
  font-size: small;
`;

const StyledMainNav = styled(MainNav).attrs({
  className: 'shadow-sm',
})`
  display: flex;
  flex: 1;
  max-height: fit-content;
  min-width: 100%;
  justify-self: flex-start;
  margin-bottom: 4em;
  position: relative;

  &&& nav {
    min-width: 100%;

    & .navbar-brand {
      color: #0635C9;
      transition: color .1s;

    & :hover {
        color: #1AE5BE;
        transition: color .1s;
      }
    }
  
    & .active {
        color: #0635C9 !important;
        transition: color .1s;

        & :hover {
          color: #1AE5BE !important;
          transition: color .1s;
        }
      }

    & a.nav-link {
      color: rgba(6, 52, 201, 0.70);
      transition: color .1s;

      & :hover {
        color: #1AE5BE !important;
        transition: color .1s;
      }
    }
  }
`;

const StyledFooter = styled(Footer)`
  display: flex;
  min-width: 100%;
  
  &&& nav {
    position: relative;
    display: flex;
    min-width: 100%;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    align-items: baseline;
    padding: 0 1em 0 !important;

    & p {
      font-size: x-small;
      opacity: .25;
    }

    & span {
      opacity: .5;
      justify-self: flex-end;
      font-size: smaller;
    }
  }
`;

export {
  FuzzyDDF,
  FuzzyInner,
  StyledMainNav,
  StyledAppContainer,
  StyledFooter
}

