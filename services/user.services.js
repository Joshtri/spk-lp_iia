import bcrypt from 'bcrypt';
import * as userRepository from '../repositories/user.repository.js';


// Membuat admin baru
export const createAdmin = async (adminData) => {
    const { nama_lengkap, username, password, email, role } = adminData;

    try {
        // Check if username already exists
        const usernameExists = await userRepository.checkUsernameExists(username);
        if (usernameExists) {
            throw new Error("Username yang Anda buat telah terdaftar.");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Prepare adminField object for database insertion
        const adminField = {
            nama_lengkap,
            username,
            password: hashedPassword,
            email,
            role
        };

        // Insert admin data into the database
        const insertResult = await userRepository.insertAdmin(adminField);
        return insertResult;
    } catch (error) {
        throw error;
    }
};


export const login = async (username, password) => {
    try {
        const user = await userRepository.findUserByUsernameAndPassword(username, password);
        if (!user) {
            throw new Error("Invalid username or password");
        }
        // Lakukan logika lain jika login berhasil
        return user;
    } catch (error) {
        throw new Error(`Login failed: ${error.message}`);
    }
};