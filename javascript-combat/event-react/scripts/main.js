// 定义AngularJS模块
angular.module('web', []);
// 定义控制器
angular.module('web')
    .controller('mainCtrl', function($scope) {
        let self = this;

        // 初始化
        self.init = function() {
            $scope.data = [
                {name: '计算机组成', value: '35元'},
                {name: '数据结构', value: '45元'},
                {name: '计算机网络', value: '55元'},
                {name: 'Java', value: '65元'},
                {name: '算法分析', value: '75元'}
            ];
            $scope.selectedOptions = [];
        };

        // 项改变触发的方法
        self.changeItem = function() {
            $scope.items = $scope.selectedOptions;
            $('#myModal').modal();
        };

        // 传给视图
        $scope.changeItem = self.changeItem;

        self.init();
    });
