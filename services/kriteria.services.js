import * as kriteriaRepository from '../repositories/kriteria.repository.js';



export const getKriteria = async(page, limit)=>{
  try {
    
    const skip = (page - 1) * limit;
    return await kriteriaRepository.getKriteria(skip, limit);
  } catch (error) {
    throw error;
  }
}

export const createKriteria = async(kriteriaData)=>{
  try {
    return await kriteriaRepository.createKriteria(kriteriaData)
  } catch (error) {
    throw error;
  }
}


export const deleteKriteria = async(id)=>{
  try {
    return await kriteriaRepository.deleteKriteria(id);
  } catch (error) {
    throw error;
  }
}

export const getKriteriaById = async (id) => {
  try {
    const kriteria = await kriteriaRepository.getKriteriaById(id);
    if (!kriteria) {
      throw new Error('Kriteria not found');
    }
    return kriteria;
  } catch (error) {
    throw error;
  }
};