'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
angular.module('webApp')
    .controller('MainCtrl', function($scope, $http) {
        var self = this;

        self.init = function() {
            $scope.user = {
                username: '',
                password: ''
            };
            $scope.showSuccess = false;
            $scope.showError = false;
        };

        self.showSuccess = function() {
            $scope.showSuccess = true;
            $scope.showError = false;
        };

        self.showError = function() {
            $scope.showSuccess = false;
            $scope.showError = true;
        };

        self.login = function(user) {
            var url = 'http://127.0.0.1:8080/login';
            $http.post(url, user)
                .then(function success() {
                    console.log('登录成功');
                    self.showSuccess();
                }, function error() {
                    console.log('登录失败');
                    self.showError();
                });
        };

        $scope.login = self.login;

        self.init();
    });
