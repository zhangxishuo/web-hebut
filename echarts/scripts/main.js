// 定义AngularJS模块
angular.module('web', []);
// 定义控制器
angular.module('web')
    .controller('mainCtrl', function($scope, $interval) {
        let self = this;

        // 初始化
        self.init = function() {
            // 初始化数据
            self.data = {
                xAxis: [],
                tempatures: [],
                type: 'line'
            };
            // 初始化渲染图表
            self.myChart = echarts.init(document.getElementById('app'));
            self.myChart.setOption(self.getOption());
            // 每个1s重新渲染一次图表
            $interval(function() {
                self.renderChart();
            }, 1000);
        };

        // 激活类别
        self.activeType = function(type) {
            // 设置图表类型
            self.data.type = type;
            // 重新渲染图表
            self.myChart.setOption(self.getOption());
        };

        // 当前图表类型是否激活
        self.activeOrNot = function(type) {
            // 判断是否相等
            return self.data.type === type;
        };

        // 渲染图表
        self.renderChart = function() {
            // 获取一个随机的温度
            let tempature = Math.round(Math.random() * 100 % 40 * 100) / 100;
            // 获取当前时间
            let time = new Date().toLocaleTimeString();
            // 如果长度大于20，移除坐标首元素
            if (self.data.xAxis.length >= 20) {
                self.data.xAxis.shift();
            }
            // 如果长度大于20，移除首数据
            if (self.data.tempatures.length >= 20) {
                self.data.tempatures.shift();
            }
            // 添加数据
            self.data.xAxis.push(time);
            self.data.tempatures.push(tempature);
            // 渲染
            self.myChart.setOption(self.getOption());
        };

        // 获取图表的options
        self.getOption = function() {
            return {
                title: {
                    text: '天津市北辰区实时温度',
                    subtext: 'Powered By：张喜硕'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: self.getXAxis()
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: [{
                    name: '温度曲线',
                    type: self.getType(),
                    data: self.getData(),
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    },
                    symbolSize: function(data) {
                        return 15;
                    },
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                                offset: 0,
                                color: 'rgb(0, 0, 0)'
                            }, {
                                offset: 1,
                                color: 'rgb(0, 0, 0)'
                            }])
                        }
                    }
                }]
            };
        };

        // 获取X轴
        self.getXAxis = function() {
            return self.data.xAxis
        };

        // 获取数据
        self.getData = function() {
            return self.data.tempatures;
        };

        // 获取图表类型
        self.getType = function() {
            return self.data.type;
        };

        // 传给视图
        $scope.activeType = self.activeType;
        $scope.activeOrNot = self.activeOrNot;

        self.init();
    });