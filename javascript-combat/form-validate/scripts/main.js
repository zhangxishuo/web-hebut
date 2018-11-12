// 定义AngularJS模块
angular.module('web', []);
// 定义控制器
angular.module('web')
    .controller('mainCtrl', function($scope) {
        let self = this;

        // 初始化
        self.init = function() {
            $scope.data = {
                username: '',
                password: ''
            };
        };

        // 重置
        self.reset = function() {
            self.init();
        };

        // 传给视图
        $scope.reset = self.reset;

        self.init();
    });
