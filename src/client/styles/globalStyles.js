import React from 'react'
import { createGlobalStyle } from 'styled-components';

const primaryTeal = '#EC77AB';
const secondaryBlue = '#776EB1';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Lucida', 'Verdana', 'Tahoma', 'Arial';
  }

  .btn {
    color: #0635C9;
  }
`;

export default function AppStyles() {
  return (
    <div>
      <GlobalStyle />
      This is my app!
    </div>
  );
}
