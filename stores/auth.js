import { defineStore } from 'pinia'
import axios from 'axios';
// import jwtDecode from 'jwt-decode'

export const useAuthStore = defineStore('auth', {
    state : () => ({
        token : null,
        refreshToken : null
    }),

    actions : {
        login({nik, password}) {
            // console.log(nik);
            // const config = useRuntimeConfig()
            // const url = config.public.apiBase
            // return $fetch(`${url}/login`,{
            return axios.post(`https://api.escuelajs.co/api/v1/auth/login`,{
                    email : nik,  
                    password : password
            })
            .then((response) => {
                console.log(response);
                const token = response.data.access_token
                this.token = token
                const refreshToken = response.data.refresh_token
                this.refreshToken = refreshToken
                return token
            })
            .catch((error)=>{
                throw error
            })
        }
    },
    getters: {
        isTokenValid(state) {
            if(!state.token) {
                return false
            }

            // const decoded = jwtDecode(state.token)
            // const currentTime = Math.floor(Date.now() / 1000)
            // return decoded.exp >= currentTime
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        }
    }
})