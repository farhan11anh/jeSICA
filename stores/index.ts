import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks : [
      {
        id : 1,
        title : "first tale",
        desc : "desc the first tale"
      },
      {
        id : 1,
        title : "second tale",
        desc : "desc the second tale"
      }
    ]
  }),
  getters : {
    greet(state){
      return state.tasks[0].title + 'flying ...'
    }
  },
  actions : {
    add(){
      const user = { id : 3, title : "third", desc : 'desc the third tale' }
      this.tasks.push(user)
    }
  }
})

// if(import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
// }