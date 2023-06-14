module.exports = (app, upload) => {
    const auth = require('../controllers/admin/user-auth-controller.js')
  
    app.post('/api/auth/users/signin', auth.signin)
  }