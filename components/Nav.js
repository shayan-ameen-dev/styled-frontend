import Link from 'next/link';
// Context
import { useShopContext } from '../lib/context';
// Components
import Cart from './Cart';
// Styled
import { StyledNav, StyledNavItems } from '../styles/StyledNav';
// Motion
import { AnimatePresence, motion } from 'framer-motion';
// icons
import { FiShoppingBag } from 'react-icons/fi';

export default function Nav() {
  const { isCartOpen, setIsCartOpen, totalQuantity } = useShopContext();

  return (
    <StyledNav>
      <Link href={'/'}>Styled.</Link>
      <StyledNavItems>
        <div onClick={() => setIsCartOpen(true)}>
          {totalQuantity > 0 && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
              {totalQuantity}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </StyledNavItems>
      <AnimatePresence>{isCartOpen && <Cart />}</AnimatePresence>
    </StyledNav>
  );
}
