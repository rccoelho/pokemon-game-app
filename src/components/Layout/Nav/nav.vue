<template>
<div class="nav-container">
    <router-link to="/">Home</router-link>
    <router-link to="/play">Play</router-link>
    <router-link to="/pokedex">Pokedex</router-link>
    <router-link to="/high-scores">High Scores</router-link>
</div>
</template>

<script>
export default {
    name: "Nav",
}
</script>

<style>
.nav-container {
    background: black;
    color: white;
    
    padding: 2rem;
    
    display: flex;
    align-items: center;
    column-gap: 2rem;
}
</style>
