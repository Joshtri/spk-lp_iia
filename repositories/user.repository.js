import db from '../config/dbConfig.js';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt'

// export const getAdmin = async()=>{

//     const query = "SELECT * FROM admin";

//     return new Promise((resolve, reject) => {
//         db.query(query, [offset, limit], (error, results) => {
//           if (error) reject(error);
//           else resolve(results);
//         });
//     });
// };

export async function getWalisByKoordinator(koordinatorId) {
  return await User.findAll({
    where: {
      role: 'wali pemasyarakatan',
      koordinatorId: koordinatorId, // pastikan kamu menyimpan `koordinatorId` di table user
    },
  });
}

export async function countGroupedByRole() {
  return await User.findAll({
    attributes: ['role', [db.fn('COUNT', db.col('id_user')), 'total']],
    group: ['role'],
    raw: true,
  });
}



// // Mengecek apakah username sudah terdaftar
// export const checkUsernameExists = (username) => {
//     return new Promise((resolve, reject) => {
//         const queryCheckUsername = "SELECT * FROM admin WHERE username = ?";
//         db.query(queryCheckUsername, [username], (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result.length > 0);
//             }
//         });
//     });
// };

// // Menyisipkan data admin baru ke dalam database
// export const createUser = (adminField) => {
//     return new Promise((resolve, reject) => {
//         const queryInsert = "INSERT INTO admin SET ?";
//         db.query(queryInsert, adminField, (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

export const totalUser = async ()=>{
    try {
        return await User.count();
    } catch (error) {
        throw new error;
    }
};



export const findUserByUsernameAndPassword = async (username, password) => {
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            console.log("Username tidak ditemukan:", username);
            return null;
        }
        
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            console.log("Password tidak cocok. Password input:", password);
            console.log("Password hashed DB:", user.password);
            return null;
        }
        return user;
    } catch (error) {
        throw new Error(`Error finding user: ${error.message}`);
    }
};


export const updateUserPassword = async (userId, newPassword) => {
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            throw new Error('User not found');
        }

        // Update password
        user.password = newPassword;

        await user.save();

        return user;
    } catch (error) {
        throw error;
    }
};


export const countWaliByKoordinator = async (koordinatorId) => {
  try {
    return await User.count({
      where: {
        role: 'wali pemasyarakatan',
        koordinatorId: koordinatorId,
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};


export const deleteUserById = async (userId) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                id_user: userId
            }
        });
        return deletedUser;
    } catch (error) {
        throw error;
    }
};

export async function countByRole(role) {
    return await User.count({ where: { role } });
}
