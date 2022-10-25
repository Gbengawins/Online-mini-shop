import { createSlice } from '@reduxjs/toolkit';
import { Toast } from 'react-toastify';




const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart (state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[ itemIndex ].cartQuantity += 1;
                toast.info("increased cart quantity", {
                    position: "bottom-left",
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success("Added a new product to cart", {
                    position: "bottom-right",
                });
            },
        },
    }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;