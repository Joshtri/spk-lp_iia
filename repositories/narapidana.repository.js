import db from '../config/dbConfig.js';
import Narapidana from '../models/narapidana.model.js';
import TindakPidana from '../models/pidana.model.js';
import User from '../models/user.model.js';


export const totalNarapidana = async()=>{
  try {
    return await Narapidana.count();
  } catch (error) {
    throw  error;
  }
}

export const createNarapidana = async(narapidanaData)=>{
  try {
    return await Narapidana.create(narapidanaData);
  } catch (error) {
    throw  error;
  }
}

// narapidanaRepository.js

export const getNarapidana = async (skip, limit) => {
  try {
    const { rows: narapidanaData, count: totalItems } = await Narapidana.findAndCountAll({
      offset: skip,
      limit: limit,
      include: [
        {
          model: User,
          attributes: ['nama_lengkap'],
        },
        // Tambahkan objek include untuk tabel lainnya jika diperlukan
        // Contoh:
        // {
        //   model: Kriteria,
        //   as: 'kriteria',
        //   attributes: ['nama_kriteria'],
        // },
      ],
    });
      return { narapidanaData, totalItems };
  } catch (error) {
      throw new Error(error.message);
  }
};


export const getNarapidanaById = async (id) => {
  try {
    const narapidana = await Narapidana.findByPk(id, {
      include: [
        {
          model: TindakPidana,
          attributes: ['jenis_tindak_pidana']
        },
        {
          model: User,
          attributes: ['nama_lengkap'], // Contoh atribut yang ingin diambil dari User
        },
      ]
    });

    console.log(JSON.stringify(narapidana));

    return narapidana;
  } catch (error) {
    throw error;
  }
};

export const updateNarapidana = async (id, narapidanaData) => {
  try {
    const narapidana = await Narapidana.findByPk(id);
    if (!narapidana) {
      throw new Error('Narapidana not found');
    }
    await narapidana.update(narapidanaData);
    return narapidana;
  } catch (error) {
    throw error;
  }
};

export const deleteNarapidana = async (id) => {
  try {
    const narapidana = await Narapidana.findByPk(id);
    if (!narapidana) {
      throw new Error('Narapidana not found');
    }
    await narapidana.destroy();
    return { message: 'Narapidana deleted successfully' };
  } catch (error) {
    throw error;
  }
};
