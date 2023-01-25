<template>
    <div>
        <Nav />
        <slot />
        <!-- <Footer /> -->
    </div>
</template>

<script>
import Nav from './Nav/nav.vue';
import Footer from './Footer/footer.vue';

export default {
    name: "Layout",

    components: {
        Nav,
        Footer,
    }
}
</script>
