'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('MainCtrl', function($scope) {
        var self = this;

        self.init = function() {
            $scope.max = 9;
            self.load($scope.max);
        };

        self.load = self.reload = function(max) {
            $scope.data = [];
            for (var i = 0; i < max; i ++) {
                $scope.data[i] = [];
                for (var j = 0; j <= i; j ++) {
                    $scope.data[i][j] = (i + 1) * (j + 1);
                }
            }
        };

        $scope.reload = self.reload;

        self.init();
    });
