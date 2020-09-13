<template>
    <div class="dateils-container">
        <div class="bg-white">
            <!-- 轮播图 未完成 -->
            <div style="position: relative;">
                <van-swipe @change="onChange" class="my-swipe" indicator-color="red">
                    <van-swipe-item v-for="(item,i) in swipetimg" :key="i">
                        <img class="w-100" style="height:366.4px;" v-lazy="item" alt="">
                    </van-swipe-item>
                </van-swipe>
                <div class="swipet">
                    <span>{{current}}/8</span>
                </div>
            </div>
            <!-- 商品详情 -->
            <div class="d-flex jc-center ai-center flex-column w-100 pr-3 pl-3">
                <div class="d-flex jc-between ai-center w-100">
                    <div class="d-flex jc-center ai-center">
                        <span class="mt-2 prices" style="font-weight: bold;">¥</span>
                        <p class="ml-1 mr-1" style="color:rgb(224, 46, 36);font-size:27.3579px;">58.9</p>
                        <span class=" mt-2 mr-1 prices" style="font-size:11.7248px;">起</span>
                        <p class="mt-2" style="color:rgb(88, 89, 91);font-size:12.7019px;"> <s>¥120</s> </p>
                    </div>
                    <span style="color:rgb(88, 89, 91);font-size:12.7019px;">已拼2032件</span>
                </div>
            </div>
            <div class="pr-3 pl-3 mb-2 fw">
                <span style="color:rgb(21, 21, 22);font-size:14.656px;font-weight: bold;">吃鸡王者按键红蛛2代pro自动压枪神器王者一键换装连招苹果安卓</span>
                <span class="kuanshi pl-1 pr-1" style="background-color:rgb(37, 181, 19);color:#fff !important;">退货包运费</span>
            </div>
            <div class="mr-3 ml-3 pb-2 d-flex jc-between ai-center" style="border-bottom: 1px solid rgba(0, 0, 0, 0.1);">
                <div>
                    <div>
                        <span class="kuanshi pl-1 pr-1 mr-2" style="background-color:rgb(224, 46, 36);color:#fff !important;">返现</span>
                        <span style="color:rgb(88, 89, 91);font-size:12.7019px;">店铺内拼满35元返3元</span>
                    </div>
                    <div>
                        <span class="kuanshi pl-1 pr-1 mr-1" style="background-color:rgb(224, 46, 36);color:#fff !important;">领劵</span>
                        <span class="kuanshi pl-1 pr-1" style="background-color:rgb(224, 46, 36);color:#fff !important;">下单立减7元</span>
                    </div>
                </div>
                <i class="iconfont icon-youjiantou" style="height:16.8px;width:10.75px;color:rgb(102, 102, 102)"></i>
            </div>
            <div class="mr-3 ml-3 titles d-flex jc-between" style="color:rgb(88, 89, 91);font-size:12.7019px;border-bottom: 1px solid rgba(0, 0, 0, 0.1);">
                <div class="titles">退货包运费 </div>
                <div>·</div>
                <div class="titles">7天无理由退货</div>
                <div>·</div>
                <div class="titles">全场包邮</div>
                <div>·</div>
                <div class="titles">24小时发货</div>
                <i class="iconfont icon-youjiantou" style="height:16.8px;width:10.75px;color:rgb(102, 102, 102)"></i>
            </div>
            <div class="d-flex jc-between ai-center mr-3 ml-3 mt-2 pb-3">
                <div class="d-flex jc-center ai-center">
                    <img class="mr-2" style="height:15.625px;width:15.625px;border-radius: 50px;" src="https://t13img.yangkeduo.com/mobile_live/2020-04-23/1ee46c71-2e04-4352-929a-7cab253e2ff9.gif" alt="">
                    <span style="color:rgb(110, 111, 113);font-size:12.7019px;">10+个直播间正在讲解「潮流电玩装备」</span>
                </div>
                <i class="iconfont icon-youjiantou" style="height:16.8px;width:10.75px;color:rgb(102, 102, 102)"></i>
            </div>
        </div>
        <div class="bg-white mt-2 mb-2">
            <div class="pr-3 pl-3 d-flex jc-between ai-center pt-2 pb-2" style="border-bottom: 1px solid rgba(0, 0, 0, 0.1);">
                <span style="color:rgb(21, 21, 22);font-size:14.656px;">14人在拼单，可直接参与</span>
                <div class="d-flex jc-center ai-center">
                    <span style="color:rgb(156, 156, 156);font-size:12.7019px;">查看更多</span>
                    <i class="iconfont icon-youjiantou" style="height:16.8px;width:10.75px;color:rgb(102, 102, 102)"></i>
                </div>
            </div>
            <div class="pr-3 pl-3" style="margin-left:10px">
                <div class="d-flex jc-between ai-center pt-2 pb-2" style="border-bottom: 1px solid rgba(0, 0, 0, 0.1);" v-for="(item,i) in i===true ? arr1 : arr2" :key="i">
                    <div class="d-flex jc-center ai-center">
                        <img class="mr-2" style="border-radius: 50px;width:33.1625px;height:33.1625px;" :src="item.img" alt="">
                        <span style="color:rgb(21, 21, 22);font-size:14.656px;">{{item.title}}</span>
                    </div>
                    <div class="d-flex jc-center ai-center">
                        <div style="color:rgb(21,21,22);font-size:12.7019px;" class="text-center mr-1">
                            <div>
                                <span>还差</span>
                                <span style="color:red;">1人</span>
                                <span>拼成</span>
                            </div>
                            <div style="width:87px;height:15px;overflow: hidden;">
                                <span class="color: #58595b;">剩余16:12:{{t}}</span>
                            </div>
                        </div>
                        <span class="bottns text-center">去拼单</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white pl-3 pr-3">
            <div class="d-flex jc-between ai-center pt-2 pb-2" style="border-bottom: 1px solid rgba(0, 0, 0, 0.1);">
                <span style="color:rgb(21, 21, 22);font-size:14.656px;">该商品所属店铺评价</span>
                <i class="iconfont icon-youjiantou" style="height:16.8px;width:10.75px;color:rgb(102, 102, 102)"></i>
            </div>
            <div class="d-flex ai-center ai-center fw pt-2 pb-2">
                <span class="bottomtitle text-center mr-2 mb-2">正品(5)</span>
                <span v-for="item in list" :key="item" class="bottomtitle text-center mr-2 mb-2" style="background-color:rgb(253, 239, 238);color:rgb(88, 89, 91);">{{item}}</span>
            </div>
        </div>
        <div class="bg-white pl-3 pr-3 mt-2">
            <div class="d-flex jc-between ai-center">
                <div class="d-flex jc-cneter ai-center pt-3 pb-2">
                    <img style="height:39.075px;width:39.075px;" class="mr-2" src="https://t16img.yangkeduo.com/pdd_ims/img_check/v2/2D6EE4FFFFFF03null/5242647a8ad84b8a81586c42920a1137.jpg?imageView2/2/w/1300/q/80" alt="">
                    <span style="color:rgb(21, 21, 22);font-size:14.656px;font-weight: bold;">超萌数码专营店</span>
                </div>
                <div class="pt-3 pb-2">
                    <span class="dbottons">进店逛逛</span>
                </div>
            </div>
            <div class="d-flex jc-between ai-center pb-2">
                <div class="d-flex jc-center ai-center">
                    <span style="color:rgb(88, 89, 91);font-size:12.7019px;">综合体验：</span>
                    <img class="mr-1" v-for="item in 4 " :key="item" style="height:11.7125px;width:11.7125px;" src="https://promotion.pddpic.com/upload/2020-04-21/46e1fd46-df2b-40eb-8446-cfe5f5d732ab.png" alt="">
                    <img style="height:11.7125px;width:11.7125px;" src="https://promotion.pddpic.com/upload/2020-04-21/005acc1c-ef80-408d-8da7-9ec78cad21c7.png" alt="">
                </div>
                <div class="d-flex jc-center ai-center" style="font-size:12.7019px;color:rgb(88, 89, 91);">
                    <span>商品数量: 37</span>
                    <span class="ml-3">已拼: 6.9万件</span>
                </div>
            </div>
            <div class="pb-2 fw d-flex jc-center ai-center">
                <div style="height:150.425px;width:95px;" class="mr-3" v-for="(item,i) in dateilslist" :key="i">
                    <img style="height:105px;width:105px;" :src="item.img" alt="">
                    <p class="pricebottom">{{item.title}}</p>
                    <div class="d-flex jc-between ai-center w-100">
                        <span style="font-weight: bold;color:rgb(224, 46, 36);font-size:11px;">{{item.price}}</span>
                        <span style="color:rgb(156, 156, 156);font-size:8px;">{{item.p}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white pl-3 pr-3 mt-2 pb-3 w-100">
            <div class="pt-2 pb-2 w-100">
                <span style="color:rgb(21, 21, 22);font-size:14.656px;">商品详情</span>
            </div>
            <div class="d-flex jc-left ai-center pl-2 w-100" style="background-color:rgb(244, 244, 244);height:35.275px;border-radius: 4px;">
                <span style="color:rgb(156, 156, 156);font-size:13.6789px;" class="mr-5">品牌</span>
                <p style="color:rgb(21, 21, 22);font-size:13.6789px;">华魂(数码)</p>
            </div>
        </div>
        <div class="w-100">
            <img class="w-100" style="height:488.525px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/bddfd6a4-7c3b-4117-92e1-7e890ea0bcde.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:488.525px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/a96dc273-98ae-4147-a97b-e76a3f3ca756.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:488.525px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/213497fe-6f66-4468-998f-b11704dadeab.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:487.063px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/9c7a02b2-3798-42d0-a23e-0f784bc9bf7b.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:499.763px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/94172078-76f8-417b-ba7c-530c55cbeb47.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:587.213px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/c2182673-ca43-42d7-aa58-4eba33d469e0.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:503.675px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/ee1698b9-2a83-4155-8df4-a36059ee1fae.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100"  style="margin-top:-5px;height:532.013px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/0a56d0e2-c978-4d0a-9061-c0045ef6f8dd.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:505.625px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/48faec66-bb81-40e7-95bb-9c3fd5cccb00.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:563.763px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/58dce305-0060-4ae2-a72f-2ca2374cb23c.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:539.825px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/9f773baf-3096-473e-972d-f7551ea45764.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:351.25px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/507bc65e-85bf-4f9f-9b83-7f257bd3a8d7.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:588.675px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/e75d1156-a881-497c-86d6-f2f55f0635b3.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:567.175px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/5d63c49c-bd07-4a16-88ff-02815b040f89.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <img class="w-100" style="margin-top:-5px;height:624.825px;" src="https://img.pddpic.com/mms-material-img/2020-08-15/a7196b94-5776-4fe3-8da1-5f49e92c8588.jpeg.a.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
            <div class="d-flex jc-center ai-center bg-white pt-2 pb-2" v-show="pricedateils == true" @click="pricedateilss" style="margin-top:-5px;">
                <span class="dateilsprice" style="color:rgb(64, 100, 213);font-size:12.7019px;cursor: pointer;">点击查看商品价格说明</span>
            </div>
            <div v-show="pricedateils == false" class="bg-white pr-3 pl-3 pt-3 pb-3" style="margin-top:-5px;">
                <ul style="color:rgb(21, 21, 22);font-size:12.7019px;" class="m-0 p-0">
                    <li>
                        <span style="font-size:14.656px;">价格说明</span>
                    </li>
                    <li class="mt-2">
                        <span>单独购买价：是您单独购买商品的价格</span>
                    </li>
                    <li class="mt-1">
                        <span>发起拼单价：是您拼单购买商品的价格</span>
                    </li>
                    <li class="mt-1">
                        <span>划线价：可能是商品的专柜价、吊牌价、零售价、指导价或该商品曾经展示过的销售价等，并非《价格法》、《禁止价格欺诈行为的规定》规定的“原价”，仅供您参考</span>
                    </li>
                    <li class="mt-1">
                        <span>特别提示：实际的成交价格可能因您使用优惠券等发生变化，最终以订单结算页的价格为准。若商家单独对价格进行说明的，以商家的表述为准</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bg-white w-100 h-100 d-flex jc-left ai-center" style="position: fixed;bottom: 0;left: 0;height:52.75px;">
            <div class="d-flex jc-center ai-center text-center" style="width:60%;height:52.75px;">
                <div style="width:30%">
                    <i class="iconfont icon-shoucang"></i>
                    <span class="pricebottoms">更多</span>
                </div>
                <div style="width:30%">
                    <i class="iconfont icon-shoucang"></i>
                    <span class="pricebottoms">收藏</span>
                </div>
                <div style="width:30%">
                    <i class="iconfont icon-shoucang"></i>
                    <span class="pricebottoms">客服</span>
                </div>
            </div>
            <div class="d-flex w-100" style="font-size:16.6101px;">
                <div style="height:52.75px;background-color:rgb(243, 171, 167);" class="w-100 text-center text-white pt-1">
                    <p>¥9.99</p>
                    <span style="font-size:14.656px;">单独购买</span>
                </div>
                <div style="height:52.75px;background-color:rgb(224, 46, 36);" class="w-100 text-center text-white pt-1">
                    <p>¥5.5</p>
                    <span style="font-size:14.656px;">发起拼单</span>
                </div>
            </div>
        </div>
        <div class="dateils-title d-flex jc-center ai-center bg-white mt-2">
            <i class="iconfont icon-shoucang mr-1"></i>
            <span>相似商品</span>
        </div>
        <DateilsList></DateilsList>
        <div class="mt-5"></div>
    </div>
</template>

<script>
import DateilsList from '../../components/DateilsList/DateilsList'
export default {
    name:'dateils',
    data(){
        return {
            current: 1,
            t:59,
            arr1:[
                {img:'https://avatar2.pddpic.com/a/9250d17c1ea2faedd1551c0fdc3f4171420e5d1d-1587460315?imageMogr2/thumbnail/100',title:'千锤百炼'},{img:'https://avatar2.pddpic.com/a/2d51ae804a42141196f95b88e95798fe6e835b5b-1587460311?imageMogr2/thumbnail/100x',title:'瓜尔佳·嘉琦'}
            ],
            arr2:[
                {img:'https://avatar2.pddpic.com/a/6d7a82236e5b420c8eb12822738a5bb487ca5d23-1587460316?imageMogr2/thumbnail/100x',title:'安于喜欢'},{img:'https://avatar2.pddpic.com/a/8d543a44c07f90c3e247f73fc6771cae1f300214-1587460316?imageMogr2/thumbnail/100x',title:'半暖半夏，爱未央'}
            ],
            i:true,
            list:['很好看(48)','手机不热(5)','好用(62)','质量好(48)','手感好(11)','风扇好(4)','效果好(49)'],
            dateilslist:[
                {img:'https://t00img.yangkeduo.com/goods/images/2020-06-29/6726abef8f6de0c718c4d033c48b6386.jpeg?imageView2/2/w/1300/q/80',title:'吃鸡神器最新款机械轴压枪辅助和平精英穿越火线四指安卓苹果通用',price:'¥6.8',p:'已拼148件'},
                {img:'https://t00img.yangkeduo.com/goods/images/2020-06-29/0964f2178feb5e10ef826c7deacca975.jpeg?imageView2/2/w/1300/q/80',title:'苹果iPhone安卓华为专用吃鸡神器和平小精英辅助连发按键手游手柄',price:'¥4.89',p:'已拼1.4万件'},
                {img:'https://t00img.yangkeduo.com/goods/images/2020-07-02/5daf493c3e480b809dcf9f85e698239c.jpeg?imageView2/2/w/1300/q/80',title:'吃鸡辅助最新款机械轴压枪神器和平精英枪战游戏穿越火线手机通用',price:'¥4.9',p:'已拼2件'},
                {img:'https://t00img.yangkeduo.com/goods/images/2020-07-20/8a7f9ae0b1b9623b2e27962f5b0061ad.jpeg?imageView2/2/w/1300/q/80',title:'手机散热器背夹半导体制冷降温神器吃鸡游戏用无线风扇散热便携式',price:'¥12.88',p:'已拼3358件'},
                {img:'https://t00img.yangkeduo.com/goods/images/2020-07-11/2112fcd41d5e42e8d1cf3419c808a2bd.jpeg?imageView2/2/w/1300/q/80',title:'超薄碳纤维手指套职业选手主播同款防汗手套和平精英吃鸡王者荣耀',price:'¥3.88',p:'已拼468件'},
                {img:'https://t00img.yangkeduo.com/goods/images/2020-08-03/3a0d9f0da0b85f5a0aab345991dd5599.jpeg?imageView2/2/w/1300/q/80',title:'无线散热器游戏手机降温神器半导体制冷王者吃鸡迷你便携式背夹贴',price:'¥15.8',p:'已拼541件'},
            ],
            pricedateils:true,
            swipetimg:['https://img.pddpic.com/mms-material-img/2020-08-15/c4930119-f2e3-4495-bd6f-c70e45ccee74.jpeg.a.jpeg','https://img.pddpic.com/mms-material-img/2020-08-15/c9723671-9ca0-4c56-9966-a8d3da4b86b4.jpeg.a.jpeg','https://img.pddpic.com/mms-material-img/2020-08-15/423bb12c-4883-43b4-98b6-54bf9bf3de1d.jpeg.a.jpeg','https://img.pddpic.com/mms-material-img/2020-08-15/211082e2-7519-4e0f-8e73-b4a1ba44a807.jpeg.a.jpeg','https://img.pddpic.com/mms-material-img/2020-08-15/901f5859-883c-4e50-b693-591a1d71ab54.jpeg.a.jpeg','https://commimg.pddpic.com/garner-api/ebbc32eccb78c354bce93d31525464ba.jpeg','https://commimg.pddpic.com/garner-api/f870a34f046c4c7568f72f7f835e3fa3.jpeg','https://commimg.pddpic.com/garner-api/268757ccf3d097c7db51046723384084.jpeg']
        }
    },
    methods:{
        onChange(index) {
            this.current = index+1;
        },
        arrs(){
            setInterval(() => {
                if(this.i === true){
                    this.i = false
                }else{
                    this.i = true
                }
                this.t = 59;
            }, 3000);
        },
        pricedateilss(){
            this.pricedateils = false;
        }
    },
    components:{
        DateilsList
    },
    created(){
        setInterval(() => {
            this.t = Math.floor(this.t-=0.10);
        }, 1000);
        this.arrs();
    }
}
</script>
<style lang="scss">
.dateils-container{
    .swipet{
        position: absolute;
        bottom:20px;
        right:10px;
        background-color:rgba(0, 0, 0, 0.34);
        border-radius: 50px;
        height:17.575px;
        font-size:12.7019px;
        width:20.325px;
        color: #fff;
    }
    .prices{
        color:rgb(224, 46, 36);
        font-size:14.656px;
        display: inline-block;
    }
    .titles{
        height:36.8px;
        line-height: 36.8px;
    }
    .bottns{
        display: inline-block;
        height:29.3px;
        width:66.4375px;
        background-color: #e02e24;
        color: #fff;
        font-size:13.6789px;
        line-height: 29.3px;
        border-radius: 5px;
    }
    .bottomtitle{
        display: inline-block;
        background-color:rgb(218, 248, 205);
        color:rgb(37, 181, 19);
        font-size:12.7019px;
        height:29.6px;
        width:75.5px;
        line-height: 29.6px;
        border-radius: 5px;
    }
    .dbottons{
        display: inline-block;
        color:rgb(21, 21, 22);
        font-size:13.6789px;
        height:29.3px;
        width:66.4375px;
        border-radius: 5px;
        border: 1px solid rgba(0,0,0,0.3);
        text-align: center;
        line-height: 29.3px;
    }
    .pricebottom{
        display: inline-block;
        font-size:12.7019px;
        color:rgb(21, 21, 22);
        width: 95px;
        height: 15px;
        overflow: hidden;
    }
    .pricebottoms{
        color:rgb(88, 89, 91);
        font-size:10.7477px;
        display: inline-block;
        width: 100%;
    }
}
</style>