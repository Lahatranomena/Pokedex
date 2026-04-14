import SearchBar from './SearchBar'

export default function Navbar({ search, setSearch }) {
    return (
        <div className="relative bg-gradient-to-r from-[#15122a] via-[#1a1633] to-[#15122a] border-b border-purple-400/20 px-6 py-4 overflow-hidden">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-[slide_8s_linear_infinite]" />
            </div>

            <div className="absolute -top-10 left-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full animate-pulse" />

            <div className="relative flex items-center gap-6 max-w-6xl mx-auto">

                <div className="flex items-center gap-3 shrink-0">
                    <img src="/favicon.svg" alt="logo" className="w-8 h-8" />

                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Pokédex
                    </h1>
                </div>

                <div className="flex-1 flex justify-center">
                    <SearchBar search={search} setSearch={setSearch} />
                </div>

            </div>
        </div>
    )
}