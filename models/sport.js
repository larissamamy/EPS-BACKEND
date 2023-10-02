const mongoose = require("mongoose")
const sportSchema = new mongoose.Schema({
    nom_sport:{
        type:String,
        require:[true]
    },
    course_fonds:{
        type:String,
        require:[true]
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

module.exports = mongoose.model('Sport',sportSchema)