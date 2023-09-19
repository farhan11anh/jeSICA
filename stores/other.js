import { defineStore } from 'pinia';

export const useOtherStore = defineStore('other', {
  state: () => ({
    load_button: 'false',
  }),

  actions: {
    change_load_login(val) {
      this.load_button = val;
    },
  },

  getters: {},

  mutations: {},
});
