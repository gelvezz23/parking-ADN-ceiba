import styled from 'styled-components';

export const LeftSideblock = styled.section`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  width: 30%;
  justify-content: center;
  text-align: center;
  border-radius: 25px;
  height: 100%;
  padding: 10px;

  &form {
    width: 5%;
    justify-content: center;
  }
  @media (max-width: 1200px) {
    width: 70%;
    justify-content: center;
  }
  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
