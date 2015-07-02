'use strict';

var app = angular.module('VoteTube', ['ui.router']);

app.constant('FURL', 'https://votetube.firebaseio.com/');
app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');


  var Main = {
    name: 'main',
    url: '/',
    templateUrl: '../views/main.html'
  };

  var Nav = {
    name: 'main.nav',
    url: '/',
    views: {
        'nav@main': {
          templateUrl: '../views/nav.html'
        }
    }
  };

  var Content = {
    name: 'main.content',
    url: '/',
    views: {
        'content@main': {
          templateUrl: '../views/content.html'
        }
    }
  };

  $stateProvider.state(Main);
  $stateProvider.state(Nav);
  $stateProvider.state(Content);
});

// Completed: Design
// Users

// 1. Youtube url
// 2. Make a user.
//



// Youtube url
// List of suggestions
//  -filtered by upvotes (Popularity)
// upvote/downvote (If you upvote, you can't downvote [Reddit voting])
// if(youtubeVideoEnds){
// add the next video in queue, archive that suggestion from the List
// }
