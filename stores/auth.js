import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: process.server ? '' : localStorage.getItem('token'),
    refreshToken: null,
  }),

  actions: {
    async login({ nik, password }) {
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      return await axios.post(`${url}/api/login/v1`, {
        email: nik,
        password: password,
      });
    },
    isLogin() {
      console.log(localStorage.getItem('token'));
    },

    async setToken(otp, email) {
      console.log(otp);
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      return await axios.post(`${url}/api/verification/otp/v1`, {
        otp: otp,
        email: email,
      });
    },

    async verificationToken(token) {
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      return await axios.post(
        `${url}/api/verification/token/v1`,
        {},
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
    },

    async change_password(data, token) {
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      return await axios.post(
        `${url}/api/password/change/v1`,
        {
          old_password: data.password_old,
          new_password: data.password,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      );
    },

    async send_email_forgot_password(val) {
      // ...
      const config = useRuntimeConfig();
      const url = config.public.apiBase;

      try {
        await axios.post(`${url}/api/password/send_email/v1`, {
          "email" : val
        })
      } catch (error) {
        
      }
    },

  
    async check_url(val){
      const config = useRuntimeConfig();
      const url = config.public.apiBase;
      try {
        await axios.post(`${url}/api/password/check_url/v1`, {
          "code" : val
        })
      } catch (error) {
        throw error
      }
    },

    async send_forgot_password(val) {
      // ...
      const config = useRuntimeConfig();
      const url = config.public.apiBase;

      try {
        await axios.post(`${url}/api/password/forgot/v1`, {
          "code" : val.code,
          "new_password" : val.new_password
        })
      } catch (error) {
          throw error
      }
    },

    async logOut() {
      if (process.client) {
        const config = useRuntimeConfig();
        const url = config.public.apiBase;
        try {
          await axios.post(`${url}/api/logout/v1`, {
            access_token: localStorage?.getItem('token'),
          });
        } catch (error) {
          throw error;
        }
      }
      return 'success';
    },
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
});
