const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debes introducir un nombre']
    },
    address: {
        type: String,
        required: [true, 'Debes introducir una dirección']
    },
    city: {
        type: String,
        required: [true, 'Debes introducir una ciudad']
    },
    foodType: {
        type: String,
        // enum: ["variada", "italiana", "asiática", "mediterránea","mexicana", "turca", "americana", "vegana"],
        // default: "variada"
    },
    image: String,

    description: {
        type: String,
        required: [true, 'Debes introducir una descripción']
    },
    recommendations: String,
    
    cost: {
        type: String,
        // enum: ["€", "€€", "€€€"],
        // default: "€",
    },

    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
})

restaurantSchema.index({
    location: '2dsphere'
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant