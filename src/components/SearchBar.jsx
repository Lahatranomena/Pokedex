export default function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full max-w-md">

      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400">
        <svg
          className="w-4 h-4"
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
        className="
          w-full
          pl-10 pr-10 py-2.5
          rounded-xl
          bg-[#1f1b2e]
          border border-purple-500/20
          text-white placeholder:text-gray-400
          text-sm
          outline-none
          transition
          focus:border-purple-500
          focus:ring-2 focus:ring-purple-500/30
        "
      />

      {search && (
        <button
          onClick={() => setSearch('')}
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            text-gray-400 hover:text-white
            text-sm transition
          "
        >
          ✕
        </button>
      )}
    </div>
  )
}