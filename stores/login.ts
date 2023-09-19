import { defineStore, acceptHMRUpdate } from 'pinia';

export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    otp: '',
    users: {
      user_id: '',
      exp: '',
    },
  }),
  getters: {
    greet(state) {
      //   return state.tasks[0].title + 'flying ...'
    },
  },
  actions: {
    changeOtp(val: string) {
      this.otp = val;
    },
    saveUser(data: any) {
      this.users.user_id = data.user_id;
      this.users.exp = data.exp;
    },
    logOut() {
      if (process.client) {
        localStorage.removeItem('token');
      }
    },
  },
});

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLoginStore, import.meta.hot));
}
