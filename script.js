// Stubbed data
var data = [
    { id: 1, name: "India", cities: [
        { id: 1, name: "Mumbai", countryId: 1 },
        { id: 2, name: "Delhi", countryId: 1 },
        { id: 3, name: "Bangalore", countryId: 1 }
        ] },
    { id: 2, name: "USA", cities: [
        { id: 4, name: "New York", countryId: 2 },
        { id: 5, name: "Los Angeles", countryId: 2 },
        { id: 6, name: "Chicago", countryId: 2 }
    ] }
];

var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope, $http, $log, $location, $anchorScroll) {
        // Call the Web Service and retrieve the data
        // Here: Stubbed data, due to the lack of a live server
        $scope.countries = data;
        // Attach method scrollTo to scope object
        $scope.scrollTo = function(countryName) {
            // Append the country name to the URL
            // prefixed with a hash (#) sign
            $location.hash(countryName);
            // AnchorScroll service will read the hash fragment from the URL
            // and scroll to the element with the matching id on the page
            $anchorScroll();
        };
    });

