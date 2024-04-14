const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./utils/database');


const routeLogin = require('./routes/login');
const routeNarapidana = require('./routes/narapidana');
const routeAdmin = require('./routes/admin');
const routeDashboard = require('./routes/dashboard');
const routeKriteria = require('./routes/kriteria');
const routeMerge = require('./routes/merge');

const app = express();
const PORT = 3005;

db.connect();

// Menggunakan method-override
app.use(methodOverride('_method'));

app.use(
    session({
      proxy: true,
      secret: 'secret',
      resave: false,
      saveUninitialized: true,

    
      
    })
);

// Inisialisasi Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware untuk mengatur sesi dan cookie
app.use(cookieParser());
// Flash Messages
app.use(flash({ sessionKeyName: 'flashMessage' }));
// Menambahkan middleware body-parser pada aplikasi
app.use(bodyParser.json());
// parse request to body-parser
app.use(bodyParser.urlencoded({ extended : true}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.set("views", [
    path.join(__dirname, "/views"),
    path.join(__dirname, "/views/narapidana"),
    path.join(__dirname, "/views/admin"),
    path.join(__dirname, "/views/kriteria"),
    path.join(__dirname, "/views/agama"),
    path.join(__dirname, "/views/narapidana"),
    path.join(__dirname, "/views/tindak_pidana"),
    path.join(__dirname, "/views/other"),
]);



// Menggunakan rute secara eksplisit untuk setiap grup rute
app.use('/', routeLogin);
app.use('/adm', routeDashboard);
app.use('/data', routeNarapidana, routeAdmin, routeKriteria, routeMerge);

// Menyediakan akses ke file statis di folder 'public'
app.use(express.static(path.join(__dirname, "/public")));

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
