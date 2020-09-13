<template>
    <div class="index-container">
        <!-- <div class="d-flex jc-center ai-cneter w-100 bg-white pl-3 pr-3 fw" style="height:145px;">
            <div v-for="item in 10" :key="item" class="tops d-flex jc-center ai-center flex-column" style="width:30px;height30px;">
                <img src="../../../assets/Index-Childer/Recommend/1.webp" alt="">
                <p class="p-0 m-0">限时秒杀</p>
            </div>
            <div></div>
        </div> -->
        <div class="hot-nav pb-2">
            <div class="hot-nav-content">
                <div class="nav-content-inner d-flex fw">
                    <a class="inner-item d-flex flex-column jc-center ai-center" v-for="(item,i) of navimgtitle " :key="i">
                        <img class="mb-1" :src="item.img" alt="">
                        <span style="color:rgb(102, 102, 102);font-size:11.0592px;" class="p-0 m-0">{{item.title}}</span>
                    </a>
                </div>
            </div>
            <div class="hot-nav-bottom">
                <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
            </div>
        </div>
        <div class="cart pt-2 pl-3 pr-3">
            <div class="cart-top d-flex jc-between ai-center w-100">
                <div class="d-flex jc-center ai-center">
                    <img style="width:25px;height:25px;" class="mr-2" src="../../../assets/Index-Childer/Recommend/cart1.webp" alt="">
                    <p class="m-0 p-0">百亿补贴</p>
                    <div class="fgx ml-2 mr-2"></div>
                    <span>大牌正品 官方补贴</span>
                </div>
                <div class="d-flex jc-center ai-center">
                    <span>查看更多</span>
                    <i class="iconfont icon-youjiantou" style="color: #9c9c9c;"></i>
                </div>
            </div>
            <div class="cart-bottom jc-between d-flex h-100 w-100 mt-2">
                <img style="width:150px;height:100px;" src="../../../assets/Index-Childer/Recommend/cart2.webp" alt="">
                <div class="d-flex">
                    <div class="d-flex flex-column ai-center">
                        <img style="width:80px;" src="../../../assets/Index-Childer/Recommend/cart3.webp" alt="">
                        <p class="m-0 p-0 mt-2">已补贴￥200</p>
                    </div>
                    <div class="d-flex flex-column ai-center">
                        <img style="width:80px;" src="../../../assets/Index-Childer/Recommend/cart3.webp" alt="">
                        <p class="m-0 p-0 mt-2">已补贴￥200</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-details mt-2 w-100 h-100 pt-2 pl-3 pr-3">
            <router-link tag="div" to="/Dateils" class="dateils d-flex w-100" v-for="item in 4 " :key="item">
                <img style="width:150px;height:140px;" class="mr-2" src="../../../assets/Index-Childer/Recommend/dateils.webp" alt="">
                <div class="flex-1 pl-2 mb-1" style="border-bottom:0.1px solid #ccc" :class="item==4 ? 'n' : ''">
                    <p class="m-0 p-0 mb-1">适用华为oppo安卓vivo苹果红米荣耀小米苹果手机快充数据线充电线</p>
                    <div></div>
                    <span class="subtitle text-center mb-3">致际旗舰店</span><br>
                    <span class="subtitle text-center subtitle1">只换不修</span>
                    <div class="price d-flex jc-between ai-center mt-2" style="border-bottom:none;">
                        <div class="d-flex jc-center ai-center">
                            <p class="m-0 p-0 mr-1">￥1.05</p>
                            <span>已拼10万+件</span>
                        </div>
                        <div class="d-flex">
                            <div class="userimg"></div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="cart pt-2 pl-3 pr-3">
            <div class="cart-top d-flex jc-between ai-center w-100">
                <div class="d-flex jc-center ai-center">
                    <img style="width:25px;height:25px;" class="mr-2" src="../../../assets/Index-Childer/Recommend/cart1.webp" alt="">
                    <p class="m-0 p-0">百亿补贴</p>
                    <div class="fgx ml-2 mr-2"></div>
                    <span>大牌正品 官方补贴</span>
                </div>
                <div class="d-flex jc-center ai-center">
                    <span>查看更多</span>
                    <i class="iconfont icon-youjiantou" style="color: #9c9c9c;"></i>
                </div>
            </div>
            <div class="cart-bottom jc-between d-flex h-100 w-100 mt-2">
                <img style="width:150px;height:100px;" src="../../../assets/Index-Childer/Recommend/cart2.webp" alt="">
                <div class="d-flex">
                    <div class="d-flex flex-column ai-center">
                        <img style="width:80px;" src="../../../assets/Index-Childer/Recommend/cart3.webp" alt="">
                        <p class="m-0 p-0 mt-2">已补贴￥200</p>
                    </div>
                    <div class="d-flex flex-column ai-center">
                        <img style="width:80px;" src="../../../assets/Index-Childer/Recommend/cart3.webp" alt="">
                        <p class="m-0 p-0 mt-2">已补贴￥200</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-details mt-2 w-100 h-100 pt-2 pl-3 pr-3">
            <div class="dateils d-flex w-100" v-for="item in 4 " :key="item">
                <img style="width:150px;height:140px;" class="mr-2" src="../../../assets/Index-Childer/Recommend/dateils.webp" alt="">
                <div class="flex-1 pl-2 mb-1" style="border-bottom:0.1px solid #ccc" :class="item==4 ? 'n' : ''">
                    <p class="m-0 p-0 mb-1">适用华为oppo安卓vivo苹果红米荣耀小米苹果手机快充数据线充电线</p>
                    <div></div>
                    <span class="subtitle text-center mb-3">致际旗舰店</span><br>
                    <span class="subtitle text-center subtitle1">只换不修</span>
                    <div class="price d-flex jc-between ai-center mt-2" style="border-bottom:none;">
                        <div class="d-flex jc-center ai-center">
                            <p class="m-0 p-0 mr-1">￥1.05</p>
                            <span>已拼10万+件</span>
                        </div>
                        <div class="d-flex">
                            <div class="userimg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'index',
    data(){
        return {
            // 屏幕宽度
            screenW:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            //滚动内容宽度
            scrollContentW:530,
            // 滚动条背景长度
            bgBarW:100,
            // 滚动条的长度
            barXWidth:0,
            // 起点
            startX:0,
            // 结束点
            endFlag:0,
            // 移动距离
            barMoveWidth:0,
            navimgtitle:[{img:'https://t00img.yangkeduo.com/goods/2020-04-29/798a43c5ae721a5d3dbbcbd5f95488db.png?imageView2/2/w/117/q/80/format/webp',title:'限时秒杀'},{img:'https://t00img.yangkeduo.com/goods/2020-03-08/2723bae18ca29e72c195562bfdace6cd.png?imageView2/2/w/117/q/80/format/webp',title:'断码清仓'},{img:'https://t00img.yangkeduo.com/goods/2020-01-14/bc63ae848c923737bd799b96d5219f85.png?imageView2/2/w/117/q/80/format/webp',title:'新衣馆'},{img:'https://t00img.yangkeduo.com/goods/2020-01-14/b39df4af9b17ba0d063c04da0aea85aa.png?imageView2/2/w/117/q/80/format/webp',title:'多多果园'},{img:'https://t00img.yangkeduo.com/goods/2020-01-14/8ed387bd5d07f45ce6fee30a0ab80e80.png?imageView2/2/w/117/q/80/format/webp',title:'9块9特卖'},{img:'https://t00img.yangkeduo.com/goods/2020-01-14/37fe68d866cb25a887beeb74699196b9.png?imageView2/2/w/117/q/80/format/webp',title:'多多爱消除'},{img:'https://t00img.yangkeduo.com/goods/2020-01-14/268178927edd263209650e1c189f5662.png?imageView2/2/w/117/q/80/format/webp',title:'天天领现金'},{img:'https://t00img.yangkeduo.com/goods/2020-01-14/0fab520471880b5728fb7150d77f5390.png?imageView2/2/w/117/q/80/format/webp',title:'充值中心'},{img:'https://t00img.yangkeduo.com/goods/2020-02-26/f9e3069d2e461cd5f5eb7d77ffce9d9d.png?imageView2/2/w/117/q/80/format/webp',title:'医药馆'},{img:'https://t00img.yangkeduo.com/goods/2020-02-24/1ac41ebf88457e29ac4f8b5a01e72f1d.png?imageView2/2/w/117/q/80/format/webp',title:'现金签到'},{img:'https://t00img.yangkeduo.com/goods/2020-01-19/fa5b1478454c1cdd60d587c4642a67f5.png?imageView2/2/w/117/q/80/format/webp',title:'全球购'},{img:'https://t00img.yangkeduo.com/goods/2020-01-19/617e5544f4e923c683ba601f8d39cd74.png?imageView2/2/w/117/q/80/format/webp',title:'电器城'},{img:'https://t00img.yangkeduo.com/goods/2020-01-14/106c4357375875825f204a28cd7d3387.png?imageView2/2/w/117/q/80/format/webp',title:'砍价免费拿'},{img:'https://t00img.yangkeduo.com/goods/2020-01-14/54ece7ca8c54cd8925d631323659e42f.png?imageView2/2/w/117/q/80/format/webp',title:'省钱月卡'}]
        }
    },
    computed:{
        innerBarStyle(){
            return {
                width:`${this.barXWidth}px`,
                left:`${this.barMoveWidth}px`
            }
        }
    },
    methods:{
        getBottomBarWidth(){
            this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW);
        },
        // 移动端事件监听
        bindEvent(){
            this.$el.addEventListener('touchstart',this.handleTouchStart,false)
            this.$el.addEventListener('touchmove',this.handleTouchMove,false)
            this.$el.addEventListener('touchend',this.handleTouchEnd,false)
        },
        // 开始触摸
        handleTouchStart(event){
            // console.log('开始触摸')
            // console.log(event.touches)
            let touch = event.touches[0];
            this.startX = Number(touch.pageX);
        },
        // 开始移动
        handleTouchMove(event){
            // console.log('开始移动')
            let touch = event.touches[0];
            let moveWidth = Number(touch.pageX) - this.startX;
            this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth -this.endFlag);
            if(this.barMoveWidth <= 0){
                this.barMoveWidth = 0;
            }else if(this.barMoveWidth >= this.bgBarW -this.barXWidth){
                this.barMoveWidth = this.bgBarW -this.barXWidth;
            }
        },
        // 结束触摸
        handleTouchEnd(){
            // console.log('结束触摸')
            this.endFlag = this.barMoveWidth
        },
    },
    components:{

    },
    mounted(){
        this.getBottomBarWidth();
        this.bindEvent();
    }
}
</script>
<style lang="scss">
.index-container{
    .hot-nav{
        width: 100%;
        height: 180px;
        position: relative;
        background-color: #ffffff;
        .hot-nav-content{
            width: 100%;
            overflow-x: scroll;
            .nav-content-inner{
                width: 525px;
                height: 180px;
                .inner-item{
                    width: 75px;
                    height: 80px;
                    font-size: 14px;
                    img{
                        width:35.9375px;
                        height:35.9375px;
                    }
                }
            }
        }
        .hot-nav-content::-webkit-scrollbar{
            display: none;
        }
        .hot-nav-bottom{
            width: 100px;
            height: 2px;
            background-color: #ccc;
            position: absolute;
            left: 50%;
            margin-left: -50px;
            bottom: 7px;
            .hot-nav-bottom-inner{
                position: absolute;
                left:0px;
                height: 100%;
                background-color: orangered;
                width: 50px;
            }
        }
    }
    border-top: 2px solid  #ededed;
    // 商品卡片
    .cart{
        background-color: #ffffff;
        width: 100%;
        height: 154px;
        margin-top: 10px;
        .cart-top{
            p{
                color:rgb(21, 21, 22);
                font-weight: bold;
                font-size: 15px;
            }
            span{
                color:rgb(156, 156, 156);
                font-size: 13px;
            }
            .fgx{
                width: 0.5px;
                background-color: #666;
                height: 15px;
            }
        }
        .cart-bottom{
            p{
                color: rgb(224, 46, 36);
                font-size: 10px;
            }
        }
    }
    // 商品详情
    .index-details{
        background-color: #ffffff;
        .dateils{
            height: 150px;
            p{
                font-size: 13px;
                color: rgb(21, 21, 22);
            }
        }
    }
    .n{
        border-bottom: none !important;
    }
}
</style>