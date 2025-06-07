<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"100rpx 0 240rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221222/748292afaf1a42f98ea39cb94757b451.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221222/c6ef4a2042384649921c28b8b4f18cac.png) fixed no-repeat center bottom","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">费用编号</view>
				<view :style='{"padding":"0px 24rpx","margin":"0px","lineHeight":"80rpx","fontSize":"28rpx","color":"#666","flex":"1"}' class="right-input">
					{{ruleForm.feiyongbianhao}}
				</view>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">费用名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.feiyongmingcheng" v-model="ruleForm.feiyongmingcheng" placeholder="费用名称"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">费用分类</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="feiyongfenleiChange" :value="feiyongfenleiIndex"  :range="feiyongfenleiOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.feiyongfenlei?ruleForm.feiyongfenlei:"请选择费用分类"}}</view>
				</picker>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">费用金额</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.feiyongjine" v-model="ruleForm.feiyongjine" placeholder="费用金额"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="feiyongpingzhengTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">费用凭证</view>
				<image :style='{"width":"72rpx","margin":"4rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.feiyongpingzheng" :src="baseUrl+ruleForm.feiyongpingzheng.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"4rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.zhanghao" v-model="ruleForm.zhanghao" placeholder="账号"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.xingming" v-model="ruleForm.xingming" placeholder="姓名"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">手机号码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shoujihaoma" v-model="ruleForm.shoujihaoma" placeholder="手机号码"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">发送日期</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.fasongriqi" @change="fasongriqiChange">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.fasongriqi?ruleForm.fasongriqi:"请选择发送日期"}}</view>
				</picker>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">费用内容</view>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"24rpx 40rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' v-model="ruleForm.feiyongneirong" placeholder="费用内容"></textarea>
			</view>
			
			
			<view :style='{"width":"100%","margin":"40rpx 0 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"padding":"0 40rpx","boxShadow":"2rpx 4rpx 8rpx #ccc","margin":"0 40rpx 0 0","borderColor":"#aa82d9","color":"#111","display":"inline","minWidth":"200rpx","borderRadius":"40rpx","background":"linear-gradient(180deg, rgba(231,213,254,1) 0%, rgba(180,146,220,1) 100%)","borderWidth":"2rpx 8rpx 2rpx","width":"auto","lineHeight":"72rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				feiyongbianhao: this.getUUID(),
				feiyongmingcheng: '',
				feiyongfenlei: '',
				feiyongjine: '',
				feiyongpingzheng: '',
				zhanghao: '',
				xingming: '',
				shoujihaoma: '',
				feiyongneirong: '',
				fasongriqi: '',
				ispay: '',
				userid: '',
				},
				feiyongfenleiOptions: [],
				feiyongfenleiIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   feiyongbianhao : false,
                                   feiyongmingcheng : false,
                                   feiyongfenlei : false,
                                   feiyongjine : false,
                                   feiyongpingzheng : false,
                                   zhanghao : false,
                                   xingming : false,
                                   shoujihaoma : false,
                                   feiyongneirong : false,
                                   fasongriqi : false,
                                   ispay : false,
                                   userid : false,
                                },
			}
		},
		components: {
			wPicker,
            xiaEditor
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.fasongriqi = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下拉框
			res = await this.$api.option(`feiyongfenlei`,`feiyongfenlei`,{});
			this.feiyongfenleiOptions = res.data;
            this.feiyongfenleiOptions.unshift("请选择费用分类");

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`feiyongxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='feiyongbianhao'){
					this.ruleForm.feiyongbianhao = obj[o];
					this.ro.feiyongbianhao = true;
					continue;
					}
					if(o=='feiyongmingcheng'){
					this.ruleForm.feiyongmingcheng = obj[o];
					this.ro.feiyongmingcheng = true;
					continue;
					}
					if(o=='feiyongfenlei'){
					this.ruleForm.feiyongfenlei = obj[o];
					this.ro.feiyongfenlei = true;
					continue;
					}
					if(o=='feiyongjine'){
					this.ruleForm.feiyongjine = obj[o];
					this.ro.feiyongjine = true;
					continue;
					}
					if(o=='feiyongpingzheng'){
					this.ruleForm.feiyongpingzheng = obj[o].split(",")[0];
					this.ro.feiyongpingzheng = true;
					continue;
					}
					if(o=='zhanghao'){
					this.ruleForm.zhanghao = obj[o];
					this.ro.zhanghao = true;
					continue;
					}
					if(o=='xingming'){
					this.ruleForm.xingming = obj[o];
					this.ro.xingming = true;
					continue;
					}
					if(o=='shoujihaoma'){
					this.ruleForm.shoujihaoma = obj[o];
					this.ro.shoujihaoma = true;
					continue;
					}
					if(o=='feiyongneirong'){
					this.ruleForm.feiyongneirong = obj[o];
					this.ro.feiyongneirong = true;
					continue;
					}
					if(o=='fasongriqi'){
					this.ruleForm.fasongriqi = obj[o];
					this.ro.fasongriqi = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			fasongriqiChange(e) {
				this.ruleForm.fasongriqi = e.target.value;
				this.$forceUpdate();
			},


			// 下拉变化
			feiyongfenleiChange(e) {
				this.feiyongfenleiIndex = e.target.value
				this.ruleForm.feiyongfenlei = this.feiyongfenleiOptions[this.feiyongfenleiIndex]
			},

			feiyongpingzhengTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.feiyongpingzheng = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

























//跨表计算判断
				var obj;
				if((!this.ruleForm.feiyongmingcheng)){
					this.$utils.msg(`费用名称不能为空`);
					return
				}
				if((!this.ruleForm.feiyongfenlei)){
					this.$utils.msg(`费用分类不能为空`);
					return
				}
				if(this.ruleForm.feiyongjine&&(!this.$validate.isNumber(this.ruleForm.feiyongjine))){
					this.$utils.msg(`费用金额应输入数字`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`feiyongxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`feiyongxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`feiyongxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`feiyongxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`feiyongxinxi`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
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
