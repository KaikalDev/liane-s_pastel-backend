import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ProductsListData from '../../data/json/Sabores.json'

type Products = {
  ProductsList: Product[]
  cart: ProductCart[]
  ProductTypes: string[]
}

const initialState: Products = {
  ProductsList: ProductsListData.ProductsList,
  cart: [],
  ProductTypes: [
    'sabores_tradicionais',
    'sabores_doces',
    'sabores_especiais',
    'bebidas'
  ]
}

const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const newItem = state.ProductsList.find((p) => p.id === action.payload)

      if (newItem) {
        const id_Cart =
          state.cart.length === 0
            ? 1
            : Math.max(...state.cart.map((item) => item.id_Cart)) + 1 // Pega o maior id_Cart e soma 1
        const itemWithId = { ...newItem, id_Cart }
        state.cart.push(itemWithId)
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id_Cart !== action.payload)
    }
  }
})

export const { addToCart, removeFromCart } = CartSlice.actions
export default CartSlice.reducer
