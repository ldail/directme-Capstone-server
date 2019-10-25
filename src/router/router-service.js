const routerService = {
  getAllTags(db) {
    return db('tags').select('*');
  },
  getHubLinks(db) {
    return db('hub_links').select('*');
  },
  getHubTags(db) {
    return db('hub_tags').select('*');
  },
  getListings(db) {
    return db('listings')
      .join('tag_listings','tag_listings.listing_id','listings.id')
      .select('*');
  },
  
  getTagCountsByPopularity(db) {
    return db('tag_listings')
      .join('tags', 'tags.id','tag_listings.tag_id')
      .select(db.raw('tag_listings.tag_id as id, tags.name, count(tag_id) as count'))
      .groupBy('tag_listings.tag_id','tags.name')
      .orderByRaw('count(tag_id) desc');
  },

  addTag(db,insert) {
    return db('tags').insert({name: insert}).returning('*')
      .then(rows => rows[0]);
  },

  addTagListing(db,listing) {
    return db('tag_listings').insert(listing).returning('*')
      .then(rows => rows[0]);
  },

  addListing(db, listing) {
    return db('listings').insert(listing).returning('*')
      .then(rows => rows[0]);
  }
};

module.exports = routerService;