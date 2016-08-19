var app = angular.module("aboutApp", ['ngAnimate']);

app.directive('fadeIn', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, $element, attrs) {

            $element.on('load', function () {

                //  $element.addClass("wow animated bounceInLeft");
                //  $element.removeClass("hide");
                //  $element.removeClass("hide");
                // console.log("hilfkgmnknfg");

            });
        }
    };
});
app.controller("aboutCtrl", function ($scope) {
    $scope.members = [{
        img: "www/images/people/sam-flipped.jpg",
        name: "Jahir",
        id: 1,
        post: "Managing Director",
        index: "01",
        des: "Sam has vast knowledge of the digital landscape, and knows exactly how to lead us to the most brilliant results possible.She's known for her high standards, honest approach,and the ability to relate and engage with clients.Sam’s love for fashion and gaming has taken a back seat with a handson toddler now in the mix which is proving to be much more fun and rewarding."
    },
        {
            img: "www/images/people/euge-flipped.jpg",
            name: "mohim",
            id: 2,
            post: "ceo",
            index: "02",
            des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur delectus distinctio doloribus eligendi esse eum eveniet hic iusto libero magnam molestiae nam neque, nisi nobis perferendis quod reprehenderit tenetur."
        }];
    $scope.img = $scope.members[0].img;
    $scope.post = $scope.members[0].post;
    $scope.des = $scope.members[0].des;

    console.log("hi");

    $scope.day = function (d) {

        $scope.img = d.img;
        $scope.des = d.des;
        $scope.post = d.post;

    }

});

