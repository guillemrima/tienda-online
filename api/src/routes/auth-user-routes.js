module.exports = (app, upload) => {
    const auth = require('../controllers/admin/user-auth-controller.js')
    const tracker = require('../middlewares/tracker.js')




    app.post('/api/auth/users/signin', auth.signin, [tracker.requestTracker])
  }