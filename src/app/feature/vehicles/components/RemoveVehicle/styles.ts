import styled from 'styled-components';

export const ButtonExit = styled.button`
  background: #2d6133;
  border-radius: 25px;
  border: 0px;
  color: #fff;
  display: flex;
  margin-top: 36px;
  padding: 5px 15px 5px 15px;
  width: 90px;

  text-aling: center;

  &[disabled] {
    opacity: 0.3;
  }
  &:hover {
    background-color: white;
    color: black;
    -webkit-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3),
      0 0 40px rgba(0, 0, 0, 0.1) inset;
    -moz-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3),
      0 0 40px rgba(0, 0, 0, 0.1) inset;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3), 0 0 80px rgba(0, 0, 0, 0.1) inset;
  }
`;
