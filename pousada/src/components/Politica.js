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
      
      <HomeTitle>Política de cancelamento de reserva – Embratur </HomeTitle>
      
   
      <HomeText>
      
 
 
 Políticas de Reservas, Cancelamentos e No Show     <p></p>
  
 (Deliberação Normativa n 161/95 da Embratur)     <p></p>
  
 Hospedagem Pousada Pinheira:     <p></p>
  
 Nossos preços estão estabelecidos de acordo com o período de utilização e a quantidade de ocupantes em nossos aptos. As diárias iniciam-se às 14:00 hs e encerram-se às 11:30 hs do dia seguinte, independente do horário de check-in. Para permanecer na área da pousada após o término do período contratado informe-se com a recepção  sobre a disponibilidade.     <p></p>
  
 Reserva:     <p></p>
 
 A partir do pagamento de pelo menos 50% do valor total das diárias e confirmação do recebimento via e-mail a reserva estará confirmada. Havendo necessidade de cancelamento ou alteração da data da reserva, o cliente deverá comunicar por escrito a Pousada, não sendo aceitos cancelamento ou alteração por telefone. O cancelamento ou alteração de datas estará sujeito à cobrança de taxas conforme as condições abaixo. O saldo de pagamento das diárias será cobrado no check-in. Adiantamento de diárias não abatem extras no  check-out.     <p></p>
  
 Alteração de datas de reserva:     <p></p>
  
 Não será cobrada taxa de transferência de data, somente a eventual diferença de preço entre um período e outro, observando-se os seguintes prazos limites: - 15 dias de antecedência da data de entrada para baixa temporada. - 30 dias de antecedência da data de entrada para alta temporada. Obs.: Sempre de acordo com a disponibilidade de vagas da pousada (não serão efetuadas alterações em pacotes de Natal, Reveillon e Carnaval).     <p></p>
  
 Cancelamento de reserva:     <p></p>
  
 Alta temporada (Começo de Novembro à Final de Março)     <p></p>
  
 Considerando o início do pacote ou diária, o valor pago será restituído da seguinte forma:     <p></p>
  
 •       até 45  dias antecedentes a entrada, a devolução será integral,com multa no valor de uma diária.     <p></p>
  
 •       até 30 dias  antecedentes a entrada, multa no valor de uma diária com relocação de crédito para outro período disponível.     <p></p>
  
 •       até 15 dias  antecedentes ao início da entrada, e pacotes de feriado, Natal, Reveillon, perda total do crédito.     <p></p>
  
  
 Cancelamento de reserva para grupos e eventos:     <p></p>
  
 Solicitações com até 30 dias antecedentes ao início do pacote, estarão sujeitas a incidência de multa de 10% do valor pago. Ultrapassando este 
  
 prazo, a cobrança será feita da seguinte forma:     <p></p>
  
 •       entre 29 e 21 dias antecedentes ao início do pacote, será restituído 80% do valor pago.     <p></p>
  
 •       entre 20 e 07 dias antecedentes ao início do pacote, será restituído 60% do valor pago.     <p></p>
  
 •       06 dias antecedentes ao início do pacote, NÃO HAVERÁ RESTITUIÇÃO DO VALOR PAGO.     <p></p>
  
  
 Desistência sem cancelamento - "no show":     <p></p>
  
 O não comparecimento sem comunicação prévia por escrito, na data prevista de chegada, será considerado "no show" (desistência sem cancelamento). A vaga permanecerá disponível por 24 horas, a partir do horário de entrada. Após este período a reserva será cancelada (com retenção de 100% do valor pago ), disponibilizando a vaga para outro interessado. NÃO HAVERÁ RESTITUIÇÃO DO VALOR PAGO.     <p></p>
  
 Desistência após a entrada:     <p></p>
  
 A desistência de estada na chegada ou após a entrada na Pousada, como também a saída antecipada por qualquer motivo NÃO DARÁ DIREITO A QUALQUER TIPO DE RESTITUIÇÃO, REEMBOLSO EM DINHEIRO OU CRÉDITO EM NOVAS DIÁRIAS, acarretando a perda total da quantia paga pelo pacote ou diária. <p></p>
      </HomeText>

      <WelcomeImage src={pousada1Image} alt="Bem-vindo à Pousada Pinheira"  />
    
    </HomeSection>

    
  );
}

export default About;
