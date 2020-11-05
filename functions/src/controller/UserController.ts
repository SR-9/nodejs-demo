
import express = require('express');


import { UserSevice } from '../service';


const userController = express.Router();

const userSevice = new UserSevice();


userController.get('/', async (req, res,) => {

    let page = parseInt(<string>(req.query.page), 10) ?? 0;
    let limit = parseInt(<string>(req.query.limit), 10) ?? 10;

    const users = await userSevice.getUsers(page, limit);

    res.send(users);
});

export { userController }