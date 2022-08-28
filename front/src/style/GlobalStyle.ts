import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'LeferiPoint-WhiteObliqueA';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  
  body {
    font-family: 'GangwonEdu_OTFBoldA';
  }
  
  a {
    text-decoration: none;
  }

  input {
    border: none;
    outline: none;
  }
  
  button {
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
