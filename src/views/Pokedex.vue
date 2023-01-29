<template>
<div class="main-content-container">
    <h1>Pick the generation: </h1>
    <div class="generation">
        <span :class="gen === 1 ? 'selected' : ''" @click="handleGenSelect(1, 151, 0)">#1 - #151</span>
        <span :class="gen === 2 ? 'selected' : ''" @click="handleGenSelect(2, 100, 151)">#152 - #251</span>
        <span :class="gen === 3 ? 'selected' : ''" @click="handleGenSelect(3, 135, 251)">#252 - #386</span>
        <span :class="gen === 4 ? 'selected' : ''" @click="handleGenSelect(4, 107, 386)">#387 - #493</span>
        <span :class="gen === 5 ? 'selected' : ''" @click="handleGenSelect(5, 156, 493)">#494 - #649</span>
        <span :class="gen === 6 ? 'selected' : ''" @click="handleGenSelect(6, 72, 649)">#650 - #721</span>
        <span :class="gen === 7 ? 'selected' : ''" @click="handleGenSelect(7, 88, 721)">#722 - #809</span>
        <span :class="gen === 8 ? 'selected' : ''" @click="handleGenSelect(8, 96, 809)">#810 - #905</span>
        <span :class="gen === 9 ? 'selected' : ''" @click="handleGenSelect(9, 103, 905)">#906 - #1008</span>
    </div>
    <h1>Pokémons:</h1>
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
            gen: 1,
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
        },
        handleGenSelect(gen, limit, offset) {
            this.gen = gen;
            this.fetchPokemons(limit, offset);
        }
    },
    components: { PokemonCard }
}
</script>

<style scoped>
h1 {
    margin: 1rem;
    text-align: left;
}

.generation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
}

.generation > span {
    padding: 0.5rem;
    transition: transform 0.1s;
}

.selected,
.generation > span:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.selected {
    background-color: black;
    color: white;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
}

</style>
