var app = angular.module('missBike', []);

app.controller('MissionBike',  function($scope, $http) {
  $scope.title = {
    main: "Mission",
    sub: "Bicycle Company"
  };

  $scope.active = 1;
  $scope.overlay = false;

  $scope.clickLeft = function(){
    $scope.active = $scope.active == 1 ? 1 : $scope.active - 1;
  }

  $scope.clickRight = function(){
    $scope.active = $scope.active == 5 ? 5 : $scope.active + 1;
    console.log("item " + $scope.active + "is active")
  }

  $scope.data = {};
  $http.get('http://seq-front-end-assessment.s3-website-us-west-2.amazonaws.com/catalog.json').then(function(data){
    $scope.data = data.data;
  });
});
