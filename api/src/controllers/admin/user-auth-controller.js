const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv').config()
const process = require('process')
const db = require('../../models')
const User = db.User
const TrackingService = require('../../services/tracking-service')

exports.signin = async (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(async user => {
      if (!user) {
        return res.status(404).send({ message: 'Usuario o contraseña incorrecta' })
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      )

      if (!passwordIsValid) {
        return res.status(404).send({
          accessToken: null,
          message: 'Usuario o contraseña incorrecta'
        })
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 86400
      })

      res.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email,
        accessToken: token
      })

      const userTracked = await new TrackingService().userTracking(user.id, req.socket.remoteAddress, req.originalUrl, req.method, res.statusCode)

      userTracked ? console.log(`✅ Usuario con id ${user.id} trackeado correctamente.`) :  console.log(`❌ Error al trackear el usuario con id ${user.id}.`)
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
}