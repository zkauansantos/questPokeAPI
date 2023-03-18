import styled from 'styled-components';

export const SectionInfo = styled.section`
  background-color: ${({theme}) => theme.backgroundMain };
  color: ${({theme}) => theme.color === '#333652' ? '#333652' : '#FFF'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const ContainerPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;

  img {
    width: 100%;
    border-bottom: 3px solid  rgb(250, 199, 5);

    @media screen and (max-width: 1024px) {
      width: 65%;
    }
  }

  h2 {
    color: ${({theme}) => theme.cardColor};
    text-transform: uppercase;
    letter-spacing: 10px;
    font-size: 30px;
    margin-top: 10px;

    @media screen and (max-width: 700px) {
      font-size: 22px;
    }
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center ;
  gap: 20px;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerMoves = styled.div`
  border-radius: 8px;
  border: ${({theme}) => theme.borderCardAndButton};
  padding: 15px;

  strong {
    color: rgb(250, 199, 5);
    font-size: 20px;
  }

  div {
    margin-top: 8px;
    max-width: 650px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerType = styled.div`
  border: ${({theme}) => theme.borderCardAndButton};
  border-radius: 8px;
  padding: 8px 16px;

  strong {
    color: rgb(250, 199, 5);
    font-size: 20px;
  }

  div {
    margin-top: 8px;

    p:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const ContainerAbilities = styled.div`
  border: ${({theme}) => theme.borderCardAndButton};
  border-radius: 8px;
  padding: 8px 16px;

  strong {
    color: rgb(250, 199, 5);
    font-size: 20px;
    margin-bottom: 8px;
  }

  .description {
    p:first-child {
      ::first-letter {
        text-transform: uppercase;
      }

      color: #333652;
      font-size: 16px;
      font-weight: bold;
      margin-top: 8px;
    }

    span {
      font-size: 14px;
    }

  }
`;

