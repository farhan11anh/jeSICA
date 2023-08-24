import { defineStore } from 'pinia'
import axios from 'axios'

export const useChatStore = defineStore('chat', {
    id: 'Chat Store',
    state: () => ({
        message : "",
        messages : [
       
        ],
        scroll : false,
        waitResp : false,
        historyChat : [],
        id_history : "",

    }),

    actions: {
        setMessage(msg){
            this.message = msg
            return true
        },

        addMessages(data){
            this.messages.push(
                {
                    isJesica : data.isJesica,
                    msg : data.msg
                }
            )
        },

        scrollDown(){
            this.scroll = !this.scroll
        },
        changeWait(val){
            this.waitResp = val
        },

        async getHistoryByUserId(val){
            const config = useRuntimeConfig()
            const url = config.public.apiBase
            console.log(url);
            try {
                const history =  await axios.post(`${url}/getHistories`,{
                    "user_id" : val
                })
                this.historyChat = history.data.data
                // .then((history)=> {
                //     console.log(history);
                // })
                return history
                
            } catch (error) {
                throw error;
            }
        },

        async retrieveChatById(id_history){
            const config = useRuntimeConfig()
            const url = config.public.apiBase
            try {
                const data =  await axios.post(`${url}/getChats`, {
                    "history_id" : id_history
                })
                this.messages = data.data.data
                console.log(this.messages);
            } catch (error) {
                throw error
            }
        },

        async newChat(){
            this.messages = []
        },

        async setIdHistory(val){
            return this.id_history = val
        },

        async deleteChatById(val){
            const config = useRuntimeConfig()
            const url = config.public.apiBase
            try {
                return await axios.post(`${url}/deleteHistory`, {
                    "history_id" : val
                })
            } catch (error) {
                throw error
            }
        }
    },
    getters: {
      
    },
    mutations: {

    }
})