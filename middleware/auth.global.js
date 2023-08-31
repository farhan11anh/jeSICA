import { useAuthStore } from '@/stores/auth'; // Ganti dengan alamat yang sesuai
export default defineNuxtRouteMiddleware((to, from) => {
  if( to.path == '/chats'){
    // console.log('test middleware');
    let login = ""
    if(process.client){
      login = localStorage.getItem('token') ? false : true
    }
    // console.log(login);
    if(login){
      return navigateTo('/auth/login')
    }

    // const guard = auth.isTokenValid
    // // const guards = auth.token
    // console.log(guard);
    
  }else if(to.path == '/auth/login'){
    let login = ""
    if(process.client){
      login = localStorage.getItem('token') ? true : false
    }
    if(login){
      return navigateTo('/chats')
    }

  } else {
    // console.log('tidak perlu login');
    
  }
})

