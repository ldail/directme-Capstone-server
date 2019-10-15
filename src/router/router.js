const express = require('express');
const router = express.Router();
const bodyParser = express.json();
const routerService = require('./router-service');

router
  .get('/allSubcategoryLists',(req,res,next) => {
    routerService.getAllSubcategoryLists(req.app.get('db'))
      .then(response => {
        return res.json(response);
      });
  })
  .get('/allTags', (req,res,next) => {
    routerService.getAllTags(req.app.get('db'))
      .then(response => {
        return res.json(response);
      });
  })
  .get('/getTagByName',(req,res,next) => {
    let {name} = req.params;
    routerService.getTagByName(req.app.get('db'),name)
      .then(response => {
        return res.json(response);
      });
  })
  .get('/getTagById/:id',(req,res,next) => {
    console.log('reached!');
    let {id} = req.params;
    routerService.getTagById(req.app.get('db'),id)
      .then(response => {
        return res.json(response);
      });
  });

module.exports = router;