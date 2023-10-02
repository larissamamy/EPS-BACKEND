const mongoose = require("mongoose")
const CandidatsSchema = new mongoose.Schema({
    numéro_inscription: {
        type: String,
        required: [true]
    },
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
    dateNaissance: {
        type: String,
        required: [true]
    },
    isApte:{
        type: Boolean,
        required: [true]

    },
    typeSport:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'TypeSport',
        required: [true]

    }
},
    {
        timestamps:true
    }
  
)

module.exports = mongoose.model("Candidats", CandidatsSchema);