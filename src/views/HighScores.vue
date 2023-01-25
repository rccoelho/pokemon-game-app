<template>
<div class="main-content-container">
    <h1>High scores:</h1>
    <div v-for="(score, index) in scores" :key="index">
        <span>{{score.name}}&nbsp;</span>
        <span>{{score.score}}</span>
    </div>
</div>
</template>

<script>
export default {
    name: "HighScores",

    data() {
        return {
            scores: [
                {name: "ricky", score: 999},
                {name: "asd", score: 123},
                {name: "rafael", score: 23},
                {name: "cat", score: 24},
                {name: "player1", score: 0},
            ]
        }
    },
}
</script>
