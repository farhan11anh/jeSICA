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

            console.log(this.messages.length);
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
            const userData = JSON.parse(localStorage.getItem('user_data'))
            const userID = userData.data.data.user_id
            console.log(userID);
            // console.log(url);
            try {
                const history =  await axios.post(`${url}/getHistories`,{
                    "user_id" : userID
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
            // console.log(this.messages);
        },

        async setIdHistory(val){
            return this.id_history = val
        },

        async renameChat(history_id, history_title){
            const config = useRuntimeConfig()
            const url = config.public.apiBase
            try {
                return await axios.post(`${url}/renameHistory`, {
                    "history_id" : history_id,
                    "history_title" : history_title
                })
                // .then(()=>{
                //     alert('berhasil edit')
                // })
            } catch (error) {
                alert('gagal ubah data')
            }
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