export default function SearchBar({ search, setSearch }) {

  return (
    <div className="relative mb-6">

      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5"
          style={{ color: 'var(--color-accent)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Rechercher un Pokémon..."
        style={{
          backgroundColor: 'rgba(124, 58, 237, 0.08)',
          border: '1px solid rgba(124, 58, 237, 0.3)',
          color: 'var(--color-text)',
          backdropFilter: 'blur(10px)',
        }}
        className="w-full pl-12 pr-12 py-4 rounded-2xl outline-none text-sm transition-all duration-300 focus:border-purple-500"
      />

      {search && (
        <button
          onClick={() => setSearch('')}
          style={{ color: 'var(--color-muted)' }}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-white transition"
        >
          ✕
        </button>
      )}

    </div>
  )
}