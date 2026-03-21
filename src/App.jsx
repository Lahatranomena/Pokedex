import { usePokemon } from './hooks/usePokemon'
import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
import SearchBar from './components/SearchBar'
import TypeFilter from './components/TypeFilter'
import PokemonModal from './components/PokemonModal'
import Toast from './components/Toast'

export default function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [toast, setToast] = useState(null)

  const { pokemons, loading, error, search, setSearch, allTypes, selectedTypes, toggleType, updatePokemon, deletePokemon, } = usePokemon()

  if (loading) {
    return (
      <div style={{ backgroundColor: 'var(--color-bg)' }}
        className="min-h-screen flex items-center justify-center">
        <p style={{ color: 'var(--color-title)' }} className="text-xl">
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

      <SearchBar search={search} setSearch={setSearch} />

      <TypeFilter
        types={allTypes}
        selectedTypes={selectedTypes}
        toggleType={toggleType}
      />

      <p style={{ color: 'var(--color-muted)' }} className="text-sm mb-4">
        {pokemons.length} Pokémon trouvé{pokemons.length !== 1 ? 's' : ''}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => setSelectedPokemon(pokemon)}
          />
        ))}
      </div>

      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
          onDelete={(id) => {
            deletePokemon(id)                          
            setSelectedPokemon(null)                   
            setToast('🗑️ Pokémon supprimé !')         
          }}
          onUpdate={(updated) => {
            updatePokemon(updated)                          
            setSelectedPokemon(updated)                    
            setToast('✅ Pokémon modifié avec succès !')   
          }}
        />
      )}

      {toast && (
        <Toast
          message={toast}
          onClose={() => setToast(null)} 
        />
      )}
    </div>
  )
}