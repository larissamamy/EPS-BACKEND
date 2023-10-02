const express = require('express')
const {addGroupe, groupeList,groupeDetails, deleteGroupe, updateGroupe} = require('../controller/groupeController')
const routeGroupe = express.Router()

routeGroupe.route('/').get(groupeList).post(addGroupe)
routeGroupe.route('/:id').get(groupeDetails).delete(deleteGroupe).put(updateGroupe)

module.exports = routeGroupe;