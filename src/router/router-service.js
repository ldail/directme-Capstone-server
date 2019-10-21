const routerService = {
  getAllTags(db) {
    return db('tags').select('*');
  },
  getAllListings(db) {
    return db('listings').select('*');
  },
  getAllTagListings(db) {
    return db('tag_listings').select('*');
  },
  getAllSubcategoryLists(db) {
    return db('subcategory_list').select('*');
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
  getListingsByTagId(db,tag_id) {
    return db('listings')
      .join('tag_listings', 'tag_listings.listing_id','listings.id')
      .select('*')
      .where('tag_listings.tag_id',tag_id);
  },
  getListingsByListingId(db,listing_id) {
    return db('listings')
      .join('tag_listings', 'tag_listings.listing_id', 'listings.id')
      .select('*')
      .where('listings.id',listing_id);
  },
  
  getTagByName(db, name) {
    return db('tags').select('*').where({name});
  },
  getTagById(db, id) {
    return db('tags').select('*').where({id});
  },

  // getTagCountsByPopularity(db) {
  //   return db('tag_listings')
  //     .join('tags', 'tags.id','tag_listings.tag_id')
  //     .select('*');
  // }

  
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
  }
};

module.exports = routerService;