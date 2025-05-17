import db from "../config/dbConfig.js";
import Narapidana from "../models/narapidana.model.js";
import TindakPidana from "../models/pidana.model.js";
import User from "../models/user.model.js";
import { Op } from "sequelize";

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

export async function countByWaliIds(waliIds) {
  return await Narapidana.count({
    where: {
      waliId: {
        [Op.in]: waliIds,
      },
    },
  });
}

export async function countGroupedByWaliAll() {
  return await Narapidana.findAll({
    attributes: [
      "waliId",
      [db.fn("COUNT", db.col("Narapidana.id_narapidana")), "total"]
    ],
    include: [
      {
        model: User,
        as: "wali",
        attributes: ["nama_lengkap"]
      }
    ],
    group: ["waliId", "wali.id_user", "wali.nama_lengkap"],
    raw: true,
    nest: true,
  });
}


export async function countGroupedByKoordinator() {
  return await Narapidana.findAll({
    attributes: [
      [db.col("wali.koordinator.id_user"), "koordinatorId"],
      [db.col("wali.koordinator.nama_lengkap"), "nama_koordinator"],
      [db.fn("COUNT", db.col("Narapidana.id_narapidana")), "total"],
    ],
    include: [
      {
        model: User,
        as: "wali",
        attributes: [],
        include: [
          {
            model: User,
            as: "koordinator",
            attributes: [],
          },
        ],
      },
    ],
    group: ["wali.koordinator.id_user", "wali.koordinator.nama_lengkap"],
    raw: true,
  });
}

export async function countGroupedByRegister(waliId) {
  return await Narapidana.findAll({
    where: { waliId },
    attributes: [
      "register",
      [db.fn("COUNT", db.col("id_narapidana")), "total"],
    ],
    group: ["register"],
    raw: true,
  });
}

// export async function countGroupedByStatus(waliId) {
//   return await Narapidana.findAll({
//     where: { waliId },
//     attributes: ['status', [db.fn('COUNT', db.col('id')), 'total']],
//     group: ['status'],
//     raw: true,
//   });
// }

export async function countGroupedByWali(waliIds) {
  return await Narapidana.findAll({
    where: { waliId: { [Op.in]: waliIds } },
    attributes: ["waliId", [db.fn("COUNT", db.col("id_narapidana")), "total"]],
    include: [{ model: User, as: "wali", attributes: ["nama_lengkap"] }],
    group: ["waliId", "wali.id_user"],
    raw: true,
    nest: true,
  });
}

export const countByWaliId = async (waliId) => {
  try {
    return await Narapidana.count({
      where: { waliId },
    });
  } catch (error) {
    throw new Error(error.message);
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
