angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.register', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      }
    }
  })

  .state('tabsController.leaderboard', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/leaderboard.html',
        controller: 'leaderboardCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('page', {
    url: '/page5',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('tabsController.newRegistration', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/newRegistration.html',
        controller: 'newRegistrationCtrl'
      }
    }
  })

  .state('signup', {
    url: '/page7',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.nesta', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/nesta.html',
        controller: 'nestaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});