export default function PokemonCard({ pokemon, onClick }) {

  const typeColors = {
    fire:     '#FF7C00',
    water:    '#3399FF',
    grass:    '#4CAF50',
    electric: '#FFD700',
    psychic:  '#FF5F9E',
    ice:      '#52D8E8',
    dragon:   '#6B35DE',
    dark:     '#9B7B6E',
    fairy:    '#F469A9',
    fighting: '#C03028',
    poison:   '#A040A0',
    ground:   '#C8A95A',
    flying:   '#7BA8E8',
    bug:      '#7BC820',
    rock:     '#B8A038',
    ghost:    '#705898',
    steel:    '#B8B8D0',
    normal:   '#A8A878',
  }

  const primaryType = pokemon.types[0]

  const typeColor = typeColors[primaryType] || '#7C3AED'

  return (
    <div
      onClick={onClick} 
      style={{
        background: `linear-gradient(135deg, ${typeColor}22, ${typeColor}11)`,
        border: `1px solid ${typeColor}44`, 
        boxShadow: `0 4px 24px ${typeColor}22`,
        backdropFilter: 'blur(10px)',            
        WebkitBackdropFilter: 'blur(10px)',      
      }}
      className="rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden relative group"
    >

      <div
        style={{ backgroundColor: `${typeColor}22` }} 
        className="absolute -right-8 -top-8 w-36 h-36 rounded-full transition-all duration-300 group-hover:scale-125"
      />
      <div
        style={{ backgroundColor: `${typeColor}15` }}
        className="absolute -left-4 -bottom-4 w-24 h-24 rounded-full"
      />

      <div className="relative pt-5 px-4 flex justify-between items-start">

        <p
          style={{ color: `${typeColor}99` }} 
          className="text-xs font-black"
        >
          #{String(pokemon.id).padStart(3, '0')}
        </p>

        <img
          src={pokemon.image}
          alt={pokemon.name}
          style={{
            filter: `drop-shadow(0 8px 16px ${typeColor}66)`, 
          }}
          className="w-28 h-28 object-contain -mt-6 -mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
        />

      </div>

      <div className="px-4 pb-4">

        <h3 className="text-white font-black capitalize text-sm mb-2">
          {pokemon.name}
        </h3>

        <div className="flex gap-1 flex-wrap">
          {pokemon.types.map(type => (
            <span
              key={type}
              style={{
                backgroundColor: `${typeColors[type]}33`, 
                color: typeColors[type],                  
                border: `1px solid ${typeColors[type]}66`,
              }}
              className="text-xs px-2 py-0.5 rounded-full capitalize font-bold"
            >
              {type}
            </span>
          ))}
        </div>

      </div>

    </div>
  )
}