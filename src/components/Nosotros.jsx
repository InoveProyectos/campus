import React from 'react';
import CardNosotros from './Cards/CardNosotros';
import backgroundCardNosotros from "../assets/backgorund-cardNosotros.png";
import logoCompleto from "../assets/logo_completo_color.png";
import styled from 'styled-components';

const AppContainer = styled('div')({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: `url(${backgroundCardNosotros})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    overflow: 'hidden',
});

const NavBar = styled('nav')({
    position: 'initial',
    left: 20,
    width: '15%',
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
    marginTop: "1%",
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
        left: 0,
        right: 0,
    },
});

function Nosotros() {
    return (
        <AppContainer style={{backgroundImage: `url(${backgroundCardNosotros})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
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
                <CardNosotros />
                <CardNosotros />
            </Container>
        </AppContainer>
    );
}

export default Nosotros;
