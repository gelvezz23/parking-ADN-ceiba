import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(RouterLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 1200px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
