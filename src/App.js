import React from 'react';
//import './styles.css';
import Header from './components/header';
import styled, { createGlobalStyle } from 'styled-components';
import Main from './pages/main/main';

const App = () => {
  return (
    <>  
      <Global />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
};



const Container = styled.div`
heigth: 100vh;
background-image: url("https://nullprogram.com/img/hypernova/starfield.gif");
`;

const Global = createGlobalStyle `
body  {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: grey;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9pt;

}
`;

export default App;