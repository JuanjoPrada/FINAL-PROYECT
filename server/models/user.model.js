const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debes introducir tu nombre']
    },
    surname: {
        type: String,
        required: [true, 'Debes introducir tu apellido']
    },
    username: {
        type: String,
        unique: true,
        require: [true, 'Debes introducir un nombre de usuario']
    },
    password: {
        type: String,
        required: [true, 'Debes introducir una contraseña']
    },
    address: String,

    role: {
        type: String,
        enum: ["USER", "ADMIN", "PARTNER"],
        default: "USER"
    },
    favorites: {
        places: [{
            type: Schema.Types.ObjectId,
            ref: "Place"
        }],
        restaurants: [{
            type: Schema.Types.ObjectId,
            ref: "Restaurant"
        }],
        events: [String]
    },
    // conditions: {
    //     type: Boolean
    // }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User