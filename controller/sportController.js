const Sport = require('../models/sport')
//ajout sport
exports.addSport = async (req, res) => {
    try {
        const  nom_sport = req.body.nom_sport;
        const course_fonds  = req.body.course_fonds;
        const  typeSport = req.body.typeSport;
        if (!nom_sport || nom_sport === ''){
            res.status(404).json({ success: false, message: `Tous les champs sont requis` });
        } else {
            const addSport = await Sport.create({nom_sport,course_fonds,typeSport})
            if (addSport) {
                res.status(201).json({ success: true, message: `Ajout reussi` });
            } else {
                res.status(400).json({ success: false, message: `Erreur d'ajout` });
            }
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
// list sport
exports.sportList = async (req, res) => {
    try {
        const sport = await Sport.find()
        res.status(201).json({ success: true, data: sport });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
// detail sport

exports.sportDetails = async (req, res) => {
    const sportId = req.params.id;
    try {
        const sport = await Sport.findById(sportId)
        res.status(201).json({ success: true, data: sport });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
// Supprimer sport

exports.deleteSport = async (req, res) => {
    const sportId = req.params.id;
    try {
        const deleteSport = await Sport.findByIdAndDelete(sportId)
        if (deleteSport) {
            res.status(201).json({ success: true, message: 'Suppression reussi' });
        } else {
            res.status(400).json({ success: false, message: `Impossible de supprimer le sport dont l'id est : ${sportId}` });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
 }
 // Modification sport

 exports.updateSport = async (req, res) => {
    const sportId = req.params.id;
    try {
        const sport = await Sport.findById(sportId);
        if (!sport) {
            res.status(400).json({
                success: false,
                message: `Le sport portant l'id ${sportId} n'a pas ete trouve`,
            });
        }
        const nom_sport = req.body.nom_sport;
        const course_fonds = req.body.course_fonds;
        const  typeSport = req.body. typeSport;
        const updateSport = await Sport.findByIdAndUpdate(sportId, {
            nom_sport ,
            course_fonds,
            typeSport,
        });
        if (updateSport) {
            res.status(200).json({
                success: true,
                updateSport,
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
            message: `Le terrain portant l'id ${sportId} n'a pas ete trouve`,
        });
    }
}