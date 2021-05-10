module.exports = app => {

    // Base URLS
    app.use('/api/restaurants', require('./restaurants.routes.js'))
    app.use('/api/places', require('./places.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}