const api = {
    pokemonPhoto: (pokemonName) => {
        let name = pokemonName.toLowerCase()
        return `https://img.pokemondb.net/artwork/large/${name}.jpg`
    }
}

export default api
