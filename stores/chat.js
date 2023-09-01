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
            try {
                const history =  await axios.post(`${url}/api/history/get_all/v1`,{
                    "user_id" : val
                })
                this.historyChat = history.data.data
                return history
                
            } catch (error) {
                throw error;
            }
        },

        async retrieveChatById(id_history){
            const config = useRuntimeConfig()
            const url = config.public.apiBase
            try {
                const data =  await axios.post(`${url}/api/chat/get_by_history/v1`, {
                    "history_id" : id_history
                })
                this.messages = data.data.data
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
                return await axios.post(`${url}/api/history/rename/v1`, {
                    "history_id" : history_id,
                    "history_title" : history_title
                },
                {
                    headers : {
                        'Authorization':`Bearer ${localStorage.getItem("token")}`
                    }
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
                return await axios.post(`${url}/api/history/delete/v1`, {
                    "history_id" : val
                }, 
                {
                    headers : {
                        'Authorization':`Bearer ${localStorage.getItem("token")}`
                    }
                })
            } catch (error) {
                alert('hapus gagal, server tidak merespon')
                throw error
            }
        }
    },
    getters: {
      
    },
    mutations: {

    }
})