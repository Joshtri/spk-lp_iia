import * as subKriteriaRepository from '../repositories/subKriteria.repository.js';




export const getSubKriteriaByIdKriteria = async(kriteriaId)=>{
    try {
        return subKriteriaRepository.getSubKriteriaByIdKriteria(kriteriaId);
    } catch (error) {
        throw error;
    }
}

export const createSubKriteria = async(subKriteriaData)=>{
    try {
        return await subKriteriaRepository.createSubKriteria(subKriteriaData);
    } catch (error) {
        throw error;
    }
};


export const deleteSubKriteria = async(id)=>{
    try {
        return await subKriteriaRepository.deleteSubKriteria(id);
    } catch (error) {
        throw error;
    }
};

export const getSubKriteria = async()=>{
    try {
        return await subKriteriaRepository.getSubKriteria();
    } catch (error) {
        throw error;
    }
}