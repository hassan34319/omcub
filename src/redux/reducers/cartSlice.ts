import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type itemType = {
    id: string,
    uid: string,
    title: string,
    description: string,
    image: string,
    printUrl: string,
    price: number,
    quantity: number,
    totalPrice: number
}

type initialStateType = {
    isOpen: boolean,
    count: number,
    items: itemType[]
}

const initialState: initialStateType = {
    isOpen: false,
    count: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        addItem: (state, action) => {
            state.items.push(action.payload)
            state.count += 1
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
            state.count -= 1
        },
        increaseCount: (state, action) => {
            const index = state.items.findIndex(item => item?.uid === action.payload)
            state.items[index].quantity += 1
            state.items[index].totalPrice += state.items[index].price
        },
        decreaseCount: (state, action) => {
            const index = state.items.findIndex(item => item.uid === action.payload)
            if (state.items[index].quantity === 1) {
                state.items = state.items.filter(item => item.uid !== action.payload)
                state.count -= 1
                return
            }
            state.items[index].quantity -= 1
            state.items[index].totalPrice -= state.items[index].price
        },
        resetCart: (state) => {
            state.count = 0
            state.items = []
        }
        // calculateTotal: (state) => {
        //     let total = 0
        //     state.items.forEach(item => {
        //         total += item.totalPrice
        //     })
        //     return total
        // }
}})

export const { toggleCart, addItem, removeItem, increaseCount, decreaseCount, resetCart } = cartSlice.actions;
export default cartSlice.reducer;