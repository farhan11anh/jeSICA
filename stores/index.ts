import { defineStore, acceptHMRUpdate } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: 'first tale',
        desc: 'desc the first tale',
      },
      {
        id: 1,
        title: 'second tale',
        desc: 'desc the second tale',
      },
    ],
  }),
  getters: {
    greet(state) {
      return state.tasks[0].title + 'flying ...';
    },
  },
  actions: {
    add(val: string) {
      const user = { id: 3, title: val, desc: 'desc the third tale' };
      this.tasks.push(user);
    },
  },
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTaskStore, import.meta.hot));
}
