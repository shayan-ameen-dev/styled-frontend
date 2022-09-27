import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledCartWrapper = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 100vh;
  justify-content: flex-end;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const StyledCart = styled(motion.div)`
  background: #f1f1f1;
  overflow-y: auto;
  padding: 2rem 5rem;
  position: relative;
  width: 30%;
`;

export const StyledCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0;

  img {
    width: 8rem;
  }
`;

export const StyledCardInfo = styled(motion.div)`
  width: 50%;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledEmptyCart = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;

  h1 {
    font-size: 2rem;
    padding: 2rem;
  }

  svg {
    color: var(--secondary);
    font-size: 10rem;
  }
`;

export const StyledCheckout = styled(motion.div)`
  button {
    background: var(--primary);
    color: white;
    margin-top: 2rem;
    padding: 1rem 2rem;
    width: 100%;
  }
`;

export const StyledCards = styled(motion.div)``;
