<template>
    <div class="pay-container w-100">
        <div class="d-flex jc-center ai-center wx" v-show="wxzfs">
            <div class="bg-white d-flex jc-center ai-center" style="width:300px;height:300px;position: relative;">
                <span @click="wxzfs=false" style="position: absolute;top:20px;right:30px;">X</span>
                <span style="position: absolute;top:20px;left:125px;">微信支付</span>
                <img class="" style="width:205px;height:205px;" src="../../assets/wx.jpg" alt="">
            </div>
        </div>
        <div class="bg-white w-100 d-flex jc-between ai-center" style="height:73.7125px;border-bottom: 1px solid rgba(190, 96, 96, 0.3);">
            <div class="d-flex jc-left ai-center">
                <i class="iconfont icon-dizhi ml-2 mr-2" style="font-size:25px"></i>
                <div>
                    <div class="d-flex jc-left ai-center">
                        <h4 class="m-0 p-0 mr-1">收件人</h4>
                        <span class="text-center" style="font-size:13px;">18813629681</span>
                    </div>
                    <div class="mt-1" style="font-size:12.9515px;color:rgb(21, 21, 22);">
                        <span>广东省 湛江市 雷州市 雷州市火炬农场999</span>
                    </div>
                </div>
            </div>
            <i class="iconfont icon-youjiantou mr-2" style="color: #9c9c9c;font-size:25px;"></i>
        </div>
        <div class="mt-2 bg-white mb-2 w-100" v-for="(item,i) in model " :key="i" v-show="item.ck">  
            <div class="d-flex jc-left ai-center pt-2 pl-3 pb-2">
                <img class="mr-3" style="height:19.925px;width:19.925px;" :src="item.sjimg" alt="">
                <span style="font-size:12.9515px;">{{item.sjtitle}}</span>
            </div>
            <div class="d-flex jc-left ai-center pt-2 pl-3 pb-2" style="background-color:rgb(245, 245, 245);">
                <img class="mr-2" style="height:89.6625px;" :src="item.img" alt="">
                <div>
                    <p class="mb-1" style="color:rgb(21, 21, 22);font-size:12.9515px;">{{item.title}}</p>
                    <span style="color:rgb(156, 156, 156);font-size:11.9552px;">口味: {{item.arr.kw}}</span>
                    <div class="d-flex mt-3">
                        <p style="color:rgb(21, 21, 22);font-size:13.9477px;" class="mr-1">{{item.price}}/件</p>
                        <p class="tuik">极速退款</p>
                    </div>
                </div>
            </div>
            <div class="d-flex jc-between ai-center pt-3 pb-3 ml-3 mr-3" style="border-bottom: 1px solid rgba(0,0,0,0.1);">
                <span style="color:rgb(21, 21, 22);font-size:13.9477px;">购买数量</span>
                <div class="d-flex jc-center ai-center">
                    <p @click="counts(i,-1)" :class="item.arr.count == 1 ? 'bgbottons' : ''" class="bottons mr-1">-</p>
                    <input type="text" class="inputs" v-model="item.arr.count">
                    <p @click="counts(i,+1)" :class="item.arr.count == 30 ? 'bgbottons' : ''" class="bottons ml-1">+</p>
                </div>
            </div>
            <div class="pt-3 pb-3 ml-3 mr-3 d-flex jc-between ai-center">
                <span style="color:rgb(21, 21, 22);font-size:13.9477px;">店铺优惠</span>
                <span style="color:rgb(224, 46, 4);font-size:13.9477px;">第2件减2元</span>
            </div>
        </div>
        <div class="mt-2 bg-white">
            <div @click="pays(1)" :class="clickbg==1 ? 'clickbg' : ''" class="pl-3 pr-3 pt-3 pb-3 d-flex jc-between ai-center" style="border-bottom: 1px solid rgba(0,0,0,0.1);">
                <div class="d-flex jc-left ai-center">
                    <img class="mr-3" style="height:21.9125px;width:21.9125px;" src="https://funimg.pddpic.com/pay_icon/wechat_pay_v1.png" alt="">
                    <span style="font-size:14.944px;">微信支付</span>
                </div>
                <i class="iconfont icon-duigou" v-show="pay==1" style="font-size:20px;font-weight: bold;"></i>
            </div>
            <div @click="pays(2)" :class="clickbg==2 ? 'clickbg' : ''" class="pt-3 pb-2 pb-3 pl-3 pr-3 d-flex jc-between ai-center">
                <div class="d-flex jc-center ai-center">
                    <img class="mr-3" style="height:21.9125px;width:21.9125px;" src="https://funimg.pddpic.com/pay_icon/alipay_v1.png" alt="">
                    <span class="mr-2">支付宝</span>
                    <span style="color:rgb(88, 89, 91);font-size:13.9477px;">(可安全免密支付)</span>
                </div>
                <i class="iconfont icon-duigou" v-show="pay==2" style="font-size:20px;font-weight: bold;"></i>
            </div>
        </div>
        <div :class="modellength == 1 ? 'margin-t' : ''" class="d-flex jc-center ai-center mt-2" style="color:rgb(156, 156, 156);font-size:11.9552px;margin-bottom:60.8px;">
            <i class="iconfont icon-anquan mr-1"></i>
            <span>平台用户信息安全由</span>
            <img style="height:11.95px;width:86.675px;" src="https://funimg.pddpic.com/order_checkout/picc_v2.png" alt="">
            <span>承保</span>
        </div>
        <div class="pays d-flex jc-between ai-center w-100 bg-white" style="max-width:379px;">
            <div class="text-right" style="width:60%; line-height: 60%;">
                <span style="font-size:13.9477px;">实付款:</span>
                <span style="font-size:19.9253px;color:rgb(224, 46, 36);">{{countprice}}</span>
                <span class="ml-1 pr-2" style="color:rgb(224, 46, 36);font-size:13.9477px;">免运费</span>
            </div>
            <div class="payzf" @click="payprice">立刻支付</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'pay',
    data(){
        return {
            model:[],
            pay:1,
            i:-1,
            clickbg:0,
            modellength:0,
            wxzfs:false
        }
    },
    methods:{
        counts(i,n){
            this.i = i;
            if(this.model[this.i].arr.count >= 1){
                this.model[this.i].arr.count += n;
            }
            if(this.model[this.i].arr.count < 1){
                this.model[this.i].arr.count = 1;
            }
        },
        pays(n){
            this.clickbg = n;
            this.pay = n;
            setTimeout(() => {
                this.clickbg = 0;
            }, 100);
        },
        payprice(){
            if(this.pay==2){
                this.$notify({ type: 'primary', message: '支付宝维护更新中' });
            }else{
                this.wxzfs = true;
            }
        }
    },
    components:{

    },
    created(){
        this.model =JSON.parse(sessionStorage.obj);
        for(var i of this.model){
            if(i.ck){
                this.modellength+=1;
            }
        }
    },
    watch:{
        
    },
    computed:{
        countprice(){
            var price = 0;
            for(var i of this.model){
                if(i.ck){
                    price += i.price.slice(1) * Number(i.arr.count)
                }
            }
            // var i = Number(this.collectionlist[this.n].price.slice(1)) * Number(this.collectionlist[this.n].arr.count);
            // this.collectionlist[this.n].countprice = '￥'+i.toFixed(2);
            return '￥'+price.toFixed(2);
        }
    }
}
</script>
<style lang="scss">
.pay-container{
    .tuik{
        color:rgb(51, 155, 41);
        border: 1px solid rgb(51, 155, 41);
        height:17.925px;
        width:57.7375px;
        text-align: center;
        line-height: 17.925px;
        font-size:11.9552px;
    }
    .clickbg{
        background-color: rgba(153, 153, 153, 0.205);
    }
    .margin-t{
        margin-top: 137px;
    }
    .pays{
        position: fixed;
        bottom: 0;
        left: 0;
        height:52.8px;
    }
    .payzf{
        color:rgb(255, 255, 255);
        font-size:17.9328px;
        text-align: center;
        width:145.45px;
        height:52.8px;
        line-height: 52.8px;
        background-color:rgb(224, 46, 36);
    }
    .wx{
        background-color: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        position: fixed;
    }
}
</style>