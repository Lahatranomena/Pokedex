import SearchBar from './SearchBar'

export default function Navbar({ search, setSearch }) {
  return (
    <div className="bg-[#0D0D1A] border-b border-purple-500/20 px-6 py-3">

      <div className="flex items-center gap-6 max-w-6xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="text-lg">⚡</span>
          </div>

          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Pokédex
          </h1>
        </div>

        {/* Search */}
        <div className="flex-1 flex justify-center">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

      </div>
    </div>
  )
}