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
        title : "first tale",
        desc : "desc the first tale"
      }
    ]
  })
})