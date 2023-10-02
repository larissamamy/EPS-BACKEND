const express = require('express')
const { addCandidats, candidatsList,candidatsDetails, deleteCandidats, updateCandidats } = require('../controller/candidatsController')

const routeCandidats = express.Router()

routeCandidats.route('/').get(candidatsList).post(addCandidats)
routeCandidats.route('/:id').get(candidatsDetails).delete(deleteCandidats).put(updateCandidats)

module.exports = routeCandidats;
