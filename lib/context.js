import { createContext, useContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  function addProductToCart(attributes, quantity) {
    // Reset Quantity
    setQuantity(1);

    // Update Total
    setTotalQuantity((prevState) => prevState + quantity);

    // Update Price
    setTotalPrice((prevState) => prevState + attributes.price * quantity);

    // Add to Cart
    const itemExist = cartItems.find((item) => item.slug === attributes.slug);

    if (itemExist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === attributes.slug
            ? { ...itemExist, quantity: itemExist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...attributes, quantity: quantity }]);
    }
  }

  function removeProductFromCart(attributes, quantity) {
    // Reset Quantity
    setQuantity(1);

    // Update Quantity
    setTotalQuantity((prevState) => prevState - quantity);

    // Update Price
    setTotalPrice((prevState) => prevState - attributes.price * quantity);

    // Remove From Cart
    const itemExist = cartItems.find((item) => item.slug === attributes.slug);

    if (itemExist.quantity - quantity < 1) {
      setCartItems(cartItems.filter((item) => item.slug !== attributes.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === attributes.slug
            ? { ...itemExist, quantity: itemExist.quantity - quantity }
            : item
        )
      );
    }
  }

  function incrementQuantity() {
    setQuantity((prevQuantity) => ++prevQuantity);
  }

  function decrementQuantity() {
    setQuantity((prevQuantity) => {
      if (prevQuantity === 1) return prevQuantity;
      return --prevQuantity;
    });
  }

  return (
    <ShopContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        addProductToCart,
        removeProductFromCart,
        totalQuantity,
        setTotalQuantity,
        totalPrice,
        setTotalPrice,
        quantity,
        setQuantity,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
