const express = require('express');
const router = express.Router();
const bodyParser = express.json();
const routerService = require('./router-service');

router

  .get('/allTags', (req,res,next) => {
    routerService.getAllTags(req.app.get('db'))
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

  .get('/tagCount',(req,res,next) => {
    routerService.getTagCountsByPopularity(req.app.get('db'))
      .then(response => {
        console.log(response);
        return res.json(response);
      });
  })


  .post('/tags/:name',(req,res,next) => {
    let {name} = req.params;
    routerService.addTag(req.app.get('db'),name)
      .then(response => {
        return res.json(response);
      });
  })

  .post('/tag-listings',bodyParser,(req,res,next) => {
    let newTagListing = req.body;
    routerService.addTagListing(req.app.get('db'),newTagListing)
      .then(response => {
        return res.json(response);
      });
  })

  .post('/listings',bodyParser,(req,res,next) => {
    let listing = req.body;
    routerService.addListing(req.app.get('db'),listing)
      .then(response => {
        return res.json(response);
      });
  });


module.exports = router;