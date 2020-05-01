import React, { createContext, useReducer } from "react";

export const StoreContext = createContext({});

const initialState = { fruits: ["plum"] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return { fruits: [...state.fruits, action.payload] };

    case "ADD_VEGETABLE":
      return { vegetable: [...state.vegetables, action.payload] };

    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
