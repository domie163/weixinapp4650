<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","width":"100%","padding":"80rpx 40rpx 80rpx","background":"url(http://codegen.caihongy.cn/20221222/a305ebbb65bc41878a9f57af878bf029.gif) no-repeat center top / 100% 100%,linear-gradient(180deg, rgba(124,210,235,1) 0%, rgba(33,121,222,1) 100%),#2179de","height":"100%"}'>
		<view :style='{"padding":"60rpx 40rpx","boxShadow":"0px 0px 0px #ddd","borderRadius":"24rpx","background":"#fff","display":"block","width":"100%","height":"auto"}'>
			<image :style='{"width":"160rpx","margin":"0 auto 24rpx auto","borderRadius":"8rpx","display":"none","height":"160rpx"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" mode="aspectFill"></image>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='jumin'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#333","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.zhanghao"  type="text"  class="uni-input" name="" placeholder="账号" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='jumin'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#333","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.mima" type="password"  class="uni-input" name="" placeholder="密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='jumin'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#333","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' v-model="ruleForm.mima2" type="password" class="uni-input" name="" placeholder="确认密码" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='jumin'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#333","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.xingming"  type="text"  class="uni-input" name="" placeholder="姓名" />
			</view>
			<picker :style='{"boxShadow":"0px 0px 0px #2c77cb","margin":"24rpx 0 24rpx 0","borderColor":"#e9be70","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='jumin'"  @change="juminxingbieChange" :value="juminxingbieIndex" :range="juminxingbieOptions">
				<view :style='{"width":"100%","padding":"0 24rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#767676"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
			</picker>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='jumin'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#333","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.youxiang"  type="text"  class="uni-input" name="" placeholder="邮箱" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='jumin'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#333","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.shenfenzheng"  type="text"  class="uni-input" name="" placeholder="身份证" />
			</view>
			<view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='jumin'" class="uni-form-item uni-column">
				<input :style='{"padding":"0px 24rpx","boxShadow":"0px 0px 0px #2c77cb","margin":"0px","borderColor":"#e9be70","color":"#333","borderRadius":"40rpx","background":"#f5f5f5","borderWidth":"0px","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}'  v-model="ruleForm.shoujihaoma"  type="text"  class="uni-input" name="" placeholder="手机号码" />
			</view>
            <view :style='{"width":"100%","margin":"0 0 40rpx 0","height":"auto"}' v-if="tableName=='jumin'" @tap="jumintouxiangTap" class="">
                <view>请上传头像</view>
                <image :style='{"border":"2rpx solid #ccc","width":"200rpx","borderRadius":"16rpx","objectFit":"cover","display":"block","height":"160rpx"}' v-if="ruleForm.touxiang" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
                <image :style='{"border":"2rpx solid #ccc","width":"200rpx","borderRadius":"16rpx","objectFit":"cover","display":"block","height":"160rpx"}' v-else class="avator" src="../../static/gen/upload.png" mode=""></image>
            </view>
			<button :style='{"padding":"0px","margin":"60rpx auto 24rpx","borderColor":"#ef6d0d","color":"#fff","display":"block","borderRadius":"40rpx","background":"linear-gradient(270deg, rgba(228,172,215,1) 0%, rgba(42,239,233,1) 100%),#2aefe9","borderWidth":"0 0 0px","width":"60%","lineHeight":"80rpx","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}' class="btn-submit" @tap="register" type="primary">注册</button>
		</view>
	</view>
</view>
</template>

<script>
	export default {
		data() {
			return {
                juminxingbieOptions: [],
                juminxingbieIndex: 0,
				ruleForm: {
                zhanghao: '',
                mima: '',
                xingming: '',
                xingbie: '',
                youxiang: '',
                shenfenzheng: '',
                shoujihaoma: '',
                touxiang: '',
                money: '',
				},
				tableName:""
			}
		},
        computed: {
            baseUrl() {
                return this.$base.url;
            }
        },
		async onLoad() {
			let res = [];
			let table = uni.getStorageSync("loginTable");
            this.tableName = table;

                        // 自定义下拉框值
			if(this.tableName=='jumin'){
                this.juminxingbieOptions = "男,女".split(',');
				this.ruleForm.xingbie=this.juminxingbieOptions[0]
			}
			
			this.styleChange()
		},
		methods: {

            // 下拉变化
            juminxingbieChange(e) {
                    this.juminxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.juminxingbieOptions[this.juminxingbieIndex]
            },
            jumintouxiangTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.touxiang = 'upload/' + res.file;
                    _this.$forceUpdate();
                });
            },
            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.registerFrom.content.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			// 注册
			async register() {
				if((!this.ruleForm.zhanghao) && `jumin` == this.tableName){
					this.$utils.msg(`账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `jumin` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
                if(`jumin` == this.tableName && (this.ruleForm.mima!=this.ruleForm.mima2)){
                    this.$utils.msg(`两次密码输入不一致`);
                    return
                }
				if((!this.ruleForm.xingming) && `jumin` == this.tableName){
					this.$utils.msg(`姓名不能为空`);
					return
				}
				if(`jumin` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
					this.$utils.msg(`邮箱应输入邮件格式`);
					return
				}
				if(`jumin` == this.tableName && this.ruleForm.shenfenzheng&&(!this.$validate.checkIdCard(this.ruleForm.shenfenzheng))){
					this.$utils.msg(`身份证应输入身份证格式`);
					return
				}
				if(`jumin` == this.tableName && this.ruleForm.shoujihaoma&&(!this.$validate.isMobile(this.ruleForm.shoujihaoma))){
					this.$utils.msg(`手机号码应输入手机格式`);
					return
				}
				if(`jumin` == this.tableName && this.ruleForm.money&&(!this.$validate.isNumber(this.ruleForm.money))){
					this.$utils.msg(`余额应输入数字`);
					return
				}
				await this.$api.register(`${this.tableName}`, this.ruleForm);
				this.$utils.msgBack('注册成功');;
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
