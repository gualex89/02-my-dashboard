import { FavoritePokemons, PokemonGrid } from "@/pokemons/components";
import Image from "next/image";



export const metadata = {
  title: 'Favoritos',
  description: 'lorem ipsum, dolor sit amet consectetur adipisicing elit',
};



export default async function NamePage() {

  
  
  

  return (
    <div className="felx flex-col">
      <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
      
      <FavoritePokemons />
      
    </div>
  );
}