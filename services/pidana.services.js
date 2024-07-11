import * as pidanaRepository from '../repositories/pidana.repository.js';

export const getTindakPidana = async () => {
    try {

        return await pidanaRepository.getTindakPidana();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createTindakPidana = async(tindakPidanaData)=>{
    try {
        return await pidanaRepository.createTindakPidana(tindakPidanaData);
    } catch (error) {
        throw error;
    }
};

export const deleteTindakPidana = async(id)=>{
    try {
      return  await pidanaRepository.deleteTindakPidana(id);
    } catch (error) {
      throw error;
    }
}


export const modifyTindakPidana = async (id_tindak_pidana, updateData) => {
    try {
        const updatedPidana = await pidanaRepository.updateTindakPidana(id_tindak_pidana, updateData);
        if (!updatedPidana) {
          throw new Error('Pidana not found');
        }
        return updatedPidana;
    }catch (error) {
        throw new Error(`Error while updating Pidana: ${error.message}`);
    }
};