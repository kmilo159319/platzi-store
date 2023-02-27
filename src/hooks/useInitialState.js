import axios from 'axios';
import { useState, useEffect } from 'react';
import initialState from '../initialState';

//const API = 'https://use-central1-gndx-fake-api.cloudfunctions.net/api';

export const useInitialState = () => {
  const [state, setState] = useState(initialState);
  //const [products, setproducts] = useState(second);

  /*useEffect(async () => {
    
  const response = await axios(API);
  setproducts(response.data);
  }, []);
  */

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    //products,
    state,
  };
};
