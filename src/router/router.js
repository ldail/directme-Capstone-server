const express = require('express');
const router = express.Router();
const bodyParser = express.json();
const routerService = require('./router-service');
const xss = require('xss');

router

  .get('/tags', (req,res,next) => {
    routerService.getAllTags(req.app.get('db'))
      .then(response => {
        return res.json(response);
      })
      .catch(next);
  })
  .get('/hub_links',(req,res,next) => {
    routerService.getHubLinks(req.app.get('db'))
      .then(response => {
        return res.json(response);
      })
      .catch(next);
  })
  .get('/hub_tags',(req,res,next) => {
    routerService.getHubTags(req.app.get('db'))
      .then(response => {
        return res.json(response);
      })
      .catch(next);
  })
  .get('/listings',(req,res,next) => {
    routerService.getListings(req.app.get('db'))
      .then(response => {
        return res.json(response);
      })
      .catch(next);
  })

  .get('/tagCount',(req,res,next) => {
    routerService.getTagCountsByPopularity(req.app.get('db'))
      .then(response => {
        return res.json(response);
      })
      .catch(next);
  })


  .post('/tags/:name',(req,res,next) => {
    let {name} = req.params;
    if (name == null) {
      return res.status(400).json({message: `Missing name in request`});
    }
    let serialized = xss(name);
    routerService.addTag(req.app.get('db'),serialized)
      .then(response => {
        return res.json(response);
      })
      .catch(next);
  })

  .post('/tag_listings',bodyParser,(req,res,next) => {
    let {newTagListing} = req.body;

    if (!newTagListing || !newTagListing.tag_id || !newTagListing.listing_id) {
      return res.status(400).json({message: `The send request was wrong!`});
    }
    routerService.addTagListing(req.app.get('db'),newTagListing)
      .then(response => {
        return res.json(response);
      })
      .catch(next);
  })

  .post('/listings',bodyParser,(req,res,next) => {
    let listing = req.body;

    if (!listing || !listing.name || !listing.url || !listing.description) {
      return res.status(400).json({message: `The send request was wrong!`});
    }
    let serialized = {
      name: xss(listing.name),
      url: xss(listing.url),
      description: xss(listing.description)
    };

    routerService.addListing(req.app.get('db'),serialized)
      .then(response => {
        return res.json(response);
      })
      .catch(next);
  });


module.exports = router;