import Defs from './constants/constants'
import MongoDB from './models/models'
MongoDB.initializeCollection();
const express = require('express');
const dotenv = require('dotenv')

dotenv.config();

const port = 5000;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', async (req, res) => {
    const meta = new MongoDB(Defs.NAME_DB_META);
    const arrMeta = await meta.getAllList();

    console.log(arrMeta)

    res.status(200).json(arrMeta);
})

// app.get('/', (req, res) => {
//     const userdb = new MongoDB(Defs.NAME_DB_USER);
//     const A = userdb.insertData();

//     console.log(A)

//     res.status(200).json(A);

// })


app.listen(port, () => {
    console.log(`Server is on ${port}...`);
})
