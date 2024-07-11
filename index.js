import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import session from 'express-session';
import flash from 'connect-flash';
import { fileURLToPath } from 'url';
import { createClient } from 'redis';
import connectRedis from 'connect-redis';


import routeLogin from './routes/login.route.js';
import routeNarapidana from './routes/narapidana.route.js';
import routeUser from './routes/user.route.js';
import routeDashboard from './routes/dashboard.route.js';
import routeKriteria from './routes/kriteria.route.js';
import routeSubKriteria from './routes/subKriteria.route.js';
import routePidana from './routes/pidana.route.js';

import db from './config/dbConfig.js';
const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const RedisStore = connectRedis(session);
// const client = createClient({
//   password: "FtB023d7IlaGW4gQHJHJqQBrmjQxG2lK",
//   socket: { 
//     host: "redis-10125.c74.us-east-1-4.ec2.cloud.redislabs.com",
//     port: "10125",
//   }
// });
// (async () => { await client.connect(); })();

// db.connect();

// Menggunakan method-override
app.use(methodOverride('_method'));

// Express Session
app.use(
  session({
    proxy: true,
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    name: 'spk_lp_iia',

  })
);
// Menyediakan akses ke file statis di folder 'public'
app.use(express.static(path.join(__dirname, "/public")));

// app.use('/bulma', express.static(path.join(__dirname, 'node_modules/bulma/css/')));
// app.use('/bulma-tooltip', express.static(path.join(__dirname, 'node_modules/bulma-tooltip/dist/css/')));

//use this as top path for accessing package.
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// app.use('/bulma-t')
// Middleware untuk mengatur sesi dan cookie
app.use(cookieParser());
// Flash Messages
app.use(flash({ sessionKeyName: 'flashMessage' }));
// Menambahkan middleware body-parser pada aplikasi
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.set("views", [
  path.join(__dirname, "/views"),
  path.join(__dirname, "/views/narapidana"),
  path.join(__dirname, "/views/user"),
  path.join(__dirname, "/views/kriteria"),
  path.join(__dirname, "/views/narapidana"),
  path.join(__dirname, "/views/pidana"),
  path.join(__dirname, "/views/other"),
]);

// Menggunakan rute secara eksplisit untuk setiap grup rute
app.use('/', routeLogin);
app.use('/adm', routeDashboard);
app.use('/data',  routeUser, routeKriteria, routeNarapidana,routeSubKriteria,routePidana);



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
