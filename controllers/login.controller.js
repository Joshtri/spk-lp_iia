// Ensure your package.json has the following line
// "type": "module"

import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import { login } from "../services/user.services.js";

export const loginPage = (req, res) => {
    const title ="Login";
    const messageLogin1 = req.flash('loginFail');
    const messageLogin2 = req.flash('loginFail2');
    const messageRegister = req.flash('infoRegister');
    res.render('index', {
        title,
        messageLogin1,
        messageLogin2,
        messageRegister
    });
};

export const SignUpPage = (req, res) => {
    const title = "Sign Up"
   
    const messageLogin1 = req.flash('loginFail');
    const messageLogin2 = req.flash('loginFail2');
    
    res.render('sign_up', {
        title,
        messageLogin1,
        messageLogin2
    });
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await login(username, password);
        // Jika login berhasil, Anda dapat mengirimkan respons yang sesuai ke klien
        // res.status(200).json({ message: "Login successful", user });
        
        // Simpan informasi pengguna dalam sesi
        req.session.user = user;
        res.redirect('/adm/dashboard');
    } catch (error) {

        // Login gagal, berikan pesan error
        await req.flash('messageProtect', 'Username atau password salah.');
        res.redirect('/');
        console.log(error);
        // res.status(401).json({ message: "Login failed", error: error.message });
    }
};


export const createUser = async (req, res) => {
    const { username, nama_lengkap, password,email } = req.body;
  
    try {
      // Enkripsi password menggunakan bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = await User.create({
        username,
        password: hashedPassword, // Simpan password yang sudah dienkripsi ke database
        nama_lengkap,
        email,
        role: 'wali pemasyarakatan' // Default role admin, sesuai dengan schema
      });

      await req.flash('messageCreateSuccess', `Akun pengguna berhasil dibuat ${newUser.username}`)
      res.redirect('/');

    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Gagal membuat akun pengguna', error: error.message });
    }
};