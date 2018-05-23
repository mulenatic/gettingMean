/* Get home page */
module.exports.homelist = function(req, res) {
    res.render('index', { 
    title: 'Loc8r - find a place to work with wifi',
    strapline: 'Find places to work with wifi near you!' });
};

/* GET Location info page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', { 
    title: 'Starbups:',
    pageHeader: { title: 'Starcups' },
    sidebar: {
            context: 'is on Loc8r beacause it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or you don\'t please leave a review to help other people just like you.'
            },
    location: {
      name: 'Starcups',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false
      }, {
        days: 'Saturday',
        opening: '8:00am',
        closing: '5:00pm',
        closed: false
      }, {
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Simon Holmes',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText: 'What a great place',
      }, {
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '16 June 2013',
        reviewText: 'Okay.'
      }]
     }         
   });
};

/* GET add review page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', { title: 'Add review' });
};

module.exports.homelist = function(req, res) {
    res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
        title: 'Loc8r',
        strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading RG6 1PS',
            reating: 3,
            facilities: [ 'Hot drinks', 'Food', 'Premium wifi' ],
            disatance: '100m'
        }, {
            name: 'Starcups 2',
            address: '125 High Street, Reading RG6 1PS',
            reating: 4,
            facilities: [ 'Hot drinks', 'Food', 'Premium wifi' ],
            disatance: '100m'
        }, {
            name: 'Starcups 3',
            address: '125 High Street, Reading RG6 1PS',
            reating: 1,
            facilities: [ 'Hot drinks', 'Food', 'Premium wifi' ],
            disatance: '100m'
        }]

    });
};
