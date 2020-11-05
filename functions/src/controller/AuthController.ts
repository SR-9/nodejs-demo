
import express = require('express');


import { AuthSevice } from '../service';


const authController = express.Router();

const authService = new AuthSevice();


authController.post('/login', async (req, res) => {

    try {
        let result = await authService.login(req.body)

    res.send(result);
    } catch(e) {
        res.send(e);
    }
});

export { authController }