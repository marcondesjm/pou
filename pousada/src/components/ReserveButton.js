// src/components/ReserveButton.js
import React from 'react';
import styled from 'styled-components';

const ReserveButton = () => {
  return (
    <ButtonWrapper>
      <a href="https://wa.me/5548999720998?text=Oi,%20estou%20em%20seu%20site%20e%20gostaria%20de%20fazer%20uma%20reserva" target="_blank" rel="noopener noreferrer">
        Reserve Agora
      </a>
    </ButtonWrapper>
  );
};

export default ReserveButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  a {
    background-color: #007b5e;
    color: white;
    padding: 15px 30px;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #005f47;
    }
  }
`;
