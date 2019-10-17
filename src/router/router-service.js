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
  }
};

module.exports = routerService;