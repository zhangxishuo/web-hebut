// 定义AngularJS模块
angular.module('web', []);
// 定义控制器
angular.module('web')
    .controller('mainCtrl', function($scope) {
        let self = this;

        // 初始化
        self.init = function() {
            // 初始化参数
            $scope.params = {
                start: 1000,
                end: 9999
            };
            // 加载数据
            self.load($scope.params);
        };

        // 重新渲染数据
        self.load = self.reload = function(params) {
            // 初始化数组
            let array = [];
            let sum = 0;
            // 获取所有符合条件的数据
            for (let i = params.start; i <= params.end; i ++) {
                if (i % 17 === 0 && i % 13 === 0) {
                    array.push(i);
                    sum += i;
                }
            }
            // 计算二维数组应有的行数
            let row = Math.ceil(array.length / 10);
            // 初始化二维数组
            let data = [];
            // 循环
            for (let i = 0; i < row; i ++) {
                // 初始化行
                data[i] = [];
                // 为元素赋值
                for (let j = 0; j < 10; j ++) {
                    // 到末尾了，跳出循环
                    if (angular.isUndefined(array[i * 10 + j])) {
                        break;
                    }
                    data[i][j] = array[i * 10 + j];
                }
            }
            // 传给视图
            $scope.array = array;
            $scope.data = data;
            $scope.sum = sum;
        };

        // 传给视图
        $scope.reload = self.reload;

        self.init();
    });
