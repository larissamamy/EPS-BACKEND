const mongoose = require("mongoose")
const utilisateurSchema = new mongoose.Schema({
    nom: {
        type: String,
    },
    prenom: {
        type: String,
    },
    sexe: {
        type: String,
        required: [true]
    },
    password: {
        type: String,
        required: [true]
    },
    email:{
        type:String,
        required: [true]

    },
    num_machine:{
        type:String,
        required: [true]

    }
},
    {
        timestamps:true
    }
  
)

module.exports = mongoose.model("Utilisateur", utilisateurSchema);