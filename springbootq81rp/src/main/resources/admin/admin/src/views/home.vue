<template>
<div class="content">
	<div class="text" :style='{"margin":"50px auto","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","justifyContent":"center","display":"flex"}'>
			<div :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"40px","display":"flex"}' v-if="isAuth('feiyongxinxi','首页总数')">
				<div :style='{"width":"80px","borderRadius":"40px","background":"#1ba7a6","height":"80px"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{feiyongxinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>费用信息总数</div>
				</div>
			</div>
			<div :style='{"boxShadow":"0 1px 6px rgba(0,0,0,.3)","margin":"0 10px","borderRadius":"40px","display":"flex"}' v-if="isAuth('guahaoxinxi','首页总数')">
				<div :style='{"width":"80px","borderRadius":"40px","background":"#1ba7a6","height":"80px"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{guahaoxinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>挂号信息总数</div>
				</div>
			</div>
        </div>
        <div style="display: flex;align-items: center;width: 100%;margin-bottom: 10px;">
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('feiyongxinxi','首页统计')">
                <div id="feiyongxinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('feiyongxinxi','首页统计')">
                <div id="feiyongxinxiChart2" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('guahaoxinxi','首页统计')">
                <div id="guahaoxinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
        </div>
    </div>
</div>
</template>
<script>
//3
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            feiyongxinxiCount: 0,
            guahaoxinxiCount: 0,
		};
	},
  mounted(){
    this.init();
    this.getfeiyongxinxiCount();
    this.feiyongxinxiChat1();
    this.feiyongxinxiChat2();
    this.getguahaoxinxiCount();
    this.guahaoxinxiChat1();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    getfeiyongxinxiCount() {
        this.$http({
            url: `feiyongxinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.feiyongxinxiCount = data.data
            }
        })
    },

    feiyongxinxiChat1() {
      this.$nextTick(()=>{

        var feiyongxinxiChart1 = echarts.init(document.getElementById("feiyongxinxiChart1"),'macarons');
        this.$http({
            url: "feiyongxinxi/group/feiyongfenlei",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].feiyongfenlei);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].feiyongfenlei
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '费用分类统计',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                feiyongxinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    feiyongxinxiChart1.resize();
                };
            }
        });
      })
    },

    feiyongxinxiChat2() {
      this.$nextTick(()=>{
        // feiyongmingcheng feiyongmingcheng
        //  feiyongjine

        var feiyongxinxiChart2 = echarts.init(document.getElementById("feiyongxinxiChart2"),'macarons');
        this.$http({
            url: `feiyongxinxi/value/feiyongmingcheng/feiyongjine`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].feiyongmingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].feiyongmingcheng
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '费用金额统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                feiyongxinxiChart2.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    feiyongxinxiChart2.resize();
                };
            }
        });
      })
    },





    getguahaoxinxiCount() {
        this.$http({
            url: `guahaoxinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.guahaoxinxiCount = data.data
            }
        })
    },

    guahaoxinxiChat1() {
      this.$nextTick(()=>{

        var guahaoxinxiChart1 = echarts.init(document.getElementById("guahaoxinxiChart1"),'blue');
        this.$http({
            url: "guahaoxinxi/group/yuyueshijian",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].yuyueshijian);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].yuyueshijian
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '每日挂号人数统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'line',
                        smooth: true
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                guahaoxinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    guahaoxinxiChart1.resize();
                };
            }
        });
      })
    },






  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
