const mongoose = require("mongoose")
const centreEPSSchema = new mongoose.Schema({
    lieu:{
        type:String,
        required:[true]
    },   
},
    {
        timestamps:true
    }

)

module.exports = mongoose.model('centreEPS',centreEPSSchema)