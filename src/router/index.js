import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/Index.vue"
import Game from "../views/Game.vue"
import HighScores from "../views/HighScores.vue"
import Pokedex from "../views/Pokedex.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/play",
      name: "play",
      component: Game,
    },
    {
      path: "/high-scores",
      name: "HighScores",
      component: HighScores,
    },
    {
      path: "/pokedex",
      name: "Pokedex",
      component: Pokedex,
    },
  ],
});

export default router;
