<template>
    <div class="md-container">
        <div class="bg-white pl-3 pr-3 pt-2">
            <div class="d-flex jc-between ai-center">
                <div class="d-flex jc-center ai-center">
                    <img class="userimg" src="../../assets/mes.jpg" alt="">
                    <div class="d-flex flex-column ml-2">
                        <span style="color:rgb(21, 21, 22);font-size:18.24px;">路人甲</span>
                        <div class="d-flex jc-center ai-center">
                            <span style="color:rgb(156, 156, 156);font-size:12.48px;">勋章墙</span>
                            <i class="iconfont icon-youjiantou" style="color:rgb(156, 156, 156);"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="pdang">拼单返现</p>
                </div>
            </div>
            <div class="tuijia d-flex jc-between ai-center mt-3">
                <div class="d-flex jc-center ai-center ml-3" style="color:rgb(224, 46, 36);font-size:14.4px;">
                    <span>省钱月卡</span>
                    <div class="mr-1 ml-1" style="width:1px;height:15px;background-color:rgb(238, 142, 136);"></div>
                    <span style="font-size:12.48px;">帮你省194元</span>
                </div>
                <div class="mr-2">
                    <span class="youhuijian">领4张5元无门槛</span>
                    <i class="iconfont icon-youjiantou" style="color:red;"></i>
                </div>
            </div>
            <div class="d-flex jc-between ai-center mt-3">
                <span style="font-size:16.32px;color:rgb(21, 21, 22);">我的订单</span>
                <div class="d-flex jc-cneter ai-center">
                    <span style="color:rgb(153, 153, 153);font-size:12.48px;">查看全部</span>
                    <i class="iconfont icon-youjiantou" style="color:rgb(153, 153, 153);font-size:15px;"></i>
                </div>
            </div>
            <div class="d-flex jc-between ai-cneter">
                <div class="d-flex flex-column jc-center ai-center mt-3" v-for="(item,i) in dindang " :key="i">
                    <i class="iconfont" style="font-size:30px;color: #9c9c9c;" :class="item.iconfont"></i>
                    <span style="color:rgb(88, 89, 91);font-size:12.48px;" class="mt-2 mb-4">{{item.title}}</span>
                </div>
            </div>
        </div>
        <div class="mt-2 bg-white d-flex jc-between ai-cneter pl-3 pr-3">
            <div class="d-flex flex-column jc-center ai-center mt-3" v-for="(item,i) in dindang1 " :key="i" @click="tiaozhang(item.icon)">
                <i class="iconfont" :class="item.iconfont" style="font-size:30px;color: #e02e24;"></i>
                <span style="color:rgb(88, 89, 91);font-size:12.48px;" class="mt-2 mb-4">{{item.title}}</span>
            </div>
        </div>
        <div class="mt-2 bg-white d-flex jc-between ai-cneter pl-3 pr-3 fw w-100 pt-3">
            <div class="duogneng d-flex flex-column jc-center ai-center" v-for="(item,i) in spimgtitle " :key="i" @click="tiaozhang(item.icon)">
                <img style="width:25.9125px;height:25.9125px;" :src="item.img" alt="">
                <span style="color:rgb(88, 89, 91);font-size:12.48px;" class="mt-2 mb-4">{{item.title}}</span>
            </div>
        </div>
        <div class="dateils-title d-flex jc-center ai-center bg-white mt-2">
            <i class="iconfont icon-shoucang mr-1"></i>
            <span>推荐店铺</span>
        </div>
        <DateilsList></DateilsList>
    </div>
</template>

<script>
import DateilsList from '../../components/DateilsList/DateilsList'
export default {
    name:'md',
    data(){
        return {
            dindang:[{iconfont:'icon-daifukuan',title:'待付款'},{iconfont:'icon-fenxiang',title:'待分享'},{iconfont:'icon-daifahuo',title:'待发货'},{iconfont:'icon-daishouhuo-',title:'待收货'},{iconfont:'icon-pingjia',title:'待评价'}],
            dindang1:[{iconfont:'icon-youhuijuan',title:'优惠劵'},{iconfont:'icon-shangpinshoucang',title:'商品收藏',icon:'/Collection'},{iconfont:'icon-jiaoyinzujifangke',title:'历史浏览'},{iconfont:'icon-tuikuan',title:'退款售后'},{iconfont:'icon-pingjia',title:'我的评价'}],
            spimgtitle:[
                {img:'https://funimg.pddpic.com/personal/icon_newbie_gift_v3.png?imageView2/2/w/1300/q/80/format/webp',title:'新人红包'},
                {img:'https://t00img.yangkeduo.com/goods/images/2018-09-18/a86110d29d12c021d11419827f4b570b.png?imageView2/2/w/1300/q/80/format/webp',title:'多多果园'},
                {img:'https://t00img.yangkeduo.com/goods/images/2018-09-18/cc47089a02ceaae7d1ef598f43271122.png?imageView2/2/w/1300/q/80/format/webp',title:'砍价免费拿'},
                {img:'https://t00img.yangkeduo.com/goods/2019-09-08/af66e4d2b3b3a858313c6e937601560d.png?imageView2/2/w/1300/q/80/format/webp',title:'天天领现金'},
                {img:'https://t00img.yangkeduo.com/goods/images/2019-02-14/4db9bd2c8f828bb0896c4a7eec038490.png?imageView2/2/w/1300/q/80/format/webp',title:'多多爱消除'},
                {img:'https://t00img.yangkeduo.com/goods/2019-11-24/1e94a441cfe8f293ce80c9ae43875f7e.png?imageView2/2/w/1300/q/80/format/webp',title:'多多牧场'},
                {img:'https://t00img.yangkeduo.com/goods/2020-01-22/8d59fbebeeb3fdd86ddf1e621249578a.png?imageView2/2/w/1300/q/80/format/webp',title:'多多短视频'},{img:'https://t00img.yangkeduo.com/goods/2019-11-20/d26747be4edc4904d22628b6fde261ba.png?imageView2/2/w/1300/q/80/format/webp',title:'火车票'},
                {img:'https://funimg.pddpic.com/personal/icon_my_address_v3.png?imageView2/2/w/1300/q/80/format/webp',title:'收货地址'},
                {img:'https://funimg.pddpic.com/personal/icon_customer_service.png?imageView2/2/w/1300/q/80/format/webp',title:'官方客服'},
                {img:'https://funimg.pddpic.com/personal/icon_setting.png?imageView2/2/w/1300/q/80/format/webp',title:'设置',icon:'MDSZ'}]
        }
    },
    methods:{
        tiaozhang(routers){
            if(routers){
                // console.log('跳转')
                this.$router.push(routers)
            }else{
                console.log('错误跳转')
            }
        }
    },
    components:{
        DateilsList
    }
}
</script>
<style lang="scss">
.md-container{
    .userimg{
        width: 60px;
        height: 60px;
        border-radius: 50px;
        background-color: red;
    }
    .pdang{
        color:rgb(21, 21, 22);
        font-size:12.48px;
        border: 1px solid rgba(0,0,0,0.1);
        height:27.8375px;
        width:93.1125px;
        text-align: center;
        line-height: 27.8375px;
        border-radius: 50px;
    }
    .tuijia{
        background: #fdefee;
        width:329.3px;
        height:44px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        .youhuijian{
            display: inline-block;
            width:102.188px;
            height:24px;
            background-color: #fff;
            font-size:12.48px;
            color:rgb(224, 46, 36);
            text-align: center;
            line-height: 24px;
            border-radius: 50px;
        }
    }
    .duogneng{
        width:68px;
    }
}
</style>