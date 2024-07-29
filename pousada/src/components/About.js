import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/home-background.jpg'; // Certifique-se de adicionar suas imagens na pasta 'assets'
import welcomeImage from '../assets/welcome.jpg'; // Outra imagem de boas-vindas
import logo from '../assets/logo.png'; // Logo da pousada
import pousada1Image from '../assets/contato-pousada.png'; // Outra imagem de boas-vindas



import { FaBars, FaTimes } from 'react-icons/fa';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: #333;
  text-align: center;
  padding: 20px;
`;

const WelcomeImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const HomeTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const HomeText = styled.p`
  font-size: 1.2em;
  margin: 0 auto;
  max-width: 800px;
`;

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  background-image: url(${backgroundImage});
  
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
  margin-left: 20px;
`;

const Navbar = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: #ffff;
  
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #f0a500;
  }
`;

const HamburgerIcon = styled(FaBars)`
  display: none;
  cursor: pointer;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseIcon = styled(FaTimes)`
  display: none;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;


function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <HomeSection>
      <HeaderContainer>
        <Logo src={logo} alt="Pousada Pinheira Logo" />
        <HamburgerIcon onClick={() => setMenuOpen(true)} />
        <Navbar open={menuOpen}>
          <CloseIcon onClick={() => setMenuOpen(false)} />
          <NavList>
            <NavItem>
              <NavLink href="/">Home</NavLink>
              
            </NavItem>
            <NavItem>
              <NavLink href="/about">Sobre</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/accommodations">Acomodações</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/beaches">Praias</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/breakfast">Café da Manhã</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gallery">Fotos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pinheira">Pinheira</NavLink>
            </NavItem>
            <NavItem>
       
            </NavItem>
          </NavList>
          
        </Navbar>
        
      </HeaderContainer>
      
      
      <NavLink href="/contact">
     
      </NavLink>
     
      <WelcomeImage src={welcomeImage} alt="Bem-vindo à Pousada Pinheira"  />
      
      <HomeTitle>Pousada Pinheira</HomeTitle>
      
   
      <HomeText>
      
      Localizada a menos de 50km de Florianópolis e cercada pela Praia do Sonho, Ponta do Papagaio, Praia da Pinheira e Guarda-do-Embaú, a <b>Pousada Pinheira</b> encontra-se a menos de 300m da Praia de Cima, onde águas calmas e limpas fazem a alegria das crianças e trazem tranquilidade para os pais. <p></p>
    
    Uma pousada familiar rodeada de muito verde e belezas naturais, muito aconchegante com um estilo rústico inconfundível. <p></p>
 
    Contamos com uma estrutura de 4 churrasqueiras no pátio, garagem privativa e estacionamento exclusivo, espaço para eventos, guarda-sol e internet wireless. <p></p>
      </HomeText>

      <WelcomeImage src={pousada1Image} alt="Bem-vindo à Pousada Pinheira"  />
    
    </HomeSection>

    
  );
}

export default About;
