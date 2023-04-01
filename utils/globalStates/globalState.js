import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext({
  products: [],
  categories: [],
  rescues: [],
  closeCart: function () {},
});

export function GlobalContextProvider (props) {
  const [state, dispatch] = useState ({
    products: [], //prod
    categories: [],
    rescues: []
});
const closeCart = () => {
  // change cart open to false
}
const context = {
  state:state,
  closeCart: closeCart,
  dispatch: dispatch
}
return (
  <StoreContext.Provider value={context}>
    {props.children}
  </StoreContext.Provider>
);
}

export default StoreContext;
