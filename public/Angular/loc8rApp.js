angular.module('loc8rApp', []);

var loc8rData = function($http) {
    return $http.get('/api/locations?lng=6.8131&lat=50.9168&maxDistance=20');
}

var locationListCtrl = function($scope, loc8rData) {
    loc8rData
	.then(function(data) {
	    $scope.data = { locations: data };
	})
	.catch(function(e) {
	    consoloe.log(e);
	});
};


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
