const mongoose = require("mongoose")
const terrainSchema = new mongoose.Schema({
    nom_terrain:{
        type:String,
    },
    centreEPS:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'CentreEPS',
        required:[true]
    },
},
    {
        timestamps:true
    }

)

module.exports = mongoose.model('Terrain',terrainSchema)