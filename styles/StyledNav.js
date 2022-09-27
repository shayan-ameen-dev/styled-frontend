import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNav = styled(motion.nav)`
  align-items: center;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  min-height: 15vh;

  a {
    font-size: 1.2rem;
  }
`;

export const StyledNavItems = styled(motion.div)`
  align-items: center;
  display: flex;
  justify-content: space-around;

  div {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    position: relative;
  }

  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }

  svg {
    font-size: 1.5rem;
  }

  span {
    align-items: center;
    background: #ff2626;
    border-radius: 50%;
    color: white;
    display: flex;
    font-size: 0.75rem;
    height: 1.3rem;
    justify-content: center;
    position: absolute;
    right: -10%;
    top: -20%;
    width: 1.3rem;
  }
`;
