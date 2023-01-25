<template>
<div class="main-content-container">
    <h1>&#35;{{ pokemon.id }} {{pokemon.name}}</h1>
    <img :src="pokemon.sprites?.other['official-artwork'].front_default" width="350" alt="pokemon" />
    <div>
        <h2>Types: </h2>
        <span v-for="(type, index) in pokemon.types" :key="index">{{type.type.name}}&nbsp;</span>  
    </div>
    <div>
        <h2>Stats: </h2>
        <p v-for="(stat, index) in pokemon.stats" :key="index">{{stat.stat.name}} {{stat.base_stat}}</p>  
    </div>
    
</div>
</template>

<script>
export default {
    name: "Pokemon",

    data() {
        return {
            pokemon: "",
        }
    },

    beforeMount() {
        this.fetchPokemon(this.$route.params.id);
    },

    methods: {
        fetchPokemon(name) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(res => res.json())
                .then(data => this.pokemon = data)
        }
    },
}
</script>
