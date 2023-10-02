const express = require('express')
const {addExaminateur, examinateurList,examinateurDetails, deleteExaminateur, updateExaminateur} = require('../controller/examinateurController')
const routeExaminateur = express.Router()

routeExaminateur.route('/').get(examinateurList).post(addExaminateur)
routeExaminateur.route('/:id').get(examinateurDetails).delete(deleteExaminateur).put(updateExaminateur)

module.exports = routeExaminateur;