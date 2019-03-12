import styled from 'styled-components';
import Footer from '../user/Footer'
import MainNav from '../user/MainNav'

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: calc(100vh - 2.5em);
`;

const StyledFooter = styled(Footer)`
  display: flex;
  flex: 1;
  min-width: 100%;
  justify-self: flex-end;
  justify-content: flex-end;
  opacity: .75;
`;

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
    transition: color .15s;

  & :hover {
      color: #1AE5BE;
      transition: color .15s;
    }
  }
`;

const FuzzyFilter = styled.div`
  z-index: 1;
`;

export {
  FuzzyFilter,
  StyledMainNav,
  StyledAppContainer,
  StyledFooter
}

