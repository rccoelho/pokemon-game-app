<template>
<div v-if="pokemons.length > 0" class="main-content-container">
    <h1>Score: {{ currentScore }}</h1>
    <img 
        :style="`display: ${setDisplay}`"
        :class="`
            ${showPokemon ? '' : 'hidePokemon'}
        `"  
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.find(obj => !obj.decoy).id}.png`" 
        @load="resetLevel"
        width="300" 
        alt="pokemon"
    > 
    <GameOptionCard
        v-for="(pokemon, index) in pokemons" :key="index" 
        :style="`display: ${setDisplay}`"
        :class="getRightAnswer(pokemon.name)"
        :option="pokemon.name"
        :disabled="disabled"
        @click="disabled ? null : handleClick(pokemon.name)"
    />
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
            pokemons: [],
            showPokemon: false,
            disabled: true,
            setBackgroundAnswer: false,
            setDisplay: false,
        }
    },

    mounted() {
        this.fetchPokemons();
    },

    methods: {
        fetchPokemons() {
            fetch(import.meta.env.VITE_API_URL + `play`)
                .then(res => res.json())
                .then(data => {
                    this.pokemon = data.find(obj => !obj.decoy)
                    this.pokemons = data;
                })
        },

        handleClick(pokemon) {
            if(pokemon !== this.pokemon.name)
                this.currentScore = 0
            else {
                this.currentScore++;
            }
            
            this.showPokemon = true;
            this.disabled = true;
            this.setBackgroundAnswer = true;

            setTimeout(() => {
                this.setDisplay = "none"
                this.setBackgroundAnswer = false
                this.fetchPokemons();
            }, 2000);
        },

        resetLevel() {
            this.setDisplay = ""
            this.showPokemon = false
            this.disabled = false
        },

        getRightAnswer(name) {
            if(!this.setBackgroundAnswer)
                return ''

            return this.pokemon.name !== name ? 'card-container__wrong' : 'card-container__correct'
        }
    },
}
</script>

<style scoped>
h1 {
    margin: 2rem;
}

img {
    transition: filter 1s;
    animation: fadeIn 0.5s ease-in;
}

.hidePokemon {
    filter: brightness(0);
}

.card-container {
    transition: transform 1s, background 1s;
}

.card-container__correct {
    background: rgb(63, 255, 63, 0.7);
    transform: scale(1.1);
}

.card-container__wrong {
    background: rgb(255, 63, 63, 0.7);
}
</style>
