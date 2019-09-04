'use strict';

var app = angular.module('robo', ['ui.router']);

app.config(function ($stateProvider,$urlRouterProvider) {
  // An array of state definitions
  var states = [
    {
      name: 'home',
      url: '/home',
      component: 'home'
    },
    {
      name: 'robo',
      url: '/robo',
      component: 'robo'
    },
    {
      name: 'projeto',
      url: '/projeto',
      component: 'projeto'
    },
    {
      name: 'arma',
      url: '/arma',
      component: 'arma'
    },
    {
      name: 'robocup',
      url: '/robocup',
      component: 'robocup'
    },
    {
      name: 'galeria',
      url: '/galeria',
      component: 'galeria'
    },
    {
      name: 'contato',
      url: '/contato',
      component: 'contato'
    }
  ]

  // Loop over the state definitions and register them
  states.forEach(function (state) {
    $stateProvider.state(state);
  });
  // $stateProvider
  //   .state("otherwise", { url : '/home'});
  $urlRouterProvider.otherwise('/home')
});