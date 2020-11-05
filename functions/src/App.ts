import { userController, authController } from './controller';
import express = require('express');
import bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/', (req, res) => res.send(`todo somthing logic here`))

app.use('/auth', authController)

app.use('/users', userController)


export { app }  