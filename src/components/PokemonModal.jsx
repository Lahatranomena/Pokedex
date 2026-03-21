import { useState } from 'react'
import PokemonForm from './PokemonForm'

export default function PokemonModal({ pokemon, onClose, onDelete, onUpdate }) {

    const [showForm, setShowForm] = useState(false)

    const typeColors = {
        fire: '#FF7C00',
        water: '#3399FF',
        grass: '#4CAF50',
        electric: '#FFD700',
        psychic: '#FF5F9E',
        ice: '#52D8E8',
        dragon: '#6B35DE',
        dark: '#4a3728',
        fairy: '#F469A9',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#C8A95A',
        flying: '#7BA8E8',
        bug: '#7BC820',
        rock: '#B8A038',
        ghost: '#705898',
        steel: '#B8B8D0',
        normal: '#A8A878',
    }

    const handleDelete = () => {
        if (window.confirm(`Supprimer ${pokemon.name} ?`)) {
            onDelete(pokemon.id)
            onClose()
        }
    }

    return (

        <div
            style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
        >

            <div
                style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-accent)' }}
                className="rounded-2xl p-6 w-full max-w-sm"
                onClick={e => e.stopPropagation()}
            >

                <p style={{ color: 'var(--color-muted)' }} className="text-sm text-center">
                    #{String(pokemon.id).padStart(3, '0')}
                </p>

                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-32 h-32 mx-auto drop-shadow-lg"
                />

                <h2 style={{ color: 'var(--color-title)' }}
                    className="text-2xl font-bold text-center capitalize mt-2">
                    {pokemon.name}
                </h2>

                <div className="flex justify-center gap-2 mt-3">
                    {pokemon.types.map(type => (
                        <span
                            key={type}
                            style={{ backgroundColor: typeColors[type], color: '#fff' }}
                            className="px-3 py-1 rounded-full text-xs font-bold capitalize"
                        >
                            {type}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 mt-6">

                    <button
                        onClick={() => setShowForm(true)}
                        style={{ border: '1px solid var(--color-accent)', color: 'var(--color-accent)' }}
                        className="flex-1 py-2 rounded-xl text-sm font-bold"
                    >
                        ✏️ Modifier
                    </button>

                    <button
                        onClick={handleDelete}
                        style={{ backgroundColor: '#C03028', color: '#fff' }}
                        className="flex-1 py-2 rounded-xl text-sm font-bold"
                    >
                        🗑️ Supprimer
                    </button>

                </div>

                <button
                    onClick={onClose}
                    style={{ color: 'var(--color-muted)' }}
                    className="w-full mt-3 text-sm"
                >
                    Fermer
                </button>

            </div>

            {showForm && (
                <PokemonForm
                    pokemon={pokemon}
                    onSave={onUpdate}
                    onClose={() => setShowForm(false)}
                />
            )}

        </div>
    )
}