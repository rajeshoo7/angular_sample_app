let myapp= angular.module("Myapp",[]);


let mycontroller= function($scope){


    $scope.message="Hello"
}

myapp.controller("MyController",mycontroller);



let JSONController = function($scope){


    let Student={


        FirstName: "Rajesh",
        LastName: "Kammari",
        Email: "S534844@NWMISSOURI.EDU"


    }
$scope.Student=Student;

}
myapp.controller("Student",JSONController);