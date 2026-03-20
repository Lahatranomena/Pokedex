export default function TypeFilter({ types, selectedTypes, toggleType}) {
    const typeColors = {
        fire:     '#FF7C00', 
    water:    '#3399FF', 
    grass:    '#4CAF50', 
    electric: '#FFD700', 
    psychic:  '#FF5F9E', 
    ice:      '#52D8E8',
    dragon:   '#6B35DE', 
    dark:     '#4a3728', 
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

     return (
    <div className="flex flex-wrap gap-2 mb-6">

      {types.map(type => {

        const isSelected = selectedTypes.includes(type)

        return (
          <button
            key={type}
            onClick={() => toggleType(type)}
            style={{
              backgroundColor: isSelected ? typeColors[type] : 'var(--color-card)',
              border: `1px solid ${typeColors[type]}`, 
              color: isSelected ? '#fff' : typeColors[type],
              opacity: isSelected ? 1 : 0.7,
            }}
            
            className="rounded-full px-3 py-1 text-xs font-bold capitalize transition hover:opacity-100"
          >
            {type}
          </button>
        )
      })}

    </div>
  )
}