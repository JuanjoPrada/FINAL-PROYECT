const mongoose = require('mongoose')
const { capitalizeText } = require('../utils')
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debes introducir un nombre']
    },
    address: String,
    
    city: {
        type: String,
        required: [true, 'Debes introducir una ciudad'],
        set: (value) => capitalizeText(value)
    },
    image: {
        type: String,
        required: [true, 'Debes introducir una imagen']
    },
    description: {
        type: String,
        required: [true, 'Debes introducir una descripción']
    },
    url: {
        type: String,
        required: [true, 'Debes introducir una url']
    },
    cost: {
        type: String,
        required: [true, 'Debes introducir el coste o si es gratis']
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
})

placeSchema.index({
    location: '2dsphere'
})

const Place = mongoose.model('Place', placeSchema)

module.exports = Place