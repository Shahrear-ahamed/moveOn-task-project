export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        isLoading: false,
        title: action.payload.title,
        img: action.payload.img,
        prices: action.payload.prices,
        colors: action.payload.colors,
        sizes: action.payload.sizes,
      };

    default:
      break;
  }
  return state;
};
