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
            return null; // Pengguna tidak ditemukan
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return null; // Kata sandi tidak cocok
        }
        return user;
    } catch (error) {
        throw new Error(`Error finding user: ${error.message}`);
    }
};