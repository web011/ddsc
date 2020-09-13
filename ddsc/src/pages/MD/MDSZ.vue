<template>
    <div class="mdsz-container">
        <div class="mt-3 bg-white pl-3 pr-3">
            <div class="d-flex jc-between ai-center" style="height:44.4375px;" v-for="(item,i) in top" :key="i" :class="i!=2 ? 'border-b' : ''">
                <div class="d-flex jc-center ai-center">
                    <img class="mr-2" style="height:18.5125px;width:18.5125px;" :src="item.img" alt="">
                    <span style="font-size:13.888px;color:rgb(21, 21, 22);">{{item.title}}</span>
                </div>
                <div class="d-flex jc-center ai-center">
                    <img class="mr-2" style="width:76.8375px;height:16.6625px;" v-show="item.imgs" :src="item.imgs" alt="">
                    <span style="color:rgb(156, 156, 156);font-size:12.0363px;">{{item.rights}}</span>
                    <i class="iconfont icon-youjiantou is"></i>
                </div>
            </div>
        </div>
        <div class="mt-3 bg-white pl-3 pr-3">
            <div class="d-flex jc-between ai-center" style="height:44.4375px;" v-for="(item,i) in center" :key="i" :class="i!=2 ? 'border-b' : ''">
                <div class="d-flex jc-center ai-center">
                    <img class="mr-2" style="height:18.5125px;width:18.5125px;" :src="item.img" alt="">
                    <span style="font-size:13.888px;color:rgb(21, 21, 22);">{{item.title}}</span>
                </div>
                <div class="d-flex jc-center ai-center">
                    <img class="mr-2" style="width:76.8375px;height:16.6625px;" v-show="item.imgs" :src="item.imgs" alt="">
                    <span style="color:rgb(156, 156, 156);font-size:12.0363px;">{{item.rights}}</span>
                    <i class="iconfont icon-youjiantou is"></i>
                </div>
            </div>
        </div>
        <div class="mt-3 bg-white pl-3 pr-3">
            <div class="d-flex jc-between ai-center" style="height:44.4375px;">
                <div class="d-flex jc-center ai-center">
                    <img class="mr-2" style="height:18.5125px;width:18.5125px;" src="https://pinduoduoimg.yangkeduo.com/personal/setting/Free_to_enter.png" alt="">
                    <span style="font-size:13.888px;color:rgb(21, 21, 22);">商家免费入驻</span>
                </div>
                <div class="d-flex jc-center ai-center">
                    <i class="iconfont icon-youjiantou is"></i>
                </div>
            </div>
        </div>
        <div class="mt-3 bg-white pl-3 pr-3">
            <div class="d-flex jc-between ai-center" style="height:44.4375px;">
                <div class="d-flex jc-center ai-center">
                    <img class="mr-2" style="height:18.5125px;width:18.5125px;" src="https://pinduoduoimg.yangkeduo.com/personal/setting/About_pdd.png" alt="">
                    <span style="font-size:13.888px;color:rgb(21, 21, 22);">关于拼多多</span>
                </div>
                <div class="d-flex jc-center ai-center">
                    <i class="iconfont icon-youjiantou is"></i>
                </div>
            </div>
        </div>
        <div class="mt-3 bg-white d-flex jc-center ai-center" style="height:44.4375px;color:rgb(156, 156, 156);font-size:13.888px;" @click="tuichu">
            <span>退出登陆</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'mdsz',
    data(){
        return {
            top:[{img:'https://pinduoduoimg.yangkeduo.com/personal/setting/Payment.png',title:'免密支付设置',imgs:'https://pinduoduoimg.yangkeduo.com/order_checkout/2020-05-25/40d75ccb-aad9-4d2a-8c18-db88db221d22.png?imageView2/2/w/300/q/100/format/webp',rights:''},{img:'https://pinduoduoimg.yangkeduo.com/personal/setting/Groupfree.png',title:'免拼设置',rights:'还剩3次免拼机会',imgs:false},{img:'https://pinduoduoimg.yangkeduo.com/personal/setting/Message.png',title:'消息接收设置',rights:'',imgs:false}],
            center:[{img:'https://pinduoduoimg.yangkeduo.com/personal/setting/FAQ.png',title:'常见问题',imgs:false},{img:'https://pinduoduoimg.yangkeduo.com/personal/setting/Feedback.png',title:'意见反馈',imgs:false}]
        }
    },
    methods:{
        tuichu(){
            this.$dialog.confirm({
                title: '标题',
                message: '弹窗内容'
            }).then(() => {
                this.$notify({ type: 'success', message: '退出成功' });
                this.$router.push('/')
            }).catch(() => {
                this.$notify({ type: 'success', message: '取消成功' });
            })
        }
    },
    components:{

    }
}
</script>
<style lang="scss">
.mdsz-container{
    .is{
        color:rgb(217, 217, 217);
        font-size: 20px;
    }
    .border-b{
        border-bottom: 0.5px solid rgba(0,0,0,0.1);
    }
}
</style>