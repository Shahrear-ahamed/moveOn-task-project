import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import Product from "./Pages/Product";
import { reducer } from "./reducer/reducer";

export const ProductContext = createContext();
const initialState = {
  isLoading: true,
  prices: [],
  colors: [],
  sizes: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios("Product.json").then((res) =>
      dispatch({
        isLoading: false,
        prices: res.skus,
        colors: res.props[0],
        sizes: res.props[1],
      })
    );
  }, []);
  return (
    <ProductContext.Provider value={state}>
      <>
        <Product />
      </>
    </ProductContext.Provider>
  );
}

export default App;
