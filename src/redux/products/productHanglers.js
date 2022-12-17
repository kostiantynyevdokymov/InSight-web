export const handleLoadProducts = (state, action) => {
  state.products.items = action.payload;
};
