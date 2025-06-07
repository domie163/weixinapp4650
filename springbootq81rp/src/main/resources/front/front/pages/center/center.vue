<template>
	<view class="content">
		<view :style='{"minHeight":"100vh","padding":"0px 0 240rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221222/c6ef4a2042384649921c28b8b4f18cac.png) fixed no-repeat center bottom","display":"flex","width":"100%","position":"relative","height":"auto"}'>
			<view :style='{"padding":"160rpx 40rpx 0","boxShadow":"inset 0px 0px 0px 0px #f7dcab","margin":"0px auto 60rpx","borderColor":"#e9be70","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20221222/748292afaf1a42f98ea39cb94757b451.png) no-repeat center top / 100% auto","borderWidth":"0px 0px 0px 0px","display":"flex","width":"calc(100% - 0px)","borderStyle":"solid","height":"auto"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"block","width":"calc(100% - 200rpx)","height":"auto"}' v-if="tableName=='jumin'" class="userinfo">
					<image :style='{"minHeight":"240rpx","padding":"16rpx","margin":"0 0 20rpx","borderColor":"#999","borderRadius":"16rpx","objectFit":"cover","textAlign":"center","background":"rgba(255,255,255,.6)","borderWidth":"2rpx","width":"100%","borderStyle":"double"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"padding":"16rpx 16rpx 32rpx","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 auto","borderColor":"#999","flexDirection":"column","display":"flex","float":"left","justifyContent":"center","borderRadius":"24rpx","background":"rgba(255,255,255,.6)","borderWidth":"2rpx","width":"100%","borderStyle":"double","height":"auto"}' class="info">
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#ccc","margin":"0 0 0px","color":"#333","borderWidth":"0 0 2rpx","width":"90%","lineHeight":"60rpx","fontSize":"24rpx","borderStyle":"solid"}'>{{user.zhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#ccc","margin":"0 0 0px","color":"#333","borderWidth":"0 0 2rpx","width":"90%","lineHeight":"60rpx","fontSize":"24rpx","borderStyle":"solid"}' v-if="user.money">余额：{{user.money}}</view>
						<view :style='{"padding":"4rpx 8rpx","borderColor":"#ccc","margin":"0 0 0px","color":"#333","borderWidth":"0 0 0px","width":"90%","lineHeight":"60rpx","fontSize":"24rpx","borderStyle":"solid"}' v-if="user.jf||user.jf==0">积分：{{user.jf}}</view>
					</view>
				</view>
				<view :style='{"padding":"68rpx 0 0","alignItems":"flex-start","background":"none","display":"flex","width":"200rpx","float":"right","justifyContent":"center","height":"auto"}' class="setting">
					<view :style='{"border":"0","width":"72rpx","lineHeight":"72rpx","fontSize":"72rpx","color":"#333","borderRadius":"0"}' class="cuIcon-settings"></view>
				</view>
			</view>
		
		
			<view :style='{"padding":"40rpx","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 32rpx","borderColor":"#e9be70","borderRadius":"24rpx","flexWrap":"wrap","background":"none","borderWidth":"8rpx 2rpx 2rpx 2rpx","display":"flex","width":"calc(100% - 64rpx)","borderStyle":"double","height":"auto"}' class="list">

				<block v-for="item in menuList" v-bind:key="item.roleName">
					<block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.backMenu">
						<block v-bind:key="sort" v-for=" (child,sort) in menu.child">
							<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#ef8375 #f7b015 #86c790 #ffdc00","margin":"0 0 32rpx","alignItems":"center","display":"flex","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 4rpx","background":"linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(235,236,239,1) 100%)","width":"100%","lineHeight":"80rpx","borderStyle":"solid","height":"88rpx"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id)" class="li" hover-class="hover">
								<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#B492DC"}' :class="child.appFrontIcon"></view>
								<view :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}' class="text">{{child.menu}}</view>
								<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#333"}' class="cuIcon-right"></view>
							</view>
						</block>
					</block>
				</block>

				<view @tap="onPageTap('../shop-recharge/pay-confirm')" :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#ef8375 #f7b015 #86c790 #ffdc00","margin":"0 0 32rpx","alignItems":"center","display":"flex","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 4rpx","background":"linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(235,236,239,1) 100%)","width":"100%","lineHeight":"80rpx","borderStyle":"solid","height":"88rpx"}' class="li" hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#B492DC"}' class="cuIcon-moneybag"></view>
					<view class="text" :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>用户充值</view>
					<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#333"}' class="cuIcon-right"></view>
				</view>
				<view @tap="onPageTap('../chat/chat')" :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#ef8375 #f7b015 #86c790 #ffdc00","margin":"0 0 32rpx","alignItems":"center","display":"flex","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 4rpx","background":"linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(235,236,239,1) 100%)","width":"100%","lineHeight":"80rpx","borderStyle":"solid","height":"88rpx"}' class="li" hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#B492DC"}' class="cuIcon-service"></view>
					<view class="text" :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>在线客服</view>
					<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#333"}' class="cuIcon-right"></view>
				</view>
				<view @tap="onPageTap('../forum-add-or-update/forum-add-or-update')" :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#ef8375 #f7b015 #86c790 #ffdc00","margin":"0 0 32rpx","alignItems":"center","display":"flex","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 4rpx","background":"linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(235,236,239,1) 100%)","width":"100%","lineHeight":"80rpx","borderStyle":"solid","height":"88rpx"}' class="li"
				 hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#B492DC"}' class="cuIcon-scan"></view>
					<view class="text" :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>我要发贴</view>
					<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#333"}' class="cuIcon-right"></view>
				</view>
				<view @tap="onPageTap('../forum-my/forum-my')" :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#ef8375 #f7b015 #86c790 #ffdc00","margin":"0 0 32rpx","alignItems":"center","display":"flex","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 4rpx","background":"linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(235,236,239,1) 100%)","width":"100%","lineHeight":"80rpx","borderStyle":"solid","height":"88rpx"}' class="li"
				 hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#B492DC"}' class="cuIcon-scan"></view>
					<view class="text" :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>我的发贴</view>
					<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#333"}' class="cuIcon-right"></view>
				</view>
				<view @tap="onPageTap('../shop-cart/shop-cart')" :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#ef8375 #f7b015 #86c790 #ffdc00","margin":"0 0 32rpx","alignItems":"center","display":"flex","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 4rpx","background":"linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(235,236,239,1) 100%)","width":"100%","lineHeight":"80rpx","borderStyle":"solid","height":"88rpx"}' class="li" hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#B492DC"}' class="cuIcon-cart"></view>
					<view class="text" :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>购物车</view>
					<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#333"}' class="cuIcon-right"></view>
				</view>
				<view @tap="onPageTap('../shop-order/shop-order')" :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#ef8375 #f7b015 #86c790 #ffdc00","margin":"0 0 32rpx","alignItems":"center","display":"flex","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 4rpx","background":"linear-gradient(180deg, rgba(255,255,255,.1) 0%, rgba(235,236,239,1) 100%)","width":"100%","lineHeight":"80rpx","borderStyle":"solid","height":"88rpx"}' class="li" hover-class="hover">
					<view v-if="true" :style='{"width":"64rpx","lineHeight":"64rpx","fontSize":"56rpx","color":"#B492DC"}' class="cuIcon-order"></view>
					<view class="text" :style='{"width":"100%","padding":"0 20rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#333","flex":"1"}'>我的订单</view>
					<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#333"}' class="cuIcon-right"></view>
				</view>

			</view>
		</view>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
        iconArr: [
          'cuIcon-same',
          'cuIcon-deliver',
          'cuIcon-evaluate',
          'cuIcon-shop',
          'cuIcon-ticket',
          'cuIcon-cascades',
          'cuIcon-discover',
          'cuIcon-question',
          'cuIcon-pic',
          'cuIcon-filter',
          'cuIcon-footprint',
          'cuIcon-pulldown',
          'cuIcon-pullup',
          'cuIcon-moreandroid',
          'cuIcon-refund',
          'cuIcon-qrcode',
          'cuIcon-remind',
          'cuIcon-profile',
          'cuIcon-home',
          'cuIcon-message',
          'cuIcon-link',
          'cuIcon-lock',
          'cuIcon-unlock',
          'cuIcon-vip',
          'cuIcon-weibo',
          'cuIcon-activity',
          'cuIcon-friendadd',
          'cuIcon-friendfamous',
          'cuIcon-friend',
          'cuIcon-goods',
          'cuIcon-selection'
        ],
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(){
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		methods: {
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
</style>
