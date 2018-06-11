let express = require('express');
let router = express.Router();
const URL = require('url');
const USERS = require('../moduls/api/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get_users',(req,res)=>{
  let data = URL.parse(req.url,true).query;
  USERS.GET(data,res);
});

router.post('/add_user',(req,res)=>{
  let data = req.body;
  USERS.POST(data,res);
});

router.put('/update_user',(req,res)=>{
  let data = req.body;
  USERS.PUT(data,res);
});

router.delete('/delete_user',(req,res)=>{
    let data = req.body;
    console.log(data);
    USERS.DELETE(data,res);
});

module.exports = router;
