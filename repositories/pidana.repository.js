import TindakPidana from "../models/pidana.model.js";



export const getTindakPidana = async()=>{
    try {
        return await TindakPidana.findAll();
    } catch (error) {
        throw error;
    }
};

export const createTindakPidana = async(tindakPidanaData)=>{
    try {
        return await TindakPidana.create(tindakPidanaData);
    } catch (error) {
        throw error;
    }
};


export const deleteTindakPidana = async (id_tindak_pidana) => {
    try {
      const tindakPidana = await TindakPidana.findByPk(id_tindak_pidana);
      if (!tindakPidana) {
        throw new Error('tindakPidana not found');
      }
      await tindakPidana.destroy();
      return { message: 'tindakPidana deleted successfully' };
    } catch (error) {
      throw error;
    }
};


// Fungsi untuk memperbarui data kematian berdasarkan id
export const updateTindakPidana = async (id_tindak_pidana, updateData) => {
    try {
        const [affectedRows, updatedRows] = await TindakPidana.update(updateData, {
          where: { id_tindak_pidana: id_tindak_pidana },
        //   returning: true,
        });
    
        if (affectedRows === 0) {
          return null;
        }
    
        // Some databases (like Postgres) return updated rows, others (like MySQL) do not.
        const updatedPidana = updatedRows ? updatedRows[0] : await TindakPidana.findOne({ where: { id_tindak_pidana } });
        return updatedPidana;
      } catch (error) {
        throw new Error(`Error updating Tindak Pidana: ${error.message}`);
      }
};