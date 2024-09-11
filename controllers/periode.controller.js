
import Periode from "../models/periode.model.js";

export const periodePage = async(req,res)=>{
    try {
        const userData = req.session.user;
        const title = "Data Periode";
        const periodeData =  await Periode.findAll();


        const messagePost = req.flash("tambahInfo");
        const messageUpdate = req.flash("updateInfo");
        const messageDelete = req.flash("deleteInfo");
  


        res.render('data_periode',{
            title,
            periodeData,
            user:userData,
            messagePost,
            messageUpdate,
            messageDelete
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const createPeriode = async (req, res) => {
    const { periode_penilaian, tahun_periode } = req.body;

    try {
        // Validate input
        if (!periode_penilaian || !tahun_periode) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create the Periode record
        const newPeriode = await Periode.create({
            periode_penilaian,
            tahun_periode,
        });


        // return res.status(201).json({
        //     message: "Periode created successfully.",
        //     data: newPeriode
        // });

        res.redirect('/data/periode')
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

export const updatePeriode = async (req, res) => {
    const { id_periode, tahun_periode, periode_penilaian } = req.body;

    try {
        // Validate input
        if (!id_periode || !tahun_periode || !periode_penilaian) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Find the existing Periode by its ID
        const existingPeriode = await Periode.findByPk(id_periode);

        if (!existingPeriode) {
            return res.status(404).json({ message: "Periode not found." });
        }

        // Update the Periode fields
        existingPeriode.tahun_periode = tahun_periode;
        existingPeriode.periode_penilaian = periode_penilaian;

        // Save the updated Periode
        await existingPeriode.save();
        res.redirect('/data/periode')

        // return res.status(200).json({
        //     message: "Periode updated successfully.",
        //     data: existingPeriode
        // });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

export const deletePeriode = async (req, res) => {
    const { id_periode } = req.params; // Get the id_periode from the route parameters

    try {
        // Find the Periode record by ID
        const periode = await Periode.findByPk(id_periode);

        if (!periode) {
            return res.status(404).json({ message: "Periode not found." });
        }

        // Delete the Periode record
        await periode.destroy();

        res.redirect('/data/periode')
        // return res.status(200).json({
        //     message: "Periode deleted successfully.",
        // });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
    }
};
