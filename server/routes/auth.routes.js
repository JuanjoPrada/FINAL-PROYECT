const express = require('express')
const router = express.Router()
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const User = require('./../models/user.model')

// Signup
router.post('/signup', (req, res) => {

    const { username, password, name, surname, address } = req.body

    User
        .findOne({ username })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'El nombre de usuario ya existe' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass, name, surname, address })
                .then(() => res.json({ code: 200, message: 'Usuario creado correctamente' }))
                .catch(err => res.status(500).json({ code: 500, message: 'Error creando usuario', err }))
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})


// Login 
router.post('/login', (req, res) => {

    const { username, password } = req.body

    User
        .findOne({ username })
        .then(user => {

            if (!user) {
                res.status(401).json({ code: 401, message: 'Usuario no registrado' })
                return
            }

            if (bcrypt.compareSync(password, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Contraseña incorrecta' })
                return
            }

            req.session.currentUser = user
            res.json(req.session.currentUser)
        })
        .catch(err => {
            console.log('-------------')
            res.status(500).json({ code: 500, message: 'Usuario no encontrado', err })})
})

//LogOut
router.get('/logout', (req, res) => {

    req.session.destroy((err) => res.json({ message: 'Logout successful' }));
})

//Check User's Status
router.post('/isLoggedin', (req, res) => {

    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

//Check Admin's Role
router.post('/isAdmin', (req, res) => {
    
    req.session.currentUser.role === 'ADMIN' ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

//Delete User
router.post('/deleteUser/:user_id', (req, res) => {

    User
        .findByIdAndDelete(req.params.user_id)
        .then(() => req.session.destroy((err) => res.json({ message: 'Profile deleted & Logout successfully' })))
        .catch(err => res.status(500).json({ code: 500, message: 'Error deleting  user', err }))
})

module.exports = router