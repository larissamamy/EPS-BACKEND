const Candidats = require("../models/candidats")
//ajout candidats
exports.addCandidats = async (req, res) => {

    try {
        const numéro_inscription = req.body.numéro_inscription;
        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const dateNaissance = req.body.dateNaissance;
        const sexe = req.body.sexe;
        const isApte = req.body.isApte;
        const typeSport = req.body.typeSport;
    
        if ( !numéro_inscription ||numéro_inscription=== '' || !nom|| nom === '' || !prenom || prenom === '' || !dateNaissance || dateNaissance === '' || !sexe || sexe === '' || !isApte || isApte === '') {
            res.status(404).json({ success: false, message: `Tous les champs sont requis` });
        } else {
            const candidats = await Candidats.create({ numéro_inscription,nom, prenom, dateNaissance, sexe, isApte, typeSport});
            res.status(201).json({ success: true, data: candidats });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
//Obtenir list candidats

exports.candidatsList = async (req, res) => {
    try {
        const candidats = await Candidats.find()
        res.status(201).json({ success: true, data: candidats });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
//Obtenir details candidats

exports.candidatsDetails = async (req, res) => {
    const candidatsId = req.params.id;
    try {
        const candidats = await Candidats.findById(candidatsId)
        res.status(201).json({ success: true, data: candidats });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
 //Suppression candidats

exports.deleteCandidats = async (req, res) => {
    const candidatsId = req.params.id;
    try {
        const deleteCandidats = await Candidats.findByIdAndDelete(candidatsId)
        if (deleteCandidats) {
            res.status(201).json({ success: true, message: 'Suppression reussi' });
        } else {
            res.status(400).json({ success: false, message: `Impossible de supprimer le candidats dont l'id est : ${candidatsId}` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
// Modification candidats
exports.updateCandidats = async (req, res) => {
    const candidatsId = req.params.id;
    try {
        const candidats = await Candidats.findById(candidatsId);
        if (!candidats) {
            res.status(400).json({
                success: false,
                message: `Le candidats portant l'id ${candidatsId} n'a pas ete trouve`,
            });
        }
            const numéro_inscription = req.body.numéro_inscription;
            const nom = req.body.nom;
            const prenom = req.body.prenom;
            const dateNaissance = req.body.dateNaissance;
            const sexe = req.body.sexe;
            const isApte = req.body.isApte;
            const typeSport = req.body.typeSport;
            const updateCandidats = await Candidats.findByIdAndUpdate(candidatsId, {
                numéro_inscription,
                nom,
                prenom,
                dateNaissance,
                sexe,
                isApte,
                typeSport,

            });
        if (updateCandidats) {
            res.status(200).json({
                success: true,
                updateCandidats,
                message: "Modification effectue avec success",
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Erreur de modification",
            });
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Le candidats portant l'id ${candidatsId} n'a pas ete trouve`,
        });
    }
}