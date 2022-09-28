import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledSuccessWrapper = styled(motion.div)`
  margin: 3rem 7rem 0;
`;

export const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 2rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
  }
`;

export const StyledInfoWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
  width: 100%;
`;

export const StyledAddress = styled(motion.div)`
  font-size: 1rem;
`;

export const StyledProductInfo = styled(motion.div)`
  font-size: 1rem;

  div {
    padding-bottom: 1rem;
  }
`;
