'use strict';

angular.module('angularTemplateRetrieverApp')
  .controller('MainCtrl', function ($scope, templateRetriever) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    templateRetriever.getTemplate('/views/templateOne.html')
    .then(function (template){
    	console.log(template);
    });
  });
