import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 10%;
  width: 150px;
  height: 50px;
  color: ${({theme}) => theme.cardColor};
  background-color: ${({theme}) => theme.backgroundMain};
  border: ${({theme}) => theme.borderCardAndButton};
  font-size: 16px;
  margin-bottom: 20px;

  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;