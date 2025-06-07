<template>
	<view class="content">
		<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"80rpx 40rpx 80rpx","background":"url(http://codegen.caihongy.cn/20221222/a305ebbb65bc41878a9f57af878bf029.gif) no-repeat center top / 100% 100%,linear-gradient(180deg, rgba(124,210,235,1) 0%, rgba(33,121,222,1) 100%),#fff","height":"100%"}'>
			<view :style='{"padding":"60rpx 40rpx","boxShadow":"0px 8rpx 0px #eee","borderRadius":"24rpx","background":"#fff","display":"block","width":"100%","position":"relative","height":"auto"}'>
				<image :style='{"width":"200rpx","margin":"0 auto 24rpx auto","borderRadius":"8rpx","objectFit":"cover","display":"none","height":"200rpx"}' src="http://codegen.caihongy.cn/20221114/3aeec87ad33541ebae3d5427ea9016a5.jpg" mode="aspectFill"></image>
				<view :style='{"width":"100%","margin":"0 0 40rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="username" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#333","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
				</view>
				<view :style='{"width":"100%","margin":"0 0 40rpx","borderRadius":"12rpx","background":"none","height":"auto"}' class="uni-form-item uni-column">
					<input v-model="password" :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#333","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
				</view>
				<picker v-if="roleNum>1" :style='{"boxShadow":"0px 0px 0px #2c77cb","margin":"0 0 48rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' @change="optionsChange" :value="index" :range="options">
					<view class="uni-picker-type" :style='{"width":"100%","padding":"0 24rpx","lineHeight":"88rpx","fontSize":"28rpx","color":"#767676"}'>{{options[index]}}</view>
				</picker>
				<button class="btn-submit" @tap="onLoginTap" type="primary" :style='{"padding":"0px","margin":"0 auto 24rpx","borderColor":"#ef6d0d","color":"#fff","display":"block","borderRadius":"40rpx","background":"linear-gradient(270deg, rgba(228,172,215,1) 0%, rgba(42,239,233,1) 100%),#2aefe9","borderWidth":"0 0 0px","width":"60%","lineHeight":"80rpx","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'>登录</button>
				<view class="links" :style='{"boxShadow":"0px 8rpx 0px #eee","padding":"0 0 8rpx","margin":"0px 0 0px 0","alignItems":"flex-start","textAlign":"center","display":"block","justifyContent":"center","borderRadius":"0 0 24rpx 24rpx","flexWrap":"wrap","left":"5%","background":"#fff","width":"90%","position":"absolute","height":"auto"}'>
					<view class="link-highlight" @tap="onRegisterTap('jumin')" :style='{"border":"0px solid #e9be70","padding":"16rpx 8rpx 16rpx","margin":"80rpx 8rpx 16rpx 0","color":"#888","borderRadius":"0px","textAlign":"center","background":"none","display":"inline-block","width":"auto","fontSize":"28rpx","order":"2"}'>注册居民</view>
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
				username: '',
				password: '',
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型'
				],
                		optionsValues: [
					'',
                    			'jumin',
				],
				index: 0,
				roleNum:0
			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登陆用户类型')
					return
				}
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
                uni.removeStorageSync("useridTag");
				uni.setStorageSync("token", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
                if(res.data.touxiang) {
                    uni.setStorageSync('headportrait', res.data.touxiang);
                } else if(res.data.headportrait) {
                    uni.setStorageSync('headportrait', res.data.headportrait);
                }
				// 保存用户id
				uni.setStorageSync("userid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("role", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
