<template>
<div class="nav-container">
    <router-link @click="linkSelected('/')" :class="`link ${selected === '/' ? 'link__selected' : ''}`" to="/">Home</router-link>
    <router-link @click="linkSelected('/pokedex')" :class="`link ${selected === '/pokedex' ? 'link__selected' : ''}`" to="/pokedex">Pokédex</router-link>
    <router-link @click="linkSelected('/play')" :class="`link ${selected === '/play' ? 'link__selected' : ''}`" to="/play">Play</router-link>
    <!-- <router-link @click="linkSelected('/high-scores')" :class="`link ${selected === '/high-scores' ? 'link__selected' : ''}`" to="/high-scores">High Scores</router-link> -->
</div>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            selected: "",
        }
    },
    mounted() {
        this.linkSelected(window.location.pathname)
    },
    methods: {
        linkSelected(name) {
            this.selected = name;
        }
    },
}
</script>

<style>
.nav-container {
    height: 3rem;
    padding: 2rem;
    
    display: flex;
    align-items: center;
    column-gap: 2rem;

    font-size: 1.25rem;
}

.link {
    color: white;
    transition: color 0.1s;
}

.link:hover {
    color: black;
}

.link__selected {
    color: black;
}

</style>
