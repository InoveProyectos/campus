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
    paddingTop: '20px',
    paddingLeft: '20px',
    '@media (max-width: 768px)': {
        paddingLeft: '40px',
        textAlign: 'start',
        paddingTop: '10px',
    },
});

const HeadingHonor = styled('h1')({
    textAlign: 'start',
    paddingTop: '20px',
    paddingLeft: '20px',
    '@media (max-width: 768px)': {
        paddingLeft: '40px',
        textAlign: 'start',
        paddingTop: '20px',
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
    justifyContent: 'center',
    padding: '20px',
    paddingBottom: '50px',

    '@media (max-width: 768px)': {
        textAlign: "center",
        padding: '10px',
        paddingRight: '1px',
        justifyContent: 'center',
        paddingBottom: '50px',
    },
});

function Nosotros() {
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <NavBar><img src={logoCompleto} style={{ width: 150, height: 100 }} alt="" /></NavBar>
                <Divider style={{ backgroundColor: "white", marginTop: '180px' }}></Divider>
                <HeadingUs>Nosotros</HeadingUs>
                <Container>
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                </Container>
                <Divider style={{ backgroundColor: "white" }}></Divider>
                <HeadingHonor>Cuadro de Honor</HeadingHonor>
                <Container>
                    <CardNosotros />
                    <CardNosotros />
                    <CardNosotros />
                </Container>
            </AppContainer>
        </>
    );
}

export default Nosotros;
