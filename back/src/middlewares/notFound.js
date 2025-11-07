//middleware
//si aucune route trouvée , on tombe dedans!

module.exports = (req, res) => {
    res.status(404).json ({
        success:false,
        message:"ressource not found",
        data:null
    });
};

