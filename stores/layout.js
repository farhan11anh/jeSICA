import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layoutStore', {
  state: () => ({
    theme_data : ''
  }),
  getters: {
   theme : ( state )=> state.theme_data || localStorage.getItem('theme')|| (window.matchMedia('(prefers-color-scheme: dark)').matches) && 'dark'
  },
  actions: {
    changeTheme(){
        var dark_or_light = this.theme == 'dark' ? 'light' : 'dark';
        this.theme_data = dark_or_light;
        localStorage.setItem('theme', dark_or_light)
    }
  },
});


