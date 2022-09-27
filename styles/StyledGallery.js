import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledGallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;
