const app = require('../src/app');
const knex= require('knex');
const { expect } = require('chai');
const supertest = require('supertest');
const { makeTags } = require('./tags.fixtures');
const { makeHubLinks} = require('./hub_links.fixtures');
const { makeHubTags } = require('./hub_tags.fixtures');

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
        beforeEach('insert tags', () => db.insert(tags).into('tags'));
        afterEach('empty the db', () => db.raw('TRUNCATE tags'));
        it (`Returns an array of objects with an 'id' and 'name'`, () => {
          let expected = [
            {id: 1, name: 'Programming'},
            {id: 2, name: 'Javascript'},
            {id: 3, name: 'Monkey'}
          ];
          return supertest(app)
            .get('/api/tags')
            .expect(200, expected);
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
        afterEach('empty the db', () => db.raw('TRUNCATE tags'));
        it (`Returns an array of objects with an 'id' and 'name'`, () => {
          let expected = [
            {id: 1, name: 'Programming'},
            {id: 2, name: 'Javascript'},
            {id: 3, name: 'Monkey'}
          ];
          return supertest(app)
            .get('/api/tags')
            .expect(200, expected);
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
        let hubTags = makeHubTags();
        beforeEach('insert hub_links', () => db.insert(hubTags).into('hub_links'));
        afterEach('empty the db', () => db.raw('TRUNCATE tags'));
        it (`Returns an array of objects with an 'id' and 'name'`, () => {
          let expected = [
            {id: 1, name: 'Programming'},
            {id: 2, name: 'Javascript'},
            {id: 3, name: 'Monkey'}
          ];
          return supertest(app)
            .get('/api/tags')
            .expect(200, expected);
        });
      });
    });


  });
});