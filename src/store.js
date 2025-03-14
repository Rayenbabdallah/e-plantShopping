import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Correct import

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
 
export default store;