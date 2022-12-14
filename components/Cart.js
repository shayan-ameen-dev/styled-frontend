// Context
import { useShopContext } from '../lib/context';
// Stripe
import getStripe from '../lib/getStripe';
// Utils
import { formatMoney, toCapitalize } from '../lib/utils';
// Styled
import {
  StyledCard,
  StyledCardInfo,
  StyledCards,
  StyledCart,
  StyledCartWrapper,
  StyledCheckout,
  StyledEmptyCart,
} from '../styles/StyledCart';
import { StyledQuantity } from '../styles/StyledProductDetails';
// Motion
import { cardAnimation, cardsAnimation } from '../lib/animations';
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

  async function handleCheckout() {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <StyledCartWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsCartOpen(false)}
    >
      <StyledCart
        initial={{ x: '50%' }}
        animate={{ x: '0%' }}
        exit={{ x: '50%' }}
        transition={{ type: 'tween' }}
        onClick={(event) => event.stopPropagation()}
      >
        {cartItems.length < 1 ? (
          <StyledEmptyCart
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1>You have more shopping to do 😜</h1>
            <FaShoppingCart />
          </StyledEmptyCart>
        ) : (
          <StyledCards
            layout
            variants={cardsAnimation}
            initial="hidden"
            animate="show"
          >
            {cartItems.map((item) => {
              const { title, price, slug, image, quantity } = item;
              return (
                <StyledCard layout variants={cardAnimation} key={slug}>
                  <img
                    src={image.data.attributes.formats.thumbnail.url}
                    alt={title}
                  />
                  <StyledCardInfo>
                    <h3>{toCapitalize(title)}</h3>
                    <h3>{formatMoney(price)}</h3>
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
            })}
          </StyledCards>
        )}
        {cartItems.length > 0 && (
          <StyledCheckout layout>
            <h3>Subtotal: {formatMoney(totalPrice)}</h3>
            <button onClick={handleCheckout}>Purchase</button>
          </StyledCheckout>
        )}
      </StyledCart>
    </StyledCartWrapper>
  );
}
