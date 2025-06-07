<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"100rpx 0 240rpx","position":"relative","background":"url(http://codegen.caihongy.cn/20221222/748292afaf1a42f98ea39cb94757b451.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221222/c6ef4a2042384649921c28b8b4f18cac.png) fixed no-repeat center bottom","height":"auto"}'>
		<form :style='{"width":"100%","padding":"60rpx 40rpx","background":"none","display":"block","height":"auto"}'>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"inset 0px 40rpx 64rpx 0px #f9edd9","margin":"0 0 32rpx","borderColor":"#e9be70","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"40rpx","borderWidth":"2rpx 2rpx 2rpx","background":"url() repeat-x left bottom,rgba(255,255,255,.6)","width":"100%","borderStyle":"solid","height":"auto"}'>
				<xia-editor :style='{"minHeight":"240rpx","padding":"16rpx 40rpx","margin":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","height":"auto"}' v-model="content" @editorChange="contentChange" placeholder="回复"></xia-editor>
			</view>
			<view :style='{"width":"100%","justifyContent":"center","display":"flex","height":"auto"}'>
				<button :style='{"padding":"0 40rpx","boxShadow":"2rpx 4rpx 8rpx #ccc","margin":"32rpx 20rpx","borderColor":"#aa82d9","color":"#111","minWidth":"240rpx","borderRadius":"40rpx","background":"linear-gradient(180deg, rgba(231,213,254,1) 0%, rgba(180,146,220,1) 100%)","borderWidth":"2rpx 8rpx 2rpx","width":"auto","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onReplyTap" class="bg-red margin-tb-sm">提交回复</button>
			</view>
		</form>
	</view>
</view>
</template>

<script>
    import xiaEditor from '@/components/xia-editor/xia-editor'
	export default {
		data() {
			return {
				pid: '',
				content: '',
				username: '',
                avatarurl: '',
				user: {},
			}
		},
        components: {
            xiaEditor
        },
		async onLoad(options) {
			this.pid = options.pid;
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
            if(table == `jumin`){
                this.username = this.user.zhanghao
            }
		},
		methods: {
            contentChange(e) {
                this.content = e
            },
			async onReplyTap() {
                this.avatarurl = uni.getStorageSync('headportrait')?uni.getStorageSync('headportrait'):'';
                var sensitiveWords = "";
                var sensitiveWordsArr = [];
                if(sensitiveWords) {
                    sensitiveWordsArr = sensitiveWords.split(",");
                }
                for(var i=0; i<sensitiveWordsArr.length; i++){
                    //全局替换
                    var reg = new RegExp(sensitiveWordsArr[i],"g");
                    //判断内容中是否包括敏感词
                    if (this.content.indexOf(sensitiveWordsArr[i]) > -1) {
                        // 将敏感词替换为 **
                        this.content = this.content.replace(reg,"**");
                    }
                }
				await this.$api.save('forum',{
					parentid: this.pid,
					content: this.content,
                    avatarurl: this.avatarurl,
					username: this.username
				});
				this.$utils.msgBack('回复成功');
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
