import { useState } from "react";

export default function PokemonForm({ pokemon, onSave, onClose }) {
    const [nom, setNom] = useState(pokemon ? pokemon.name : '')
    const [types, setTypes] = useState(pokemon ? pokemon.types.join(', ') : '')

    const allTypes = [
        'fire', 'water', 'grass', 'electric', 'psychic',
        'ice', 'dragon', 'dark', 'fairy', 'fighting',
        'poison', 'ground', 'flying', 'bug', 'rock',
        'ghost', 'steel', 'normal'
    ]

    const handleSave = () => {
        if (!nom.trim()) {
            alert('Le nom est obligatoire !')
            return
        }

        const typesArray = types
            .split(',')
            .map(t => t.trim())
            .filter(t => allTypes.includes(t))

        if (typesArray.length == 0) {
            alert('Ajoute au moins un type valide !')
            return
        }

        const updatedPokemon = {
            ...pokemon,
            name: nom.trim(),
            types: typesArray,
        }

        onSave(updatedPokemon)
        onClose()
    }

    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-accent)' }}
                className="rounded-2xl p-6 w-full max-w-md"
                onClick={e => e.stopPropagation()}>
                <h2 style={{ color: 'var(--color-title)' }} className="text-xl font-bold mb-6">
                    {pokemon ? 'Modifier le Pokémon' : 'Ajouter un Pokémon'}
                </h2>
                <div className="mb-4">
                    <label style={{ color: 'var(--color-muted)' }} className="text-sm block mb-1">
                        Nom
                    </label>
                    <input
                        type="text"
                        value={nom}
                        onChange={e => setNom(e.target.value)}
                        placeholder="Ex: Pikachu"
                        style={{
                            backgroundColor: 'var(--color-bg)',
                            border: '1px solid var(--color-accent)',
                            color: 'var(--color-text)',
                        }}
                        className="w-full rounded-xl p-3 outline-none text-sm"
                    />
                </div>
                <div className="mb-6">
                    <label style={{ color: 'var(--color-muted)' }} className="text-sm block mb-1">
                        Types (séparés par des virgules)
                    </label>
                    <input
                        type="text"
                        value={types}
                        onChange={e => setTypes(e.target.value)}
                        placeholder="Ex: fire, flying"
                        style={{
                            backgroundColor: 'var(--color-bg)',
                            border: '1px solid var(--color-accent)',
                            color: 'var(--color-text)',
                        }}
                        className="w-full rounded-xl p-3 outline-none text-sm"
                    />
                    <p style={{ color: 'var(--color-muted)' }} className="text-xs mt-1">
                        Types valides : {allTypes.join(', ')}
                    </p>
                </div>

                <div className="flex gap-3">

                    <button
                        onClick={onClose}
                        style={{ border: '1px solid var(--color-accent)', color: 'var(--color-accent)' }}
                        className="flex-1 py-2 rounded-xl text-sm font-bold"
                    >
                        Annuler
                    </button>

                    <button
                        onClick={handleSave}
                        style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
                        className="flex-1 py-2 rounded-xl text-sm font-bold"
                    >
                        Sauvegarder
                    </button>

                </div>
            </div>
        </div>
    )
}