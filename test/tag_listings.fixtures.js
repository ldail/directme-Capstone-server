function makeTagListings() {
  return [
    {listing_id: 1, tag_id: 2},
    {listing_id: 1, tag_id: 3},
    {listing_id: 2, tag_id: 3},
    {listing_id: 2, tag_id: 1}
  ];
}

module.exports = { makeTagListings };