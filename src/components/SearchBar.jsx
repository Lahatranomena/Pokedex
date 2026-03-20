export default function SearchBar({ search, setSearch }) {
    return (
        <div className="mb-6">
            <input type="text" value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher un Pokémon"
                style={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-accent)',
                    color: 'var(--color-text)',
                }} className="w-full rounded-xl p-5 outline-none text-sm"/>
        </div>
    )
}