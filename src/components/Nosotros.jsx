import React from 'react';
import CardNosotros from './Cards/CardNosotros';
import backgroundCardNosotros from "../assets/backgorund-cardNosotros.png";
import logoCompleto from "../assets/logo_completo_color.png";
import styled, { createGlobalStyle } from 'styled-components';

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
  }
`;

const AppContainer = styled('div')({
    // position: 'relative',
    minHeight: '100%',
    overflow: 'hidden',
});

const NavBar = styled('nav')({
    position: 'absolute',  // Cambiado de 'relative' a 'absolute'
    top: 20,  // Ajusta según sea necesario
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
    marginTop: "10%",
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
        marginTop: "200px",
        justifyContent: 'center',
    },
});

function Nosotros() {
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <NavBar><img src={logoCompleto} style={{ width: 150, height: 100 }} alt="" /></NavBar>
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
            </AppContainer>
        </>
    );
}

export default Nosotros;
