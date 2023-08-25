import { defineStore } from 'pinia'
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state : () => ({
        // token : localStorage.setItem('token'),
        // token : null,
        token : process.server ? '' : localStorage.getItem('token'),
        refreshToken : null
    }),

    actions : {
        async login({nik, password}) {

            const config = useRuntimeConfig()
            const url = config.public.apiBase
            return await axios.post(`${url}/login`,{
                    email : nik,  
                    password : password
            })

        },
        isLogin(){
            console.log(localStorage.getItem('token'));
        },

        async setToken(otp, email){
            console.log(otp);
            const config = useRuntimeConfig()
            const url = config.public.apiBase
            return await $fetch(`${url}/verifOTP`,{
                method : "POST",
                body : {
                    otp : otp,
                    email : email
                }
            })
        },
        // async refreshTokenn(){
        //     try {
        //         const response = await axios.post('https://api.escuelajs.co/api/v1/auth/refresh-token', {
        //             refreshToken: this.refreshToken
        //         })

        //         // console.log(response);
        //         const token = response.data.access_token
        //         this.token = token
        //         const refreshToken = response.data.refresh_token
        //         this.refreshToken = refreshToken
        //         return token
        //         // return 'success'
        //     } catch (error) {
        //         throw error
        //     }
        // },

        async verificationToken(token){
            const config = useRuntimeConfig()
            const url = config.public.apiBase
            return await axios.post(`${url}/verifToken`,{},{
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
        },

        logOut(){
            if(process.client){
                localStorage.removeItem('token')
                localStorage.removeItem('user_data')
            }
            return 'success'
        }
    },
    getters: {
        isTokenValid() {
            // localStorage.getItem(token)
            if(!this.token) {
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