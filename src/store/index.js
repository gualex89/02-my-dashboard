import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter/counterSlice'
import pokemonReducer from './pokemons/pokemonsSlice'

export const store = configureStore({
  reducer: {
    counterReducer,
    pokemonReducer
  },
})

