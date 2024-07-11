import * as narapidanaRepository from '../repositories/narapidana.repository.js';

export const createNarapidana = async(narapidanaData)=>{
  try {
    return narapidanaRepository.createNarapidana(narapidanaData);
  } catch (error) {
    throw new error;
  }
};

export const getNarapidana = async (page, limit) => {
  try {
    const skip = (page - 1) * limit;
    return await narapidanaRepository.getNarapidana(skip, limit);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getNarapidanaById = async (id) => {
  try {
    return await narapidanaRepository.getNarapidanaById(id);
  } catch (error) {
    throw error;
  }
};

export const updateNarapidana = async (id, narapidanaData) => {
  try {
    return await narapidanaRepository.updateNarapidana(id, narapidanaData);
  } catch (error) {
    throw error;
  }
};

export const deleteNarapidana = async (id) => {
  try {
    return await narapidanaRepository.deleteNarapidana(id);
  } catch (error) {
    throw error;
  }
};  