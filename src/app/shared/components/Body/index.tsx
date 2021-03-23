import styled from 'styled-components';

export const Body = styled.section`
  text-align: center;
  background-color: white;
  display: flex;
  justify-content: center;
  aling-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
