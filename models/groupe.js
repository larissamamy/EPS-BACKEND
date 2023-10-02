const mongoose = require("mongoose")
const groupeSchema = new mongoose.Schema({
    numero:{
        type:String,
        required:[true]
    },
    date_epreuve:{
        type:String,
        required:[true]
    },
    temps:{
        type:String,
        required:[true]
    },
    heure:{
        type:String,
        required:[true]
    },
    terrain:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Terrain',
        required:[true]
    },
    examinateur:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Examinateur',
        required:[true]
    },  
},
    {
        timestamps:true
    }

)

module.exports = mongoose.model('Groupe',groupeSchema)