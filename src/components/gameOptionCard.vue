<template>
<div 
    :class="`
        ${disabled ? 'card-container__blocked' : ''}
        card-container 
    `"
>
    <p>{{ option }}</p>
</div>
</template>

<script>
export default {
    name: "GameOptionCard",

    props: [
        "option",
        "disabled"
    ],
}
</script>

<style scoped>
.card-container {
    margin: 1rem auto;
    border: 1px solid black;
    padding: 2rem;
    cursor: pointer;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

    text-transform: capitalize;
    font-size: 1.25rem;

    animation: fadeIn 0.1s;

    max-width: 300px;
}

.card-container__blocked {
    opacity: 0.8;
    cursor: default;
}

.card-container > p {
    text-transform: capitalize;
}
</style>
