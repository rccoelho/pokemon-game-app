<template>
<div class="pokedex-card-container">
    &#35;{{pokedexIndex}} <h2>{{name}}</h2>
    <img 
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokedexIndex}.png`" 
    />
</div>
</template>

<script>
export default {
    name: "PokemonCard",
    props: [
        "name",
        "pokedexIndex"
    ],
}
</script>

<style scoped>
.pokedex-card-container {
    height: 5rem;
    margin: 1rem auto;
    padding: 1rem;

    cursor: pointer;

    border: 1px solid black;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: capitalize;

    transition: transform 0.1s;
}

.pokedex-card-container:hover {
    transform: translateX(0.25rem); 
    color: white;
    background: black;
}

.pokedex-card-container:hover > img {
    transform: rotate(3deg) scale(1.3);
}

img {
    height: 100%;
    transition: transform .5s;
}
</style>
