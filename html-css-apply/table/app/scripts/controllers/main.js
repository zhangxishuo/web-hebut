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
            self.getAllStudents();
        };

        self.getAllStudents = function() {
            $http.get('data/students.json')
                .then(function success(response) {
                    $scope.list = response.data;
                    self.render($scope.list);
                }, function error() {
                    console.log('数据请求失败');
                });
        };

        self.remove = function(stu) {
            $scope.list = $scope.list.filter(function(value) {
                return value.id !== stu.id;
            });
            self.render($scope.list);
        };

        self.render = function(list) {
            var names = [];
            var scores = [];
            angular.forEach(list, function(value) {
                names.push(value.name);
                scores.push(value.score);
            });

            var chart = echarts.init(document.getElementById('chart'));

            var option = {
                title: {
                    text: '学生成绩分析图表'
                },
                legend: {
                    data: ['成绩']
                },
                xAxis: {
                    data: names
                },
                yAxis: {},
                series: [{
                    name: '成绩',
                    type: 'bar',
                    data: scores
                }]
            };

            chart.setOption(option);
        };

        $scope.remove = self.remove;

        self.init();
    });
