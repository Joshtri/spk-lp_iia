import Kriteria from '../models/kriteria.model.js';



export const getKriteria = async (skip, limit)=>{
  try {
    const { rows: kriteriaData, count: totalItems } = await Kriteria.findAndCountAll({
      offset: skip,
      limit: limit,
  });
  return { kriteriaData, totalItems };
  } catch (error) {
    throw new error;
  }
};


export const createKriteria = async(kriteriaData)=>{
  try {

    return await Kriteria.create(kriteriaData);

  } catch (error) {
    throw new error;
  }
}


export const totalKriteria = async()=>{
  try {
    const totalKriteria = await Kriteria.count();
    return totalKriteria
  } catch (error) {
    throw new error;
  }
}

export const deleteKriteria = async (id_kriteria) => {
  try {
    const kriteria = await Kriteria.findByPk(id_kriteria);
    if (!kriteria) {
      throw new Error('kriteria not found');
    }
    await kriteria.destroy();
    return { message: 'kriteria deleted successfully' };
  } catch (error) {
    throw error;
  }
};

export const getKriteriaById = async (id) => {
  try {
    const kriteria = await Kriteria.findByPk(id);
    if (!kriteria) {
      throw new Error('Kriteria not found');
    }
    return kriteria;
  } catch (error) {
    throw error;
  }
};