'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('AboutCtrl', function($scope) {
        var self = this;

        self.init = function() {
            $scope.data = {
                place: '北京',
                wages: '',
                house: false,
                vocation: ''
            };
        };

        self.init();
    });
