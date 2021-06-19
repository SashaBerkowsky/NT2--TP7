import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isHard: false,
    gane: false,
    pickedColor: "RGB",
    restart: "",
  },
  actions: {
    changeMode({ commit }, value) {
      commit("changeIsHard", value);
    },
    changePickedColor({ commit }, color) {
      commit("newPickedColor", color);
    },
    changeGane({ commit }, value) {
      commit("newGane", value);
    },
    setRestart({ commit }, restart) {
      commit("newRestart", restart);
    },
  },
  mutations: {
    changeIsHard(state, value) {
      state.isHard = value;
    },
    newPickedColor(state, color) {
      state.pickedColor = color;
    },
    newGane(state, value) {
      state.gane = value;
    },
    newRestart(state, restart) {
      state.restart = restart;
    },
  },
});
