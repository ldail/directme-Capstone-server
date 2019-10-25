const app = require('../src/app');
const knex= require('knex');
const { expect } = require('chai');
const supertest = require('supertest');
const { makeTags } = require('./tags.fixtures');
const { makeHubLinks} = require('./hub_links.fixtures');
const { makeHubTags } = require('./hub_tags.fixtures');
const { makeTagListings } = require('./tag_listings.fixtures');
const { makeListings } = require('./listings.fixtures');

describe('Directme endpoints',() => {
  let db;

  before('make knex instane', () => {
    db = knex({
      client: 'pg',
      connection: process.env.DATABASE_URL_TEST
    });
    app.set('db',db);
  });

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db.raw('TRUNCATE tags, listings, tag_listings, hub_links, hub_tags'));

  describe(`GET /api`, () => {
    context (`GET /api/tags`, () => {
      context('Given there is nothing in the database', () => {
        it ('Returns an empty array', () => {
          return supertest(app)
            .get('/api/tags')
            .expect(200, []);
        });
      });

      context('Given there are tags in the database', () => {
        let tags = makeTags();
        let expected = [
          {id: 1, name: 'Programming'},
          {id: 2, name: 'Javascript'},
          {id: 3, name: 'Monkey'}
        ];
        beforeEach('insert tags', () => db.insert(tags).into('tags'));
        afterEach('empty the db', () => db.raw('TRUNCATE tags'));
        it (`Returns an array of objects with an 'id' and 'name'`, () => {
          return supertest(app)
            .get('/api/tags')
            .expect(200)
            .expect(response => {
              expect(response.body).to.eql(expected)
            });
        });
      });
    });

    context (`GET /api/hub_links`, () => {
      context('Given there is nothing in the database', () => {
        it ('Returns an empty array', () => {
          return supertest(app)
            .get('/api/hub_links')
            .expect(200, []);
        });
      });
      context('Given there are hub_links in the database', () => {
        let hubLinks = makeHubLinks();
        beforeEach('insert hub_links', () => db.insert(hubLinks).into('hub_links'));
        afterEach('empty the db', () => db.raw('TRUNCATE hub_links'));
        it (`Returns an array of objects with an 'hub_id' and 'sub_hub'`, () => {
          return supertest(app)
            .get('/api/hub_links')
            .expect(200)
            .expect(response => {
              expect(response.body).to.eql(hubLinks);
            });
        });
      });
    });

    context (`GET /api/hub_tags`, () => {
      context('Given there is nothing in the database', () => {
        it ('Returns an empty array', () => {
          return supertest(app)
            .get('/api/hub_tags')
            .expect(200, []);
        });
      });
      context('Given there are hub_links in the database', () => {
        let hubTags = makeHubTags();
        beforeEach('insert hub_tags', () => db.insert(hubTags).into('hub_tags'));
        afterEach('empty the db', () => db.raw('TRUNCATE hub_tags'));
        it (`Returns an array of objects with an 'hub_id' and 'tag_id'`, () => {
          return supertest(app)
            .get('/api/hub_tags')
            .expect(200)
            .expect(response => {
              expect(response.body).to.eql(hubTags);
            })
        });
      });
    });

    context (`GET /api/listings`, () => {
      beforeEach('take everything out',() => db.raw('TRUNCATE tags, listings, tag_listings, hub_links, hub_tags'));
      context('Given there is nothing in the database', () => {
        it ('Returns an empty array', () => {
          return supertest(app)
            .get('/api/listings')
            .expect(200, []);
        });
      });
      context('Given there are listings and tag_listings in the database', () => {
        let listings = makeListings();
        let tag_listings = makeTagListings();
        let tags = makeTags();
        let expected = [
          {name: 'Official react website', url: 'http://reactjs.com', description: 'great react website', id: 1, listing_id: 1, tag_id: 2},
          {name: 'Official react website', url: 'http://reactjs.com', description: 'great react website', id: 1, listing_id: 1, tag_id: 3},
          {name: 'Javascript site', url: 'javascript site', description: null, id: 2, listing_id: 2, tag_id: 3},
          {name: 'Javascript site', url: 'javascript site', description: null, id: 2, listing_id: 2, tag_id: 1}
        ];

        beforeEach('insert listings', () => db.insert(listings).into('listings'));
        beforeEach('insert tag_listings', () => db.insert(tag_listings).into('tag_listings'));
        beforeEach('insert tags',() => db.insert(tags).into('tags'));
        afterEach('empty the db', () => db.raw('TRUNCATE listings, tag_listings, tags'));
        it (`Returns an array of objects with a 'name','url','descriptin','id','listing_id','tag_id', even if no description is provided.`, () => {
          return supertest(app)
            .get('/api/listings')
            .expect(200)
            .expect(response => {
              expect(response.body).to.eql(expected);
            });
        });
      });
    });
  });

  describe(`POST /api`, () => {
    context(`api/tags/:name`,() => {
      context('Given no data is provided', () => {
        it ('Returns a 400 error', () => {
          return supertest(app)
            .post('/api/tags/')
            .expect(400);
        });
      });
      context('Given proper data is provided', () => {
        it ('returns the new tag', () => {
          let expected = {id: 1, name: 'henry'}
          return supertest(app)
            .post('/api/tags/henry')
            .expect(200)
            .expect(res => res === expected);
        });
      });
    });

    context(`api/tag_listings/:name`,() => {
      context('Given no data is provided', () => {
        it ('Returns a 400 error', () => {
          return supertest(app)
            .post('/api/tags_listings/')
            .expect(400);
        });
      });
      context('Given proper data is provided', () => {
        it ('returns a 204', () => {
          let sendData = {listing_id: 3, tag_id: 4};
          return supertest(app)
            .post('/api/tag_listings/')
            .send(sendData)
            .expect(204);
        });
      });
    });

    context(`api/listings/`,() => {
      context('Given no data is provided', () => {
        it ('Returns a 400 error', () => {
          return supertest(app)
            .post('/api/listings/')
            .expect(400);
        });
      });
      context('Given proper data is provided', () => {
        beforeEach(() => db.raw('TRUNCATE tags, listings, tag_listings, hub_links, hub_tags'));
        afterEach(() => db.raw('TRUNCATE tags, listings, tag_listings, hub_links, hub_tags'));
        it ('returns a 200 and returns the resulting data', () => {
          let sendData = {name: 'Test link', url:'http://url.com', description: 'Great site', id: 1};
          return supertest(app)
            .post('/api/listings/')
            .send(sendData)
            .expect(200)
            .expect(res => {
              console.log(res.body);
              expect(res.body).to.eql(sendData);
            });
        });
      });
    });
  });
});