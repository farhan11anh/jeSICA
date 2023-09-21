import { defineStore } from 'pinia';
import axios from 'axios';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menus : null
  }),

  actions: {

    async getDashboard(){
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      try {
        return await axios.get(`${url}/api/menu/get-home-menu/v1`)
      } catch (error) {
        throw error;
      }
    },

    async getAbout(){
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      try {
        return await axios.get(`${url}/api/menu/get-aboutus-menu/v1`)
      } catch (error) {
        throw error;
      }
    },

    async getInformation() {
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      try {
        return await axios.get(`${url}/api/menu/get-information-menu/v1`)
      } catch (error) {
        throw error;
      }
    },

    async getDetail(val) {
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      try {
        return await axios.post(`${url}/api/menu/get-detail-information/v1`, {
          "information_id" : val
        }
      )
      } catch (error) {
        throw error;
      }
    },

    async getProducts() {
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      try {
        return await axios.post(`${url}/api/menu/get-solution-menu/v1`, {
          "category_id" : "8a44d840-eab0-408d-942a-b6cf3564f703"
      }
      )
      } catch (error) {
        throw error;
      }
    }


  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
});
