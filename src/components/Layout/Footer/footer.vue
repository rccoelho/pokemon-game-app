<template>
<div class="footer-container">
    <p>&copy; Rafael Coelho {{ getCurrentDate() }}</p>
</div>
</template>

<script>
export default {
    name: "Footer",

    methods: {
        getCurrentDate() {
            const date = new Date().getFullYear()
            return date
        }
    }
}
</script>

<style>
.footer-container {
    padding: 2rem;
    background: black;
    color: white;
}
</style>
