
<template>
<view>
<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
	<view class="content">
		<view class="container" :style='{"minHeight":"100vh","width":"100%","padding":"160rpx 0 132rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221222/748292afaf1a42f98ea39cb94757b451.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221222/c6ef4a2042384649921c28b8b4f18cac.png) fixed repeat-y center bottom","height":"auto"}'>
						<swiper :style='{"border":"0px dotted #f7de91","boxShadow":"inset 0px 0px 0px 0px #f9edd9","padding":"0px 0 0px ","margin":"0px auto","borderColor":"#333","borderRadius":"24rpx","background":"rgba(255,255,255,.6)","borderWidth":"2rpx","width":"calc(100% - 40rpx)","borderStyle":"solid","height":"396rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
				<swiper-item :style='{"width":"100%","borderRadius":"0px 0px 10% 10%","background":"none","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index">
					<image :style='{"width":"calc(100% - 40rpx)","margin":"16rpx auto","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"360rpx"}' mode="aspectFill" v-if="swiper.substring(0,4)=='http'" :src="swiper"></image>
					<image :style='{"width":"calc(100% - 40rpx)","margin":"16rpx auto","objectFit":"cover","borderRadius":"24rpx","display":"block","height":"360rpx"}' mode="aspectFill" v-else :src="baseUrl+swiper"></image>
				</swiper-item>
			</swiper>
									            <view :style='{"padding":"0px 24rpx 24rpx","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}' class="detail-content">
				<view :style='{"padding":"0px 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"40rpx 0 24rpx 0","borderColor":"#e9be70","borderRadius":"24rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","justifyContent":"space-between","height":"auto"}' class="detail-list-item price priceFavor">
					<view :style='{"border":"2rpx solid #e9be70","boxShadow":"inset 0px 40rpx 64rpx 0px #fff","margin":"6rpx 12rpx 0","color":"#fec55d","borderRadius":"100%","textAlign":"center","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"48rpx","height":"64rpx"}' v-if="storeupFlag==1" class="cuIcon-favorfill" @click="shoucang"></view>
					<view :style='{"border":"2rpx solid #e9be70","boxShadow":"inset 0px 40rpx 64rpx 0px #fff","margin":"6rpx 12rpx 0","color":"#fec55d","borderRadius":"100%","textAlign":"center","background":"none","display":"block","width":"64rpx","lineHeight":"64rpx","fontSize":"48rpx","height":"64rpx"}' v-if="storeupFlag==0" class="cuIcon-favor" @click="shoucang"></view>
				</view>

				<view :style='{"boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","padding":"0 0 8rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"188rpx","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"188rpx"}' class="lable">医院名称：</view>
					<view :style='{"padding":"0px 20rpx 20rpx 0","margin":"16rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.yiyuanmingcheng}}</view>
				</view>
				<view :style='{"boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","padding":"0 0 8rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"188rpx","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"188rpx"}' class="lable">医生姓名：</view>
					<view :style='{"padding":"0px 20rpx 20rpx 0","margin":"16rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.yishengxingming}}</view>
				</view>
				<view :style='{"boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","padding":"0 0 8rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="detail-list-item title">
					<view :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"188rpx","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"188rpx"}' class="lable">科室名称：</view>
					<view :style='{"padding":"0px 20rpx 20rpx 0","margin":"16rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}' class="text">{{detail.keshimingcheng}}</view>
				</view>

				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","padding":"0 0 8rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"188rpx","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"188rpx"}'>医院地址：</view>
					<view  class="text" :style='{"padding":"0px 20rpx 20rpx 0","margin":"16rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.yiyuandizhi}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","padding":"0 0 8rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"188rpx","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"188rpx"}'>性别：</view>
					<view  class="text" :style='{"padding":"0px 20rpx 20rpx 0","margin":"16rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.xingbie}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","padding":"0 0 8rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"188rpx","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"188rpx"}'>职位：</view>
					<view  class="text" :style='{"padding":"0px 20rpx 20rpx 0","margin":"16rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.zhiwei}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","padding":"0 0 8rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"188rpx","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"188rpx"}'>挂号费：</view>
					<view  class="text" :style='{"padding":"0px 20rpx 20rpx 0","margin":"16rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.guahaofei}}</view>
				</view>
				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","padding":"0 0 8rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"188rpx","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"188rpx"}'>就诊时间：</view>
					<view  class="text" :style='{"padding":"0px 20rpx 20rpx 0","margin":"16rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.jiuzhenshijian}}</view>
				</view>



				<view class="detail-list-item" :style='{"boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","padding":"0 0 8rpx","margin":"20rpx 0 20rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<view class="lable" :style='{"padding":"0 20rpx 0 0","color":"#333","textAlign":"right","width":"188rpx","lineHeight":"80rpx","fontSize":"28rpx","minWidth":"188rpx"}'>医生简介</view>
					<view class="text" :style='{"padding":"0px 20rpx 20rpx 0","margin":"16rpx 0 0","lineHeight":"48rpx","fontSize":"28rpx","color":"rgb(0, 0, 0)"}'>{{detail.yishengjianjie}}</view>
				</view>





				<view class="bottom-content bg-white tabbar border shop" :style='{"width":"100%","padding":"20rpx 0px","flexWrap":"wrap","background":"none","display":"flex","height":"auto"}'>

					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="userid&&isAuth('jiuzhenxinxi','挂号')" @tap="onAcrossTap('guahaoxinxi','','','')" class="cu-btn bg-brown round shadow-blur" >挂号</button>
					<button :style='{"border":"0","padding":"0 20rpx","margin":"0","color":"rgb(255, 255, 255)","background":"rgb(255, 170, 51)","width":"auto","fontSize":"28rpx","height":"80rpx"}' v-if="!userid&&isAuthFront('jiuzhenxinxi','挂号')" @tap="onAcrossTap('guahaoxinxi','','','')" class="cu-btn bg-brown round shadow-blur" >挂号</button>
				</view>
			</view>

		</view>
	</view>
</mescroll-uni>
</view>
</template>

<script>
	export default {
		data() {
			return {
				btnColor: ['#409eff','#67c23a','#909399','#e6a23c','#f56c6c','#356c6c','#351c6c','#f093a9','#a7c23a','#104eff','#10441f','#a21233','#503319'],
				id: '',
                userid: '',
				detail: {},
				swiperList: [],
				commentList: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 3, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				user: {},
				storeupFlag: 0,
				count: 0,
				timer: null
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {
			this.id = options.id;
            if(options.userid) {
                this.userid = options.userid;
            }
		},
		async onShow(options) {
			// 渲染数据
			this.init();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			this.btnColor = this.btnColor.sort(()=> {
				return (0.5-Math.random());
			});
			this.getStoreup();
		},
		destroyed: function() {
			//window.clearInterval(this.inter);
		},
		methods: {
			// 支付
			onPayTap(){
				uni.setStorageSync('paytable','jiuzhenxinxi');
				uni.setStorageSync('payObject',this.detail);
				this.$utils.jump('../pay-confirm/pay-confirm?type=1')
			},
            onDetailTap(item) {
                uni.setStorageSync("useridTag",this.userid);
                this.$utils.jump(`./detail?id=${item.id}&userid=`+this.userid)
            },
			// 收藏
			async getStoreup() {
				let params = {
					page: 1,
					limit: 1,
					refid : this.id,
					tablename : 'jiuzhenxinxi',
					userid: this.user.id,
					type: 1,
				}
				let res = await this.$api.list(`storeup`, params);
				this.storeupFlag = res.data.list.length;
			},
			async shoucang(){
				let _this = this;
				let params = {
					page: 1,
					limit: 1,
					refid : _this.detail.id,
					tablename : 'jiuzhenxinxi',
					userid: _this.user.id,
					type: 1,
				}
				let res = await _this.$api.list(`storeup`, params);
				if (res.data.list.length == 1) {
					let storeupId = res.data.list[0].id;
					uni.showModal({
						title: '提示',
						content: '是否取消',
						success: async function(res) {
							if (res.confirm) {
								await _this.$api.del('storeup', JSON.stringify([storeupId]));
								_this.$utils.msg('取消成功');
								_this.getStoreup();
							}
						}
					});
					return;
				}
				uni.showModal({
					title: '提示',
					content: '是否收藏',
					success: async function(res) {
						if (res.confirm) {
							await _this.$api.add('storeup', {
								userid: _this.user.id,
								name: _this.detail.yiyuanmingcheng,
								picture: _this.swiperList[0],
								refid: _this.detail.id,
								tablename: 'jiuzhenxinxi',
                                type: 1
							});
							_this.$utils.msg('收藏成功');
							_this.getStoreup();
						}
					}
				});
			},
			// 跨表
			onAcrossTap(tableName,crossOptAudit,statusColumnName,tips,statusColumnValue){
				uni.setStorageSync('crossTable','jiuzhenxinxi');
				uni.setStorageSync(`crossObj`, this.detail);
				uni.setStorageSync(`statusColumnName`, statusColumnName);
				uni.setStorageSync(`statusColumnValue`, statusColumnValue);
				uni.setStorageSync(`tips`, tips);
				if(statusColumnName!=''&&!statusColumnName.startsWith("[")) {
					var obj = uni.getStorageSync('crossObj');
					for (var o in obj){
						if(o==statusColumnName && obj[o]==statusColumnValue){
							this.$utils.msg(tips);
							return
						}
					}
				}
				this.$utils.jump(`../${tableName}/add-or-update?cross=true`);
			},
			// 获取详情
			async init(){
				let res = await this.$api.info('jiuzhenxinxi', this.id);
				this.detail = res.data;
				// 轮播图片
				this.swiperList = this.detail.xiangpian ? this.detail.xiangpian.split(",") : [];
			},

			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},

			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				mescroll.resetUpScroll()
			},

			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				mescroll.endSuccess(mescroll.size, this.hasNext);

            },



			onChatTap() {
				this.$utils.jump('../chat/chat')
			},
			// 下载
			download(url){
				let _this = this;
				url=_this.$base.url +  url;
				uni.downloadFile({
					url: url,
					success: (res) => {
						if (res.statusCode === 200) {
							_this.$utils.msg('下载成功');
							 window.open(url);
						}
					}
				});
			},
			//
			onCartTabTap() {
				this.$utils.tab('../shop-cart/shop-cart')
			},
			// 添加评论
			async onCommentTap() {
				this.$utils.jump(`../discussjiuzhenxinxi/add-or-update?refid=${this.id}`)
			},
			onSHTap() {
				this.$refs.popup.open()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.seat-list {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		background: #FFFFFF;
		margin: 20upx;
		border-radius: 20upx;
		padding: 20upx;
		font-size: 30upx;
		.seat-item {
			width: 33.33%;
			display: flex;
			align-items: center;
			flex-direction: column;
			margin-bottom: 20upx;
	
			.seat-icon {
				width: 50upx;
				height: 50upx;
				margin-bottom: 10upx;
			}
		}
	}
	
	audio {
		display: flex;
		flex-direction: column;
	}
	
	.audio /deep/ .uni-audio-default {
		width: inherit;
	}
</style>
