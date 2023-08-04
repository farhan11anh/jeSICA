const jwt = require('jsonwebtoken');

export default function ({ app, store, redirect }) {
  app.router.beforeEach((to, from, next) => {
    const token = store.state.auth.token;

    if (token) {
      jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
          // Token tidak valid, arahkan ke halaman login
          redirect('/login');
        } else {
          // Token valid, lanjutkan navigasi
          next();
        }
      });
    } else {
      // Tidak ada token, arahkan ke halaman login
      redirect('/login');
    }
  });
}