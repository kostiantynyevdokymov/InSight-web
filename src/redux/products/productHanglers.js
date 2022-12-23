export const handleLoadProducts = (state, action) => {
  console.log('state, action, handleLoadProducts', state, action)
  state.products.items = action.payload;
};
