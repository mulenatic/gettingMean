angular.module('loc8rApp', []);

var locationListCtrl = function($scope) {
    $scope.data = {
	locations: [{
	    name: 'Burger Queen',
	    address: 'Teststr. 1',
	    rating: 3,
	    facilities: ['Beer', 'Food' ],
	    distance: '0.3042',
	    _id: '23423rwdfasdfas23324fsfasdfa'
	},{
	    name: 'Burger Queen 2',
	    address: 'Teststr. 2',
	    rating: 3,
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
	    rating: 3,
	    facilities: ['Beer', 'Food' ],
	    distance: '0.1042',
	    _id: '23423rwdfasdfas23324fsfasdfd'
	},{
	    name: 'Burger Queen 5',
	    address: 'Teststr. 5',
	    rating: 3,
	    facilities: ['Beer', 'Food' ],
	    distance: '0.0042',
	    _id: '23423rwdfasdfas23324fsfasdfe'
	}]
    };
}

angular
    .module('loc8rApp')
    .controller('locationListCtrl', locationListCtrl);
