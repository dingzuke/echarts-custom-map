$(function(){
	var myChart = echarts.init(document.getElementById('map'));
	$.get('./Echarts/myMap.json',function(geoJson){
		echarts.registerMap('myMap',geoJson,{});
		var option = {
			backgroundColor: '#020933',
            title: {
                top: 20,
                text: '视频监控区',
                subtext: '',
                x: 'center',
                textStyle: {
                    color: '#ccc'
                }
            },
		    tooltip: {
		        trigger: 'item',
            	formatter: (item) => {
					if(item.componentSubType === "effectScatter"){
						return `${item.name} 监控`
					}
				}
			},
			visualMap: {
				show: false,
                min: 0,
                max: 1000000,
                right: 100,
                seriesIndex: 1,
                type: 'piecewise',
				bottom: 100,
				itemSymbol: 'triangle',
                textStyle: {
                    color: '#FFFF'
                },
                splitList: [{
                        gt: 0,
                        color: '#FA8C16',
                    }
                ]
            },
			geo: {
                map: 'myMap',
                // aspectScale: 0.75, //长宽比
                // zoom: 1.1,
                // roam: false,
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
						shadowColor: 'transparent',
						borderWidth: 0,
                        shadowOffsetX: 0,
                        shadowOffsetY: 25
                    },
                    emphasis: {
                        areaColor: 'transparent',
                        borderWidth: 0,
                        color: 'transparents',
                        label: {
                            show: false
                        }
                    }
                },
            },
		    series: [
		        {
		        	name: '统计',
		            type: 'map',
		            mapType: 'myMap',
		            aspectScale: 0.85,  //地图长度比
		            // data: [
		            // 	{name: '食堂', value: 1},
	                //     {name: '宿舍', value: 3},
					// 	{name: '车间', value: 20},
					// 	{name: '控区', value: 0},
					// 	{name: '会议室', value: 0},
					// 	// {name: '园区', value: 0},
					// ],
					hoverable: false,
					effect : {
						show: true,
						shadowBlur : 0
					},
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },

                    itemStyle: {
                        normal: {
                            borderColor: '#2ab8ff',
                            borderWidth: 1.5,
                            areaColor: '#12235c'
                        },
                        emphasis: {
                            areaColor: '#2AB8FF',
                            borderWidth: 0,
                            color: 'green'
                        }
                    },
                    zoom: 1.1,
                    roam: false,
					markPoint : {//数据全是markPoint
					symbolSize: 25,
					// 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'  可以自定义图
					symbol:'image://./img/carme.png',
                    rippleEffect: {
                        period: 7,
                        scale: 1,
                        brushType: 'fill'
                    },
                    hoverAnimation: true,
						itemStyle: {
							normal: {
								color: '#ffff',
								shadowBlur: 10,
								shadowColor: '#333'
							}
						},
						data: [{
								// name: 'test',
								x: 81,
								y: 336,
							},
							{
								// name: 'test',
								x: 226,
								y: 249,
							},
							{
								// name: 'test',
								x: 105,
								y: 455,
							},
							{
								// name: 'test',
								x: 521,
								y: 262,
							}
						]
					}
				},
				{
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
					showEffectOn: 'render',
					symbolSize: 25,
					// 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'  可以自定义图
					symbol:'image://./img/carme.png',
                    rippleEffect: {
                        period: 7,
                        scale: 1,
                        brushType: 'fill'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#ffff',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [{
						name: '车间',
						value: [-253.502,
							29.5372, 29999]
					},{
						name: '控区',
						value: [-253.2129,
							28.8086, 29999]
					}]
                }                         
		    ]
		};
		myChart.setOption(option);
		// 监听点击事件
		myChart.on('click', function(item) {
			console.log('===>', item)
			if(item.componentSubType === "effectScatter"){
				return alert (`${item.name} 监控 预览`)
			}
		})
	});
});