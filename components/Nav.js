import Link from 'next/link';
// Components
import Cart from './Cart';
// Styled
import { StyledNav, StyledNavItems } from '../styles/StyledNav';
// icons
import { FiShoppingBag } from 'react-icons/fi';
// Context
import { useShopContext } from '../lib/context';

export default function Nav() {
  const { isCartOpen, setIsCartOpen, totalQuantity } = useShopContext();

  return (
    <StyledNav>
      <Link href={'/'}>Styled.</Link>
      <StyledNavItems>
        <div onClick={() => setIsCartOpen(true)}>
          {totalQuantity > 0 && <span>{totalQuantity}</span>}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </StyledNavItems>
      {isCartOpen && <Cart />}
    </StyledNav>
  );
}
