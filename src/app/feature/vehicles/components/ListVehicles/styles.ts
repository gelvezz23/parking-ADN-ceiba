import styled from 'styled-components';

export const Slot = styled.div`
  position: relative;
  background-color: white;
  margin: 10px;
  width: 120px;
  height: 170px;
  border-radius: 25px;

  -webkit-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3), 0 0 80px rgba(0, 0, 0, 0.1) inset;
`;

export const SlotInfo = styled.div`
  align-items: center;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 5px;
  width: 100%;
  z-indez: 10000;
`;

export const DivContainer = styled.div`
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 25px;
  flex-wrap: wrap;
  text-align: center;
  display: flex;

  width: 100%;
  height: 100%;

  padding: 25px;
`;
