import { defineStore } from 'pinia'
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
            return $fetch(`https://api.escuelajs.co/api/v1/auth/login`,{
                method : "POST",
                body : {
                    email : nik,  
                    password : password
                }
            })
            .then((response) => {
                console.log(response);
                const token = response.access_token
                this.token = token
                const refreshToken = response.refresh_token
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