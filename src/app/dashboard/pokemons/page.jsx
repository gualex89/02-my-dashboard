import { PokemonGrid } from "@/pokemons/components";
import Image from "next/image";

const getpokemons = async (limit = 20, offset = 0) => {

  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json());

    const pokemons = data.results.map(pokemon => {
      return {
        id: pokemon.url.split('/').at(-2),
        name: pokemon.name,
        url: pokemon.url
      }
    })

    /* throw new Error('Esto es un error que no deberia suceder'); */

    return pokemons;
}


export default async function NamePage() {

  const pokemons = await getpokemons(151);
  
  console.log(pokemons)

  return (
    <div className="felx flex-col">
      <span className="text-5xl my-2">Listado de Pokemons <small>estático</small></span>
      
      <PokemonGrid pokemons={pokemons} />
      
    </div>
  );
}