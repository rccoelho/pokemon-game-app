<template>
<div class="main-content-container pokedex-container">
    <div class="generation">
        <span @click="fetchPokemons(151, 0)">#1 - #151</span>
        <span @click="fetchPokemons(251, 151)">#152 - #251</span>
        <span @click="fetchPokemons(386, 251)">#252 - #386</span>
        <span @click="fetchPokemons(493, 386)">#387 - #493</span>
        <span @click="fetchPokemons(649, 493)">#494 - #649</span>
        <span @click="fetchPokemons(721, 649)">#650 - #721</span>
        <span @click="fetchPokemons(809, 721)">#722 - #809</span>
        <span @click="fetchPokemons(905, 809)">#810 - #905</span>
        <span @click="fetchPokemons(1008, 905)">#906 - #1008</span>
    </div>
    <PokemonCard 
        v-for="(pokemon, index) in this.pokemons" 
        :key="index" 
        :name="pokemon.name" 
        :pokedexIndex="offset + index + 1" 
        @click="handleClick(pokemon.name)"
    />
</div>
</template>

<script>
import PokemonCard from '../components/pokemonCard.vue';

export default {
    name: "Pokedex",
    data() {
        return {
            pokemons: [],
            offset: 0,
        };
    },
    mounted() {
        this.fetchPokemons(151, 0);
    },
    methods: {
        fetchPokemons(limit, offset) {
            this.offset = offset
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
                .then(res => res.json())
                .then(data => this.pokemons = data.results)
        },
        handleClick(name) {
            this.$router.push({ path: `/pokemon/${name}` })
        }
    },
    components: { PokemonCard }
}
</script>

<style scoped>
.generation {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.generation > span{
    transition: transform 0.1s;
}

.generation > span:hover {
    cursor: pointer;
    transform: scale(1.2);
}

</style>
