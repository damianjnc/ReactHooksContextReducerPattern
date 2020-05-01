import React, { useContext } from "react";
import { StoreContext } from "./store";

const Fruits = () => {
  const [state, dispatch] = useContext(StoreContext);

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_FRUIT",
            payload: "banana"
          })
        }
      >
        Add Banana
      </button>
      <ul>
        {state.fruits.map(fruit => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
