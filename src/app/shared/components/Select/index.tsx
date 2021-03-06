import styled from 'styled-components';

export const Select = styled.select`
  border: 1px solid #ccc;
  border-radius: 25px;
  display: block;
  height: 50px;

  margin-bottom: 8px;
  padding: 10px 20px;
  width: 100%;

  &[disabled] {
    opacity: 0.3;
  }
  &:focus {
    outline: none !important;
    border-radius: 25px;
    border: 1px solid #2d6133;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
