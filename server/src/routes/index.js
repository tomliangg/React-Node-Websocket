// routes/index.js
import express from 'express';
var router = express.Router();

// generate random string
export const genId = () => Math.random().toString(36).substring(7)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', (req, res) => {
  res.send([
    { id: genId() },
    { id: genId() },
    { id: genId() },
    { id: genId() },
    { id: genId() },
  ]);
})

export default router;
