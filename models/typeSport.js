const mongoose = require ("mongoose")

const typeSportSchema = new mongoose.Schema({
    nom_type:{
        type:String,
        required:[true]
    },
   candidats:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Candidats',
        required:[true]
    },
    sport:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Sport',
        required:[true]
    },  
},
    {
        timestamps:true
    }
 
)

module.exports = mongoose.model('TypeSport',typeSportSchema)