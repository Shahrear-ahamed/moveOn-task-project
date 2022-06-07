import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import "./App.css";
import Product from "./Pages/Product";
import { reducer } from "./reducer/reducer";

export const ProductContext = createContext();
const initialState = {
  isLoading: true,
  title: "",
  img: "",
  prices: [],
  colors: [],
  sizes: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios(
      "https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product"
    ).then((res) => {
      dispatch({
        type: "GET_DATA",
        payload: {
          isLoading: false,
          title: res.data.title,
          img: res.data.image,
          prices: res.data.variation.skus,
          colors: res.data.variation.props[0].values,
          sizes: res.data.variation.props[1].values,
        },
      });
    });
  }, []);
  if (state.isLoading) {
    return <p>Loading</p>;
  }
  return (
    <ProductContext.Provider value={state}>
      <>
        <Product />
      </>
    </ProductContext.Provider>
  );
}

export default App;
