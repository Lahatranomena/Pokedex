import { usePokemon } from './hooks/usePokemon'

import PokemonCard from './components/PokemonCard'

export default function App() {

  const { pokemons, loading, error } = usePokemon()

  if (loading) {
    return (
      <div style={{ backgroundColor: 'var(--color-bg)' }}
           className="min-h-screen flex items-center justify-center">
        <p style={{ color: 'var(--color-title)' }}
           className="text-xl">
          Chargement des Pokémon...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ backgroundColor: 'var(--color-bg)' }}
           className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }}
         className="min-h-screen p-10">

      <h1 style={{ color: 'var(--color-title)' }}
          className="text-3xl font-bold text-center mb-8">
        Pokédex
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}

      </div>

    </div>
  )
}