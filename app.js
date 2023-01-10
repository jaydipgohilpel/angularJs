var appModule = angular.module("appmodule", []);

appModule.controller("app-controller", function ($scope, $location) {
  // alert("hellow word");
  $scope.name2 = "Jaydip Gohil";
  $scope.city2 = "Bhavnagar";
  $scope.details = function () {
    return (
      "this is function Exampele  : " + $scope.name2 + " From " + $scope.city2
    );
  };
  $scope.city3 = ["delhi", "mumbai", "bhavnagar"];
  $scope.cityJson = [
    { name: "jaydip", city: "surat" },
    { name: "jaydip", city: "surat" },
    { name: "jaydip", city: "surat" },
    { name: "jaydip", city: "surat" },
  ];
  $scope.colors = ["red", "blue", "black", "green", "yellow", "gray", "pink"];
  $scope.url = $location.absUrl();
  $scope.protocol = $location.protocol();
  $scope.host = $location.host();
  $scope.port = $location.port();

  $scope.flag = false;
  $scope.click = function () {
    if ($scope.flag) {
      $scope.message = "this is Click Event Geneterated ";
      $scope.flag = false;
    } else {
      $scope.message = "Click Event";
      $scope.flag = true;
    }
  };
});

appModule.run(function ($rootScope) {
  $rootScope.name2 = "hello rootscope";
  $rootScope.maths = function () {
    return (
      $rootScope.name2 + " this variable calling  with the help of function"
    );
  };
});

appModule.directive("customDireactive", function () {
  var title = "<h2>title from customDireactive</h2>";
  return { template: title };
});

appModule.directive("selectCity", function () {
  var select = "<select ng-model='cityFromDirective'>";
  select += "<option>surat</option>";
  select += "<option>surat</option>";
  select += "<option>surat</option>";
  select += "<option>surat</option>";

  return { template: select };
});
