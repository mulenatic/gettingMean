/* Get home page */
module.exports.homelist = function(req, res) {
    res.render('index', { 
    title: 'Loc8r - find a place to work with wifi',
    strapline: 'Find places to work with wifi near you!' });
};

/* GET Location info page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', { title: 'Location info:' });
};

/* GET add review page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', { title: 'Add review' });
};

module.exports.homelist = function(req, res) {
    res.render('locations-list', {title : 'Home' });
}
