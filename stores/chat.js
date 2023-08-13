import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
    state : () => ({
        message : "",
        messages : [
       
        ],
        scroll : false

        
    }),

    actions : {
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
        }
    },
    getters: {
      
    },
    mutations: {

    }
})