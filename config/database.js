
const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.uri)

        console.log("Connexion etablie")

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDb;