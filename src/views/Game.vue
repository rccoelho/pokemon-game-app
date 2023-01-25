<template>
<div class="main-content-container">
    <h2>Score: {{ currentScore }}</h2>
    <img 
        :class="showPokemon ? '' : 'hidePokemon'" 
        :src="pokemon.sprites?.other['official-artwork'].front_default" 
        width="300" 
        alt="pokemon"
    >
    <div>
        <GameOptionCard
            v-for="(pokemon, index) in pokemons" :key="index" 
            :option="pokemon"
            @click="handleClick(pokemon)"
        />
    </div>
</div>
</template>

<script>
import GameOptionCard from '../components/gameOptionCard.vue';

export default {
    name: "Game",
    components: { GameOptionCard },
    
    data() {
        return {
            currentScore: 0,
            pokemon: "",
            pokemons: [
                "Pikachu",
                "Ekans",
                "Geodude",
            ],
            showPokemon: false,
        }
    },

    mounted() {
        let id = this.getRandomId();
        this.fetchPokemon(id);
    },

    methods: {
        getRandomId() {
            return Math.floor(Math.random() * (151 - 1 + 1) + 1)
        },

        fetchPokemon(id) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => res.json())
                .then(data => {
                    this.pokemon = data;
                    this.pokemons = [...this.pokemons, this.pokemon.name];
                })
        },

        handleClick(pokemon) {
            if(pokemon !== this.pokemon.name)
                this.currentScore = 0
            else {
                this.currentScore++;
            }
            
            this.showPokemon = true;

            setTimeout(() => {
                this.pokemons = [
                    "Pikachu",
                    "Ekans",
                    "Geodude",
                ];
                this.showPokemon = false;

                let id = this.getRandomId();
                this.fetchPokemon(id);
                this.randomizePokemonsArray();
            }, 2000);
        },

        randomizePokemonsArray() {
            var newArray = this.pokemons.sort(() => 0.5 - Math.random()); 
            this.pokemons = newArray
        }
    },
}
</script>

<style scoped>
.hidePokemon {
    filter: brightness(0);
}
</style>
