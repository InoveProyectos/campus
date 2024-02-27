import React from 'react';
import CardNosotros from './Cards/CardNosotros';
import backgroundCardNosotros from "../assets/backgorund-cardNosotros.png";
import logoCompleto from "../assets/logo_completo_color.png";
import styled, { createGlobalStyle } from 'styled-components';
import Divider from "@mui/material/Divider";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    min-height: 100vh;
    background-image: url(${backgroundCardNosotros});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;  // Fija la imagen de fondo
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

const AppContainer = styled('div')({
    minHeight: '100%',
    overflow: 'hidden',
    color: 'white',
});

const HeadingUs = styled('h1')({
    textAlign: 'start',
    marginTop: '180px',
    paddingLeft: '20px',
    '@media (max-width: 768px)': {
        paddingLeft: '40px',
        textAlign: 'start',
        marginTop: '180px',
    },
});

const HeadingHonor = styled('h1')({
    textAlign: 'start',
    marginTop: '20px',
    paddingLeft: '20px',
    '@media (max-width: 768px)': {
        paddingLeft: '40px',
        textAlign: 'start',
        marginTop: '20px',
    },
});

const NavBar = styled('nav')({
    position: 'absolute', 
    top: 20,  
    left: 20,
    zIndex: 1000,
    marginTop: '20px',
    alignSelf: 'flex-start',

    '@media (max-width: 768px)': {
        top: 25,
        left: 0,
        width: '100%',
        padding: 10,
    },
});

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'flex-start',
    padding: '20px',

    '@media (max-width: 768px)': {
        textAlign: "center",
        padding: '10px',
        paddingRight: '1px',
        justifyContent: 'center',
    },
});

function Nosotros() {
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <NavBar><img src={logoCompleto} style={{ width: 150, height: 100 }} alt="" /></NavBar>
                <HeadingUs>Nosotros</HeadingUs>
                <Divider style={{ backgroundColor: "white" }}></Divider>
                <Container>
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                </Container>
                <Divider style={{ backgroundColor: "white" }}></Divider>
                  <HeadingHonor>Cuadro de Honor</HeadingHonor>
            </AppContainer>
        </>
    );
}

export default Nosotros;
