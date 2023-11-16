import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto_clicado = action.payload

      if (state.itens.find((p) => p.id === produto_clicado.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== produto_clicado.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(produto_clicado)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
