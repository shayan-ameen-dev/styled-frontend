import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledProduct = styled(motion.div)`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  position: relative;

  img {
    cursor: pointer;
    width: 100%;
  }

  h2 {
    padding: 0.5rem 0;
  }
`;
