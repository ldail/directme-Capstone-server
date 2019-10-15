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


  getTagByName(db, name) {
    return db('tags').select('*').where({name});
  },
  getTagById(db, id) {
    return db('tags').select('*').where({id});
  }
};

module.exports = routerService;