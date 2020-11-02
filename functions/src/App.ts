
import express = require('express');
const app = express();
const router = express.Router();

router.use(function (req, res, next) {
    next()
  })

  
router.get('/abc', function(req, res,) {
    res.send(`test request api ${req.rawHeaders}`);
});

app.post('/', (req, res) => res.send(`todo somthing logic here`))

app.use('/user', router)


export { app }  