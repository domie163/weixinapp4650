<template>
    <view>
        <view class="cu-chat" :style="{'padding-bottom':showType?'90px':'0'}">
            <view v-for="(item,index) in list" v-bind:key="index">
                <view v-if="item.ask" class="cu-item self">
                    <view class="main">
                        <view class="content bg-green shadow">
                            <text v-if="!item.imgAsk">{{item.ask}}</text>
                            <image v-if="item.imgAsk" :src="baseUrl + item.imgAsk" mode="widthFix" style="width: 120upx;" @click="imgView(item.imgAsk)"></image>
                        </view>
                    </view>
                    <view class="cu-avatar radius"
                        style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);">
                    </view>
                    <!-- <view class="date">2018年3月23日 13:23</view> -->
                </view>
                <view v-if="item.reply" class="cu-item">
                    <view class="cu-avatar radius"
                        style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);">
                    </view>
                    <view class="main">
                        <view class="content shadow">
                            <text v-if="!item.imgReply">{{item.reply}}</text>
                            <image v-if="item.imgReply" :src="baseUrl + item.imgReply" mode="widthFix" style="width: 120upx;" @click="imgView(item.imgReply)"></image>
                        </view>
                    </view>
                    <!-- <view class="date "> 13:23</view> -->
                </view>
            </view>
        </view>

        <view class="cu-bar foot input" :style="{'bottom':showType?'90px':'0'}">
            <image class="jiahao" src="/static/jiahao.png" mode="widthFix" @click="showClick"></image>
            <input v-model="ask" class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300"
                cursor-spacing="10"></input>
            <button @tap="onSendTap" class="cu-btn bg-green shadow">发送</button>
        </view>
        <view class="showView" v-if="showType">
            <view class="showBox" @click="changeImg">
                选择文件
            </view>
            <view class="showBox" @click="changeClick">
                转{{askType==1?'人工服务':'智能回复'}}
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                // 定时器
                inter: {},
                list: [],
                ask: '',
                showType: false,
                askType: 1 //1为智能回复 2为人工
            };
        },
        onLoad() {
            this.intelligenceSave('主人，我是您的智能助手小搏，请问有什么可以帮您！')
            let _this = this;
            let inter = setInterval(function() {
            _this.init();
            }, 3000)
            this.inter = inter
        },
        onUnload() {
            if (this.inter) {
                // 清除定时器
                clearInterval(this.inter);
            }
        },
        computed: {
            userid() {
                return uni.getStorageSync("userid")
            },
            baseUrl() {
                return this.$base.url;
            },
        },
        methods: {
            showClick() {
                this.showType = !this.showType
                this.scrollBottom()
            },
            changeImg(){
                let _this = this;
                this.$api.upload(function(res) {
                    _this.save('upload/' + res.file)
                });
            },
            changeClick() {
                this.showType = !this.showType
                this.askType = this.askType == 1 ? 2 : 1
                console.log(this.askType)
                if(this.askType==1) {
                    this.intelligenceSave('主人，我是您的智能助手小搏，请问有什么可以帮您！')
                }
                if(this.askType==2) {
                    this.intelligenceSave('您好，在线客服很高兴为您服务！')
                }
            },
            imgView(img){
                uni.previewImage({
                    urls: [this.baseUrl + img]
                });
            },
            async onSendTap() {
                await this.save()
            },
            async intelligenceGet(ask) {

                let res = await this.$api.page('chathelper', {
                    limit: 1,
                    ask: ask
                })
                if (res.code == 0) {
                    if (res.data.list.length) {
                        this.intelligenceSave(res.data.list[0].reply)
                    }else{
                        this.intelligenceSave('主人，小搏还不够聪明，无法理解您的意思！')
                    }
                }
            },
            async intelligenceSave(ask) {
                await this.$api.save('chat', {
                    reply: ask,
                    userid: this.userid
                });
                this.ask = '';
                this.init();
            },
            async save(asks = null) {
                await this.$api.add('chat', {
                    ask: asks?asks:this.ask
                });
                let ask = JSON.parse(JSON.stringify(asks?asks:this.ask))
                this.ask = '';
                this.init();
                if (this.askType == 1&&!asks) {
                    this.$nextTick(function() {
                        setTimeout(() => {
                            this.intelligenceGet(ask)
                        }, 1000) // 要加点延迟, 不然有可能不生效
                    })
                    
                    return false
                }
            },
            async init() {
                let res = await this.$api.page('chat', {
                    sort: 'addtime',
                    order: 'asc',
                    limit: 1000,
                });
                for(let x in res.data.list){
                    if(res.data.list[x].ask){
                        if(res.data.list[x].ask.substr(0,6)=='upload'){
                            res.data.list[x].imgAsk = res.data.list[x].ask
                        }else{
                            res.data.list[x].imgAsk = ''
                        }
                    }
                    if(res.data.list[x].reply){
                        if(res.data.list[x].reply.substr(0,6)=='upload'){
                            res.data.list[x].imgReply = res.data.list[x].reply
                        }else{
                            res.data.list[x].imgReply = ''
                        }
                    }
                }
                this.list = res.data.list;
                this.scrollBottom()
            },
            scrollBottom(){
                this.$nextTick(function() {
                    setTimeout(() => {
                        uni.pageScrollTo({
                            scrollTop: 99999,
                            duration: 0
                        })
                    }, 200) // 要加点延迟, 不然有可能不生效
                })
            },
        }
    }
</script>

<style lang="scss">
    page {
        padding-bottom: 100upx;
    }

    .jiahao {
        width: 50upx;
        margin: 0 10upx;
    }

    .showView {
        width: 100%;
        background: #fff;
        position: fixed;
        bottom: 0;
        left: 0;

        .showBox {
            width: 100%;
            line-height: 80upx;
            color: #fff;
            background: #007AFF;
            text-align: center;
            font-size: 28upx;
            margin: 0 0 10upx;
        }
    }
</style>
