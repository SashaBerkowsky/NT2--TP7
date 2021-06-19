<template>
  <div id="app">
    <div id="header" :style="{ background: headerColorVuex }">
      <h1>
        The Great <br />
        <span id="colorDisplay">{{ pickedColorVuex }}</span>
        <br />
        Guessing Game
      </h1>
    </div>
    <Navbar />
    <Game />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Game from "./components/Game.vue";

export default {
  name: "App",
  mounted() {},
  data() {
    return {
      pickedColor: "RGB",
    };
  },
  methods: {},
  computed: {
    pickedColorVuex() {
      return this.$store.state.pickedColor;
    },
    headerColorVuex() {
      return this.$store.state.gane ? this.pickedColorVuex : "steelBlue";
    },
  },
  components: {
    Navbar,
    Game,
  },
};
</script>

<style>
#app {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
#header {
  transition: all 0.3s;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
#colorDisplay {
  font-size: 200%;
}
</style>
