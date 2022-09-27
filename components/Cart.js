// Context
import { useShopContext } from '../lib/context';
// Styled
import {
  StyledCard,
  StyledCardInfo,
  StyledCart,
  StyledCartWrapper,
  StyledCheckout,
  StyledEmptyCart,
} from '../styles/StyledCart';
import { StyledQuantity } from '../styles/StyledProductDetails';
// Icons
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

export default function Cart() {
  const {
    setIsCartOpen,
    cartItems,
    addProductToCart,
    removeProductFromCart,
    totalPrice,
  } = useShopContext();

  return (
    <StyledCartWrapper onClick={() => setIsCartOpen(false)}>
      <StyledCart onClick={(event) => event.stopPropagation()}>
        {cartItems.length < 1 ? (
          <StyledEmptyCart>
            <h1>You have more shopping to do 😜</h1>
            <FaShoppingCart />
          </StyledEmptyCart>
        ) : (
          cartItems.map((item) => {
            const { title, price, slug, image, quantity } = item;
            return (
              <StyledCard key={slug}>
                <img
                  src={image.data.attributes.formats.thumbnail.url}
                  alt={title}
                />
                <StyledCardInfo>
                  <h3>{title}</h3>
                  <h3>{price}$</h3>
                  <StyledQuantity>
                    <span>Quantity</span>
                    <button onClick={() => removeProductFromCart(item, 1)}>
                      <AiFillMinusCircle />
                    </button>
                    <p>{quantity}</p>
                    <button onClick={() => addProductToCart(item, 1)}>
                      <AiFillPlusCircle />
                    </button>
                  </StyledQuantity>
                </StyledCardInfo>
              </StyledCard>
            );
          })
        )}
        {cartItems.length > 0 && (
          <StyledCheckout>
            <h3>Subtotal: {totalPrice}$</h3>
            <button>Purchase</button>
          </StyledCheckout>
        )}
      </StyledCart>
    </StyledCartWrapper>
  );
}
