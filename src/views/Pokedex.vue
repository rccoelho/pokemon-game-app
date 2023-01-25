<template>
<div class="main-content-container pokedex-container">
    <PokemonCard 
        v-for="(pokemon, index) in this.pokemons" 
        :key="index" 
        :name="pokemon.name" 
        :pokedexIndex="index + 1" 
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
        };
    },
    mounted() {
        this.fetchPokemons();
    },
    methods: {
        fetchPokemons() {
            fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
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
