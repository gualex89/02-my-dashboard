'use client'
import React from 'react'
import { PokemonGrid } from '.'
import { useSelector } from 'react-redux'




export const FavoritePokemons = () => {

  const favorites = useSelector((state) => state.pokemonReducer) 


  const arrayFavorites =(Object.values(favorites))

  return (
    <PokemonGrid pokemons={arrayFavorites} />
  )
}
