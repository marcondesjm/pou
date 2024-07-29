import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/home-background.jpg'; // Certifique-se de adicionar suas imagens na pasta 'assets'
import welcomeImage from '../assets/welcome.jpg'; // Outra imagem de boas-vindas
import logo from '../assets/logo.png'; // Logo da pousada
import { FaBars, FaTimes } from 'react-icons/fa';
import praiaImage from '../assets/galllery7.jpg'; // Outra imagem de boas-vindas

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


function Beaches() {
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
      
      <HomeTitle>Praias</HomeTitle>
      
     
      <HomeText>
      
      

A região demonstra grande diversidade em suas praias, na maioria encontramos águas claras e calmas, mas para os aventureiros e amantes de esportes é possível encontrar locais adequados para o <b>Surf, Windsurf, mergulho, natação e etc.</b><p></p>

<b>Praia de Cima: </b>Com uma extensão de 700m, a praia é procurada principalmente por famílias com crianças pequenas devido às suas águas calmas. Na praia, é possível encontrar serviços como aluguel de cadeiras, guarda-sol, pedalinhos e caiaque.<p></p>
Para os que gostam de almoçar na praia e tomar uma cerveja a região oferece 02 bares a beira do mar.<p></p> A praia é cercada por dois costões, um que leva a vila dos pescadores da pinheira e o outro a Ponta das Andorinhas, uma faixa de pedra que avança por metros dentro do mar e dependendo da maré cria piscinas naturais. <p></p>É na praia de cima que esta localizada a POUSADA PINHEIRA<p></p>

<b>Praia de Baixo: </b>Inicia na vila dos pescadores e tem uma extensão de 7km, ideal para caminhadas.<p></p>

<b>Praia do Maço:</b> Pequena praia acessível apenas por trilha, com um bar que funciona na temporada.<p></p>

<b>Ponta do Papagaio:</b> Conhecida pelo cultivo de Ostras e Mariscos, com restaurantes que servem os moluscos de formas variadas.<p></p>

<b>Guarda-do-Embaú: </b>Famosa pelas ondas perfeitas para surf e vida noturna agitada com muito Reggae e Rock.<p></p>

<b>Praia do Sonho:</b> Continuação da ponta do Papagaio, com vista para a Ilha de Florianópolis e o Farol dos Naufragados.<p></p>
      </HomeText>

      
      <WelcomeImage src={praiaImage} alt="Bem-vindo à Pousada Pinheira"  />
    </HomeSection>

    
  );
}

export default Beaches;
