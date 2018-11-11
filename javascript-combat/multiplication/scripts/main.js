// 定义AngularJS模块
angular.module('web', []);
// 定义控制器
angular.module('web')
    .controller('mainCtrl', function($scope) {
        let self = this;

        // 初始化
        self.init = function() {
            $scope.length = 9;
            self.load($scope.length);
        };

        // 重新渲染数据
        self.load = self.reload = function(length) {
            // 初始化数据
            let data = [];
            // 循环
            for (let i = 0; i < length; i ++) {
                // 初始化行
                data[i] = [];
                // 初始化列
                for (let j = 0; j <= i; j ++) {
                    // 设置内容
                    data[i][j] = (j + 1) + '*' + (i + 1) + '=' + (i + 1) * (j + 1);
                }
            }
            // 传给视图
            $scope.data = data;
        };

        // 传给视图
        $scope.reload = self.reload;

        self.init();
    });
