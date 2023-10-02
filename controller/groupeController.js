const Groupe = require('../models/groupe')
//ajout groupe
exports.addGroupe = async (req, res) => {
    try {
        const  numero = req.body.numero;
        const date_epreuve = req.body.date_epreuve;
        const temps =  req.body.temps;
        const heure =  req.body.heure;
        const terrain =  req.body.terrain;
        const examinateur =  req.body.examinateur;
        if (!numero || numero === '' || !date_epreuve || date_epreuve === '' || !temps || temps === ''|| !heure || heure === ''){
            res.status(404).json({ success: false, message: `Tous les champs sont requis` });
        } else {
            const addGroupe = await Groupe.create({ numero, date_epreuve,temps,heure,terrain,examinateur })
            if (addGroupe) {
                res.status(201).json({ success: true, message: `Ajout reussi` });
            } else {
                res.status(400).json({ success: false, message: `Erreur d'ajout` });
            }
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

//Obtenir list groupe

exports.groupeList = async (req, res) => {
    try {
        const groupe = await Groupe.find()
        res.status(201).json({ success: true, data: groupe });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

 //Obtenir detail groupe

exports.groupeDetails = async (req, res) => {
    const groupeId = req.params.id;
    try {
        const groupe = await Groupe.findById(groupeId)
        res.status(201).json({ success: true, data: groupe });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

 // Supprimer le groupe

exports.deleteGroupe = async (req, res) => {
    const groupeId = req.params.id;
    try {
        const deleteGroupe = await Groupe.findByIdAndDelete(groupeId)
        if (deleteGroupe) {
            res.status(201).json({ success: true, message: 'Suppression reussi' });
        } else {
            res.status(400).json({ success: false, message: `Impossible de supprimer le groupe dont l'id est : ${groupeId}` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
 }

//modifier un groupe

 exports.updateGroupe = async (req, res) => {
    const groupeId = req.params.id;
    try {
        const groupe = await Groupe.findById(groupeId);
        if (!groupe) {
            res.status(400).json({
                success: false,
                message: `Le groupe portant l'id ${groupeId} n'a pas ete trouve`,
            });
        }
        const  numero = req.body.numero;
        const date_epreuve = req.body.date_epreuve;
        const temps =  req.body.temps;
        const heure =  req.body.heure;
        const terrain =  req.body.terrain;
        const examinateur =  req.body.examinateur;
        const updateGroupe = await Groupe.findByIdAndUpdate(groupeId, {
            numero,date_epreuve,temps,heure,terrain,examinateur,   
        });
        if (updateGroupe) {
            res.status(200).json({
                success: true,
                updateGroupe,
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
            message: `Le groupe portant l'id ${groupeId} n'a pas ete trouve`,
        });
    }
}