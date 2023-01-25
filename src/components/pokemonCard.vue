<template>
<div class="pokedex-card-container">
    &#35;{{pokedexIndex}} <h2>{{name}}</h2>
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
    border: 1px solid black;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

    padding: 1rem;
    margin: 1rem;

    cursor: pointer;

    display: flex;
    align-items: baseline;
    column-gap: 2rem;

    text-transform: capitalize;
}
</style>
