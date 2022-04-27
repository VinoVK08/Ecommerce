import React, { createContext, useState } from "react";

// Create two context:
// CartContext: to query the context state
// CartDispatchContext: to mutate the context state
const CartContext = createContext(undefined);
const CartDispatchContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function CartProvider({ children }) {
  const [CartDetails, setCartDetails] = useState([]);

  return (
    <CartContext.Provider value={CartDetails}>
      <CartDispatchContext.Provider value={setCartDetails}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext, CartDispatchContext };