const mongoose = require("mongoose")
const examinateurSchema = new mongoose.Schema({
    nom_examinateur:{
        type:String,
        required:[true]
    },   
},
    {
        timestamps:true
    }

)

module.exports = mongoose.model('Examinateur',examinateurSchema)