import React from 'react';
import styled from 'styled-components';
import finalYearPackage from '../assets/final_year_package.jpg';

import carnivalPackage from '../assets/carnival_package.jpg';

const Packages = () => {
  return (
    <PackagesContainer>
      <Package>
        <img src={finalYearPackage} alt="Pacote de Final de Ano" />
        <h3>Pacote de Final de Ano</h3>
        <p>Desfrute de uma virada de ano inesquecível na Pousada Pinheira!</p>
      </Package>
     
      <Package>
        <img src={carnivalPackage} alt="Pacote de Carnaval" />
        <h3>Pacote de Carnaval</h3>
        <p>Curta o carnaval com muito conforto e diversão na Pousada Pinheira!</p>
      </Package>
    </PackagesContainer>
  );
};

const PackagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const Package = styled.div`
  width: 30%;
  text-align: center;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  h3 {
    margin-top: 10px;
    color: #333;
  }
  p {
    color: #666;
  }
`;

export default Packages;
