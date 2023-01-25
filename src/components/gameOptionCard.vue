<template>
<div class="card-container">
    <p>{{ option }}</p>
</div>
</template>

<script>
export default {
    name: "GameOptionCard",

    props: [
        "option"
    ]
}
</script>

<style scoped>
.card-container {
    margin: 1rem;
    border: 1px solid black;
    /* border-radius: 1rem; */
    padding: 2rem;
    cursor: pointer;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
}

.card-container:active {
    color: white;
    background: black;
}

.card-container > p {
    text-transform: capitalize;
}
</style>
