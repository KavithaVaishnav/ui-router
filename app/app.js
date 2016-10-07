var myApp = angular.module('myApp',['ui.router'])
myApp.config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
	$stateProvider
	  .state('desc',{
		url: "/desc",
		templateUrl : "partials/desc.html",
		
	})
	   .state('home',{
		url: "/home",
		templateUrl : "partials/home.html",
		
	})
	   
})