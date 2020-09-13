<template>
    <div class="Attention-container w-100" style="margin-bottom:50px;">
        <div class="Attention-top d-flex ai-center jc-between bg-white pl-2 pr-2 pt-2">
            <p>我的关注</p>
            <span>查看更多 <i class="iconfont icon-youjiantou"></i> </span>
        </div>
        <div class="Attention-center d-flex jc-left ai-center mb-2 bg-white pl-2 pr-2 pt-2">
            <div style="width:60px;" class="text-center mr-2" v-for="item in userarr" :key="item.img">
                <img :src="item.img" alt="">
                <span class="guanztitle">{{item.title}}</span>
            </div>
        </div>
        <div class="w-100 bg-white Attention-bottom pt-2 pl-2 pr-2 mb-2">
            <span>关注动态</span>
            <div class="d-flex jc-center ai-center flex-column " style="height:250px;">
                <i class="iconfont icon-guanzhu" style="font-size:100px;"></i>
                <p style="color:rgb(88, 89, 91);font-size:15.36px;">暂无店铺动态数据</p>
            </div>
        </div>
        <div class="dateils-title d-flex jc-center ai-center bg-white">
            <i class="iconfont icon-shoucang mr-1"></i>
            <span>推荐店铺</span>
        </div>
        <div v-for="item in arr " :key="item.img" class="d-flex flex-column pl-2 pr-2 pt-2 bg-white" style="border-bottom: 0.1px solid rgba(0,0,0,0.7);">
            <div class="d-flex jc-between ai-center" style="height:40px;">
                <div class="titles d-flex jc-center ai-center">
                    <img style="width:40px;" :src="item.img" alt="">
                    <div class="ml-2">
                        <p class="m-0 p-0">{{item.title}}</p>
                        <span>总售10万+件</span>
                        <span class="kuanshi">退货包运费</span>
                    </div>
                </div>
                <button class="buttons" @click="guanz(item.img,item.title)">关注</button>
            </div>
            <div class="d-flex jc-center ai-center mt-3 ml-5">
                <img style="width:100xp;height:100px;" class="mr-1" src="https://t00img.yangkeduo.com/goods/images/2020-05-04/32acf798ea4bac4f3baa16f149ec7ce8.jpeg?imageMogr2/sharpen/50%7CimageView2/2/w/294/q/80/format/webp" alt="">
                <img style="width:100xp;height:100px;" class="mr-1" src="https://t00img.yangkeduo.com/goods/images/2020-05-04/32acf798ea4bac4f3baa16f149ec7ce8.jpeg?imageMogr2/sharpen/50%7CimageView2/2/w/294/q/80/format/webp" alt="">
                <img style="width:100xp;height:100px;" class="mr-1" src="https://t00img.yangkeduo.com/goods/images/2020-05-04/32acf798ea4bac4f3baa16f149ec7ce8.jpeg?imageMogr2/sharpen/50%7CimageView2/2/w/294/q/80/format/webp" alt="">
            </div>
            <div class="d-flex jc-left ai-center ml-5 mb-2 mt-2">
                <p class="m-0 p-0" style="font-size:13.44px;color:rgb(88, 89, 91);">评价: </p>
                <span class="guangao ml-2">正品</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Attention',
    data(){
        return {
            // 关注的商家
            userarr:[{img:'https://t00img.yangkeduo.com/goods/images/images/2019-09-24/bc82399d-e799-44dc-80e3-2809f41bc281_suffix.jpeg?imageView2/2/w/255/q/80',title:"大咖软件"}],
            // 商品
            arr:[{img:'https://t16img.yangkeduo.com/pdd_ims/mainObject/v1/pub_2020033185cc0f4ed47642c4b051dc915812cb53.jpg?imageMogr2/sharpen/50%7CimageView2/2/w/126/q/80/format/webp',title:'义乌杂货铺一店'},{img:'https://t00img.yangkeduo.com/goods/images/2020-07-12/2e2172e6-e03b-4269-802f-d03b8eeaaed6_suffix.jpg?imageMogr2/sharpen/50%7CimageView2/2/w/126/q/80/format/webp',title:'华德莱数码旗舰店'},{img:'https://t16img.yangkeduo.com/pdd_ims/mainObject/v1/pub_2019111069574fc25c6147d5b6a35d6ec28ef2eb.jpg?imageMogr2/sharpen/50%7CimageView2/2/w/126/q/80/format/webp',title:'才能补给站2'}]
        }
    },
    methods:{
        guanz(userimg,usertitle){
            var obj = {}
            obj.img = userimg;
            obj.title = usertitle;
            this.userarr.push(obj)
        }
    },
    components:{

    }
}
</script>
<style lang="scss">
.Attention-container{
    .Attention-top{
        color:rgb(156, 156, 156);
        font-size:13.44px;
        p{
            font-size:15.36px;
            color:rgb(21, 21, 22);
        }
    }
    .Attention-center{
        overflow: hidden;
        img{
            width: 60px;
            height: 60px;
        }
        span{
            font-size:12.48px;
            color:rgb(21, 21, 22);
        }
        .guanztitle{
            width: 65px;
            display: inline-block;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
    .Attention-bottom{
        span{
            font-size:15.36px;
            color:rgb(21, 21, 22);
        }
    }
    .titles{
        p{
            font-size:14.4px;
            color:rgb(21, 21, 22);
            font-weight: bold;
        }
        span{
            color:rgb(156, 156, 156);
            font-size:11.52px;
        }
    }
    .buttons{
        color:rgb(224, 46, 36);
        font-size:13.44px;
        height:26.875px;
        width:62.4px;
        outline: none;
        border-radius: 3px;
        border: 1px solid #e02e24;
        background-color: #ffffff;
    }
    .guangao{
        display: inline-block;
        background: rgba(224,46,36,.1);
        border-radius: 3px;
        font-size:12px;
        height: 18px;
        line-height:18px;
        width:31.675px;
        text-align: center;
        color:rgb(102, 102, 102)
    }
}
</style>