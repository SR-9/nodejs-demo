import { app }from './../App';

app.get('/user', (req, res) => res.send(`get user `))