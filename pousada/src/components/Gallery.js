import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/home-background.jpg'; // Certifique-se de adicionar suas imagens na pasta 'assets'
import welcomeImage from '../assets/welcome.jpg'; // Outra imagem de boas-vindas
import logo from '../assets/logo.png'; // Logo da pousada
import { FaBars, FaTimes } from 'react-icons/fa';
import foto1Image from '../assets/breakfast6.jpg'; // Outra imagem de boas-vindas
import foto2Image from '../assets/breakfast1.jpg'; // Outra imagem de boas-vindas
import foto3Image from '../assets/breakfast4.jpg'; // Outra imagem de boas-vindas
import foto4Image from '../assets/breakfast3.jpg'; // Outra imagem de boas-vindas




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


function Breakfast() {
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
      
      <HomeTitle>Galeria de Fotos</HomeTitle>
      <HomeText>
      
     
      Confira algumas imagens da Pousada Pinheira e suas belas acomodações, praias e nosso delicioso café da manhã.<p>

[Aqui você pode inserir um componente de galeria de fotos, usando uma biblioteca de sua escolha, como react-photo-gallery ou react-image-gallery]</p>
      </HomeText>
     
        
      <WelcomeImage src={foto1Image} alt="Bem-vindo à Pousada Pinheira"  />
      <WelcomeImage src={foto2Image} alt="Bem-vindo à Pousada Pinheira"  />
      <WelcomeImage src={foto3Image} alt="Bem-vindo à Pousada Pinheira"  />
      <WelcomeImage src={foto4Image} alt="Bem-vindo à Pousada Pinheira"  />

  
   
    </HomeSection>

    
  );
}

export default Breakfast;
