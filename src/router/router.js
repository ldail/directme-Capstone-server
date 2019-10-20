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
  })
  .get('/getHubLinks',(req,res,next) => {
    routerService.getHubLinks(req.app.get('db'))
      .then(response => {
        return res.json(response);
      });
  })
  .get('/getHubTags',(req,res,next) => {
    routerService.getHubTags(req.app.get('db'))
      .then(response => {
        return res.json(response);
      });
  })
  .get('/listings',(req,res,next) => {
    routerService.getListings(req.app.get('db'))
      .then(response => {
        return res.json(response);
      });
  })
  .get('/listings/tag/:tag_id',(req,res,next) => {
    let {tag_id} = req.params;
    console.log(tag_id);
    routerService.getListingsByTagId(req.app.get('db'),tag_id)
      .then(response => {
        console.log(response);
        return res.json(response);
      });
  })
  .get('/listings/listing/:listing_id',(req,res,next) => {
    let {listing_id} = req.params;
    routerService.getListingsByListingId(req.app.get('db'),listing_id)
      .then(response => {
        return res.json(response);
      });
  })
  .get('/listings/tags/:tag_ids',(req,res,next) => {
    let {tag_ids} = req.params;
    res.end();
  })
  .get('/tagCount',(req,res,next) => {
    routerService.getTagCountsByPopularity(req.app.get('db'))
      .then(response => {
        console.log(response);
        return res.json(response);
      });
  });


module.exports = router;