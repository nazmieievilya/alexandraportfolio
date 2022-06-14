import * as React from "react";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  html {
    overflow: scroll;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0; 
    background: transparent; 
  }
  ::-webkit-scrollbar-thumb {
      background: #FF0000;
  }

`;
const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
};

export default IndexPage;
