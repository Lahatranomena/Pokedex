import { useState, useEffect } from 'react'

export function usePokemon() {

  const [pokemons, setPokemons] = useState([])  
  const [loading, setLoading] = useState(true)  
  const [error, setError] = useState(null)     
  const [search, setSearch] = useState('')     

  useEffect(() => {
    const fetchPokemons = async () => {
      try {

        const cached = localStorage.getItem('pokemons')
        if (cached) {
          setPokemons(JSON.parse(cached))
          setLoading(false)
          return
        }

        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        const data = await res.json()

        const details = await Promise.all(
          data.results.map(p => fetch(p.url).then(r => r.json()))
        )

        const formatted = details.map(p => ({
          id: p.id,
          name: p.name,
          image: p.sprites.other['official-artwork'].front_default,
          types: p.types.map(t => t.type.name),
        }))

        localStorage.setItem('pokemons', JSON.stringify(formatted)) 
        setPokemons(formatted)
      } catch (e) {
        setError('Erreur lors du chargement des Pokémon')
      } finally {
        setLoading(false)
      }
    }

    fetchPokemons()
  }, [])

  const filtered = pokemons.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )


  return { pokemons: filtered, loading, error, search, setSearch }

}