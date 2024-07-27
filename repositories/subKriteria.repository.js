import Kriteria from "../models/kriteria.model.js";
import Sub_Kriteria from "../models/subKriteria.model.js";


export const getSubKriteria = async ()=>{
    try {
        return Sub_Kriteria.findAll();
    } catch (error) {
        throw error;
    }
};


export const getSubKriteriaByIdKriteria = async (kriteriaId) => {
  try {
    const subKriteria = await Sub_Kriteria.findAll({
      where: {
        kriteriaId: kriteriaId,
      },
      include: [
        {
          model: Kriteria,
          attributes: ['nama_kriteria'],
        },
      ],
    });
    return subKriteria;
  } catch (error) {
    throw error;
  }
};


export const createSubKriteria = async(subKriteriaData)=>{
  try {
      return await Sub_Kriteria.create(subKriteriaData);
  } catch (error) {
      throw error;
  }
}


export const deleteSubKriteria = async (id_sub_kriteria) => {
  try {
    const subKriteria = await Sub_Kriteria.findByPk(id_sub_kriteria);
    if (!subKriteria) {
      throw new Error('Sub Kriteria not found');
    }
    await subKriteria.destroy();
    return { message: 'Sub Kriteria deleted successfully' };
  } catch (error) {
    throw error;
  }
};


export const totalSubKriteria = async (kriteriaId) => {
  try {
      // Menghitung jumlah sub_kriteria dengan kondisi where kriteriaId
      const count = await Sub_Kriteria.count({
          where: {
              kriteriaId: kriteriaId
          }
      });

      return count;
  } catch (error) {
      throw error;
  }
};