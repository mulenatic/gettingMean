angular
    .module('loc8rApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl (loc8rData, geolocation, $scope) {

    var vm = this;
    vm.pageHeader = {
	title: 'Loc8r',
	strapline: 'Find places to work with wifi near you!'
    };
    
    vm.sidebar = {
	content: "Looking for wifi and a seat etc etc."
    };

    vm.message = "Checking your location!";

    vm.getData = function(position) {
	var lat = position.coords.latitude,
	    lng = position.coords.longitude;
	vm.message = "Searching for nearby places";
	loc8rData
	    .locationByCoords(lat, lng)
	    .success(function(data) {
		vm.message = data.length > 0 ? "" : "No locations found";
		vm.data = { locations: data };
	    })
	    .error(function(e) {
		vm.message = "Sorry, something's gone wrong";
		consoloe.log(e);
	    });
    };

    vm.showError = function(error) {
	$scope.$apply(function() {
	    vm.message = error.message;
	});
    };

    vm.noGeo = function() {
	$scope.$apply(function() {
	    vm.message = "Geolocation not supported by this browser.";
	});
    };

    vm.getData({coords: { latitude: "50.9168", longitude: "6.8131" }});
    //geolocation.getPosition(vm.getData, vm.showError, vm.noGeo);

}
