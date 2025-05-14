import db from "../config/dbConfig.js";
import Narapidana from "../models/narapidana.model.js";
import TindakPidana from "../models/pidana.model.js";
import User from "../models/user.model.js";

export const totalNarapidana = async () => {
  try {
    return await Narapidana.count();
  } catch (error) {
    throw error;
  }
};

export const createNarapidana = async (narapidanaData) => {
  try {
    return await Narapidana.create(narapidanaData);
  } catch (error) {
    throw error;
  }
};

// narapidanaRepository.js

export const getNarapidana = async (skip, limit, waliId) => {
  try {
    const whereClause = waliId ? { waliId } : {}; // hanya filter jika waliId ada

    const { rows: narapidanaData, count: totalItems } =
      await Narapidana.findAndCountAll({
        where: whereClause,
        offset: skip,
        limit: limit,
        include: [
          {
            model: User,
            as: "wali", // sesuai relasi
            attributes: ["id_user", "nama_lengkap", "email"],
          },
        ],
        order: [["createdAt", "DESC"]],
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
          attributes: ["jenis_tindak_pidana"],
        },
        {
          model: User,
          as: "wali", // ✅ WAJIB karena kamu pakai alias 'wali' di relasi

          attributes: ["nama_lengkap"], // Contoh atribut yang ingin diambil dari User
        },
      ],
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
      throw new Error("Narapidana not found");
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
      throw new Error("Narapidana not found");
    }
    await narapidana.destroy();
    return { message: "Narapidana deleted successfully" };
  } catch (error) {
    throw error;
  }
};
