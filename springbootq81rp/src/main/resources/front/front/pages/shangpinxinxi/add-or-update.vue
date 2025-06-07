<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"100rpx 0 240rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221222/748292afaf1a42f98ea39cb94757b451.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221222/c6ef4a2042384649921c28b8b4f18cac.png) fixed no-repeat center bottom","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","height":"auto"}' class="app-update-pv">
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shangpinmingcheng" v-model="ruleForm.shangpinmingcheng" placeholder="商品名称"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品类型</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="shangpinleixingChange" :value="shangpinleixingIndex"  :range="shangpinleixingOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.shangpinleixing?ruleForm.shangpinleixing:"请选择商品类型"}}</view>
				</picker>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="" @tap="shangpintupianTap">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品图片</view>
				<image :style='{"width":"72rpx","margin":"4rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.shangpintupian" :src="baseUrl+ruleForm.shangpintupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"4rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品规格</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shangpinguige" v-model="ruleForm.shangpinguige" placeholder="商品规格"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">生产地</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.shengchandi" v-model="ruleForm.shengchandi" placeholder="生产地"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">品牌</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.pinpai" v-model="ruleForm.pinpai" placeholder="品牌"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">原材料</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.yuancailiao" v-model="ruleForm.yuancailiao" placeholder="原材料"></input>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">上架日期</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.shangjiariqi" @change="shangjiariqiChange">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666"}' class="uni-input">{{ruleForm.shangjiariqi?ruleForm.shangjiariqi:"请选择上架日期"}}</view>
				</picker>
			</view>
			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">价格</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' :disabled="ro.price" v-model="ruleForm.price" placeholder="价格"></input>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"minHeight":"80rpx","padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">商品简介</view>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"24rpx 40rpx","margin":"0px","color":"#666","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' v-model="ruleForm.shangpinjianjie" placeholder="商品简介"></textarea>
			</view>
			
			<view :style='{"padding":"12rpx 0","margin":"0 0 24rpx 0","borderColor":"#ccc","borderWidth":"0 0 0px 0","width":"100%","borderStyle":"solid","height":"auto"}' class="">
				<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#111","fontWeight":"500"}' class="title">商品详情</view>
                <xia-editor :style='{"minHeight":"300rpx","padding":"24rpx 40rpx","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","borderColor":"#e9be70","borderRadius":"40rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","borderWidth":"2rpx 2rpx 2rpx","width":"100%","borderStyle":"solid","height":"auto"}' v-model="ruleForm.shangpinxiangqing" placeholder="商品详情" @editorChange="shangpinxiangqingChange"></xia-editor>
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
				shangpinmingcheng: '',
				shangpinleixing: '',
				shangpintupian: '',
				shangpinguige: '',
				shangpinjianjie: '',
				shangpinxiangqing: '',
				shengchandi: '',
				pinpai: '',
				yuancailiao: '',
				shangjiariqi: '',
				price: '',
				},
				shangpinleixingOptions: [],
				shangpinleixingIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   shangpinmingcheng : false,
                                   shangpinleixing : false,
                                   shangpintupian : false,
                                   shangpinguige : false,
                                   shangpinjianjie : false,
                                   shangpinxiangqing : false,
                                   shengchandi : false,
                                   pinpai : false,
                                   yuancailiao : false,
                                   shangjiariqi : false,
                                   price : false,
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
            this.ruleForm.shangjiariqi = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下拉框
			res = await this.$api.option(`shangpinleixing`,`shangpinleixing`,{});
			this.shangpinleixingOptions = res.data;
            this.shangpinleixingOptions.unshift("请选择商品类型");

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
				res = await this.$api.info(`shangpinxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='shangpinmingcheng'){
					this.ruleForm.shangpinmingcheng = obj[o];
					this.ro.shangpinmingcheng = true;
					continue;
					}
					if(o=='shangpinleixing'){
					this.ruleForm.shangpinleixing = obj[o];
					this.ro.shangpinleixing = true;
					continue;
					}
					if(o=='shangpintupian'){
					this.ruleForm.shangpintupian = obj[o].split(",")[0];
					this.ro.shangpintupian = true;
					continue;
					}
					if(o=='shangpinguige'){
					this.ruleForm.shangpinguige = obj[o];
					this.ro.shangpinguige = true;
					continue;
					}
					if(o=='shangpinjianjie'){
					this.ruleForm.shangpinjianjie = obj[o];
					this.ro.shangpinjianjie = true;
					continue;
					}
					if(o=='shangpinxiangqing'){
					this.ruleForm.shangpinxiangqing = obj[o];
					this.ro.shangpinxiangqing = true;
					continue;
					}
					if(o=='shengchandi'){
					this.ruleForm.shengchandi = obj[o];
					this.ro.shengchandi = true;
					continue;
					}
					if(o=='pinpai'){
					this.ruleForm.pinpai = obj[o];
					this.ro.pinpai = true;
					continue;
					}
					if(o=='yuancailiao'){
					this.ruleForm.yuancailiao = obj[o];
					this.ro.yuancailiao = true;
					continue;
					}
					if(o=='shangjiariqi'){
					this.ruleForm.shangjiariqi = obj[o];
					this.ro.shangjiariqi = true;
					continue;
					}
					if(o=='price'){
					this.ruleForm.price = obj[o];
					this.ro.price = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
            shangpinxiangqingChange(e) {
                this.ruleForm.shangpinxiangqing = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			shangjiariqiChange(e) {
				this.ruleForm.shangjiariqi = e.target.value;
				this.$forceUpdate();
			},


			// 下拉变化
			shangpinleixingChange(e) {
				this.shangpinleixingIndex = e.target.value
				this.ruleForm.shangpinleixing = this.shangpinleixingOptions[this.shangpinleixingIndex]
			},

			shangpintupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.shangpintupian = 'upload/' + res.file;
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
				if((!this.ruleForm.shangpinleixing)){
					this.$utils.msg(`商品类型不能为空`);
					return
				}
				if((!this.ruleForm.shengchandi)){
					this.$utils.msg(`生产地不能为空`);
					return
				}
				if((!this.ruleForm.pinpai)){
					this.$utils.msg(`品牌不能为空`);
					return
				}
				if((!this.ruleForm.price)){
					this.$utils.msg(`价格不能为空`);
					return
				}
				if(this.ruleForm.price&&(!this.$validate.isNumber(this.ruleForm.price))){
					this.$utils.msg(`价格应输入数字`);
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
					let res = await this.$api.list(`shangpinxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`shangpinxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`shangpinxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`shangpinxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`shangpinxinxi`, this.ruleForm);
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
