export default function PokemonCard({ pokemon }) { 
  return (
    <div style={{
           backgroundColor: 'var(--color-card)',      
           border: '1px solid var(--color-accent)'    
         }}
         className="rounded-2xl p-4 text-center cursor-pointer transition hover:scale-105">

      <p style={{ color: 'var(--color-muted)' }}
         className="text-sm">
        #{String(pokemon.id).padStart(3, '0')}
      </p>

      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-24 h-24 mx-auto drop-shadow-lg"
      />

      <h3 style={{ color: 'var(--color-text)' }}
          className="font-bold capitalize mt-2">
        {pokemon.name}
      </h3>

      <div className="flex justify-center gap-1 mt-2">

        {pokemon.types.map(type => (
          <span key={type}
                style={{ backgroundColor: 'var(--color-accent)' }} 
                className="text-white text-xs px-2 py-0.5 rounded-full capitalize">
            {type}
          </span>
        ))}
      </div>
    </div>
  )
}