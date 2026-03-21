import { useState } from 'react'
import { usePokemon } from './hooks/usePokemon'
import PokemonCard from './components/PokemonCard'
import SearchBar from './components/SearchBar'
import TypeFilter from './components/TypeFilter'
import PokemonModal from './components/PokemonModal'
import Toast from './components/Toast'

export default function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [toast, setToast] = useState(null)

  const { pokemons, loading, error, search, setSearch, allTypes, selectedTypes, toggleType, updatePokemon, deletePokemon } = usePokemon()

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
    <div style={{ backgroundColor: 'var(--color-bg)' }} className="min-h-screen">

      <div
        style={{
          background: 'linear-gradient(180deg, #1a0a2e 0%, #0D0D1A 100%)',
          borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
        }}
        className="py-4 px-10 relative overflow-hidden"
      >
        <div
          style={{ background: 'radial-gradient(circle, #7C3AED22, transparent)' }}
          className="absolute inset-0 pointer-events-none"
        />
        <div className="flex items-center justify-center gap-3">
          <div
            style={{
              background: 'linear-gradient(135deg, #A78BFA, #7C3AED)',
              boxShadow: '0 0 20px #7C3AED66',
            }}
            className="w-10 h-10 rounded-xl flex items-center justify-center"
          >
            <span className="text-xl">⚡</span>
          </div>
          <h1
            style={{
              background: 'linear-gradient(135deg, #A78BFA, #7C3AED, #E879F9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            className="text-3xl font-black tracking-tight"
          >
            Pokédex
          </h1>
        </div>
      </div>

      <div className="px-12 py-8">
        <SearchBar search={search} setSearch={setSearch} />
        <TypeFilter
          types={allTypes}
          selectedTypes={selectedTypes}
          toggleType={toggleType}
        />
        <p style={{ color: 'var(--color-muted)' }} className="text-sm mb-6">
          {pokemons.length} Pokémon trouvé{pokemons.length !== 1 ? 's' : ''}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {pokemons.map(pokemon => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => setSelectedPokemon(pokemon)}
            />
          ))}
        </div>
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