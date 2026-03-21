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
        dark: '#9B7B6E',
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

    const typeGradients = {
        fire: 'linear-gradient(135deg, #FF7C00, #C03028)',
        water: 'linear-gradient(135deg, #3399FF, #0066CC)',
        grass: 'linear-gradient(135deg, #4CAF50, #2E7D32)',
        electric: 'linear-gradient(135deg, #FFD700, #FF8C00)',
        psychic: 'linear-gradient(135deg, #FF5F9E, #C2185B)',
        ice: 'linear-gradient(135deg, #52D8E8, #0097A7)',
        dragon: 'linear-gradient(135deg, #6B35DE, #311B92)',
        dark: 'linear-gradient(135deg, #4a3728, #212121)',
        fairy: 'linear-gradient(135deg, #F469A9, #AD1457)',
        fighting: 'linear-gradient(135deg, #C03028, #7B0000)',
        poison: 'linear-gradient(135deg, #A040A0, #6A1B9A)',
        ground: 'linear-gradient(135deg, #C8A95A, #8D6E63)',
        flying: 'linear-gradient(135deg, #7BA8E8, #1565C0)',
        bug: 'linear-gradient(135deg, #7BC820, #558B2F)',
        rock: 'linear-gradient(135deg, #B8A038, #6D4C41)',
        ghost: 'linear-gradient(135deg, #705898, #311B92)',
        steel: 'linear-gradient(135deg, #B8B8D0, #546E7A)',
        normal: 'linear-gradient(135deg, #A8A878, #616161)',
    }

    const primaryType = pokemon.types[0]
    const typeColor = typeColors[primaryType] || '#7C3AED'
    const gradient = typeGradients[primaryType] || 'linear-gradient(135deg, #7C3AED, #311B92)'

    const handleDelete = () => {
        if (window.confirm(`Supprimer ${pokemon.name} ?`)) {
            onDelete(pokemon.id)
            onClose()
        }
    }

    return (
        <div
            style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                style={{
                    background: 'transparent',
                    border: `1px solid ${typeColor}44`,
                    boxShadow: `0 20px 60px ${typeColor}33`,
                    maxWidth: '380px',
                    width: '100%',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                }}
                className="rounded-3xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                <div
                    style={{
                        background: `linear-gradient(135deg, ${typeColor}44, ${typeColor}22)`,
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                    }}
                    className="relative pt-6 pb-16 flex flex-col items-center"
                >
                    <div
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                        className="absolute -right-8 -top-8 w-36 h-36 rounded-full"
                    />
                    <div
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                        className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full"
                    />
                    <p className="text-white/60 text-sm font-black relative z-10">
                        #{String(pokemon.id).padStart(3, '0')}
                    </p>
                    <img
                        src={pokemon.image}
                        alt={pokemon.name}
                        style={{ filter: `drop-shadow(0 8px 24px ${typeColor}88)` }}
                        className="w-40 h-40 object-contain relative z-10 -mb-12"
                    />
                </div>

                <div
                    style={{
                        backgroundColor: 'rgba(13, 13, 26, 0.85)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                    }}
                    className="pt-14 px-6 pb-6"
                >
                    <h2
                        style={{ color: typeColor }}
                        className="text-2xl font-black text-center capitalize mb-3"
                    >
                        {pokemon.name}
                    </h2>

                    <div className="flex justify-center gap-2 mb-6">
                        {pokemon.types.map(type => (
                            <span
                                key={type}
                                style={{
                                    backgroundColor: `${typeColors[type]}33`,
                                    color: typeColors[type],
                                    border: `1px solid ${typeColors[type]}66`,
                                }}
                                className="px-3 py-1 rounded-full text-xs font-bold capitalize"
                            >
                                {type}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 mb-3">
                        <button
                            onClick={() => setShowForm(true)}
                            style={{
                                border: `1px solid ${typeColor}`,
                                color: typeColor,
                                backgroundColor: `${typeColor}11`,
                            }}
                            className="flex-1 py-3 rounded-2xl text-sm font-bold transition hover:opacity-80"
                        >
                            ✏️ Modifier
                        </button>
                        <button
                            onClick={handleDelete}
                            style={{ backgroundColor: '#C03028' }}
                            className="flex-1 py-3 rounded-2xl text-sm font-bold text-white transition hover:opacity-80"
                        >
                            🗑️ Supprimer
                        </button>
                    </div>

                    <button
                        onClick={onClose}
                        style={{ color: 'var(--color-muted)' }}
                        className="w-full text-sm hover:text-white transition"
                    >
                        Fermer
                    </button>
                </div>
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