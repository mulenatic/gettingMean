angular.module('loc8rApp', []);

var loc8rData = function() {

    return [{
	name: 'Burger Queen',
	address: 'Teststr. 1',
	rating: 1,
	facilities: ['Beer', 'Food' ],
	distance: '0.3042',
	_id: '23423rwdfasdfas23324fsfasdfa'
    },{
	name: 'Burger Queen 2',
	address: 'Teststr. 2',
	rating: 2,
	facilities: ['Beer', 'Food' ],
	distance: '0.4042',
	_id: '23423rwdfasdfas23324fsfasdfb'
    },{
	name: 'Burger Queen 3',
	address: 'Teststr. 3',
	rating: 3,
	facilities: ['Beer', 'Food' ],
	distance: '0.6042',
	_id: '23423rwdfasdfas23324fsfasdfc'
    },{
	name: 'Burger Queen 4 ',
	address: 'Teststr. 4',
	rating: 4,
	facilities: ['Beer', 'Food' ],
	distance: '0.1042',
	_id: '23423rwdfasdfas23324fsfasdfd'
    },{
	name: 'Burger Queen 5',
	address: 'Teststr. 5',
	rating: 5,
	facilities: ['Beer', 'Food' ],
	distance: '0.0042',
	_id: '23423rwdfasdfas23324fsfasdfe'
    }];
}

var locationListCtrl = function($scope, loc8rData) {
    $scope.data = { locations: loc8rData };
}


var _isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

var formatDistance = function() {
    return function(distance) {
	var numDistance, unit;
	if (distance && _isNumeric(distance)) {
	    if (distance > 1) {
		numDistance = parseFloat(distance).toFixed(1);
		unit = 'km';
	    } else {
		numDistance = parseInt(distance * 1000, 10);
		unit = 'm';
	    }
	    return numDistance + unit;
	} else {
	    return "?";
	}
    };
};

var ratingStars = function() {
    return {
	scope: {
	    thisRating: '=rating'
	},
	templateUrl: '/Angular/rating-stars.html'
    };
};

angular
    .module('loc8rApp')
    .controller('locationListCtrl', locationListCtrl)
    .filter('formatDistance', formatDistance)
    .directive('ratingStars', ratingStars)
    .service('loc8rData', loc8rData);
