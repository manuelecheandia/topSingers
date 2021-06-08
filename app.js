let app = angular.module('singersApp', []);

app.controller('SingerController', function($scope){
    $scope.singers= [

        {"pic" : "images/beyonce.png" , "name" : "Beyonce" ,        "gender" : "female" , "quality" : "images/like.png"},
        {"pic" : "images/gaga.png" , "name" : "Lady Gaga" ,      "gender" : "female" , "quality" : "images/dislike.png"},
        {"pic" : "images/taylor.png" , "name" : "Taylor Swift",    "gender" : "female" , "quality" : "images/like.png"},
        {"pic" : "images/bruno.png" , "name" : "Bruno Mars" ,     "gender" : "male" , "quality" : "images/like.png"},
        {"pic" : "images/ariana.png" , "name" : "Arianna Grande" , "gender" : "female" , "quality" : "images/dislike.png"},
        {"pic" : "images/perry.png" , "name" : "Katty Perry" ,    "gender" : "female" , "quality" : "images/dislike.png"},
        {"pic" : "images/justin.png" , "name" : "Justin Bieber" ,  "gender" : "male" , "quality" : "images/dislike.png"},
        {"pic" : "images/selena.png" , "name" : "Selena Gomez" ,   "gender" : "female" , "quality" : "images/like.png"}

    ]
});
