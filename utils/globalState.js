import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext({
  products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
    selectedRescueValue: {},
    rescues: []
});


const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
    selectedRescueValue: {},
    rescues: []
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
