<template>
    <div class="Collection-container">
        <router-link to="/Search" tag="div" class="top w-100 pt-2 pl-3 pr-4" style="height:55px;z-index:1000;">
            <div class="search">
                <div class=" d-flex jc-between ai-center w-100 h-100 p-2">
                    <div></div>
                    <div>
                        <i class="iconfont icon-search mr-2"></i>
                        <span>3元以下</span>
                    </div>
                    <i class="iconfont icon-xiangji" style="font-size:20px;"></i>
                </div>
            </div>
        </router-link>
        <div style="margin-top:55px;"></div>
        <div class="bg-white pl-3 pr-3 mb-2" v-for="(item,i) in collectionlist " :key="i">
            <div class="bg-white pr-3 pl-3 pt-2">
                <div class="d-flex jc-left ai-center">
                    <img class="mr-2" style="height:17.5375px;width:17.5375px;" :src="item.sjimg" alt="">
                    <span style="color:rgb(88, 89, 91);font-size:12.7019px;" class="mr-2">{{item.sjtitle}}</span>
                    <img style="width:56.6375px;height:15.625px;" src="https://t16img.yangkeduo.com/mms_static/2019-12-04/ea0eaa26-203d-487b-9d7e-9c920c0b8d51.gif?imageView2/2/w/1300/q/80" alt="">
                    <i class="iconfont icon-youjiantou" style="color:rgba(0, 0, 0, 0.15);font-size:20px"></i>
                </div>
            </div>
            <div class="d-flex jc-center ai-center">
                <div style="width:41.025px;height:130.925px;" class="d-flex jc-left ai-center mr-2">
                    <img @click="ck(i,item.ck,item)" style="height:17.575px;width:17.575px;" v-show="item.ck==false" src="https://funimg.pddpic.com/like/v2/goods_collection_checkbox_v5.png" alt="">
                    <img @click="ck(i,item.ck,item)" style="height:17.575px;width:17.575px;" v-show="item.ck==true" src="https://funimg.pddpic.com/like/v2/goods_collection_checkbox_active_v3.png" alt="">
                </div>
                <div style="height:155.288px;width:366.4px;" :class="item.youhuishow == true ? 'border' : ''" class="d-flex jc-left ai-center mb-2">
                <div style="height:111.375px;width:111.375px;position: relative;" class="bgimgs mr-2">
                    <img style="height:111.375px;width:111.375px;" :src="item.img" alt="">
                </div>
                <div>
                    <p style="color:rgb(21, 21, 22);font-size:13.6789px;width:190px;height:38px;overflow: hidden;">{{item.title}}</p>
                    <!-- 选择款式 -->
                    <div class="ks mb-4 mt-2 pl-1 pr-1" v-show="item.kzdateils==false" @click="ck(i,item.ck,item)">
                        <span>请选择款式</span>
                        <i class="iconfont icon-youjiantou" style="color:rgba(0, 0, 0, 0.15);font-size:10.7477px;"></i>
                    </div>
                    <!-- 选择完款式后 -->
                    <div v-show="item.kzdateils==true">
                        <div class="d-flex jc-between ai-center ks pl-1 pr-1 mt-1" style="width:161.212px;" @click="ck(i,item.ck,item,4,'ks')">
                            <div class="d-flex jc-left ai-center">
                                <!-- 口味 -->
                                <span class="texts" :class="model[i].dateils[0].ks ? 'ws' : 'w'">{{item.arr.kw}}:</span>
                                <!-- 款式 -->
                                <span class="texts text-left" v-show="model[i].dateils[0].ks">{{item.arr.ks}}</span>
                            </div>
                            <!-- 數量 -->
                            <span>x{{item.arr.count}}</span>
                        </div>
                        <div class="ks mt-2" style="background-color:rgb(244, 244, 244);width:75.225px;" @click="zailaiyidan()">
                            <span>再选一款 + </span>
                        </div>
                    </div>
                    <div class="d-flex jc-between ai-center pr-2 mt-2">
                        <div>
                            <span style="color:rgb(224, 46, 36);font-size:15.6331px" class="mr-1">{{item.price}}</span>
                            <span style="color:rgb(156, 156, 156);font-size:11.7248px;">{{item.pd}}</span>
                        </div>
                        <span style="color:rgb(208, 208, 208);font-weight: bold;">···</span>
                    </div>
                </div>
                </div>
            </div>
            <div class=" d-flex jc-left ai-center mr-2 pb-2" v-show="item.youhuishow">
                <span class="youhui1 text-center pl-1 pr-1 mr-2 ml-4">{{item.youhui1}}</span>
                <span class="youhui2 pl-2 pr-1">{{item.youhui2}}</span>
            </div>
            <div class=" d-flex jc-left ai-center mr-2 pb-2" v-show="item.ck">
                <span class="ml-4 pt-1" style="color:rgb(88, 89, 91);font-size:13.9477px;border-top: 1px solid rgba(0, 0, 0, 0.1);width: 366.4px;">店铺小计：{{item.countprice}}</span>
            </div>
            <!-- 款式 -->
            <div style="margin-bottom:-480px;transition: 0.5s;height:430.3px;z-index:1002" class="pricekuanshi bg-white w-100" :class="ksshow == true ? 'm' : ''">
                <div class="w-100">
                    <div class="w-100 d-flex jc-between ai-center pb-3 pl-3 pr-3" style="height:80.0875px;border-bottom: 1px solid rgba(0,0,0,0.1);">
                        <div class="d-flex jc-left ai-center w-100">
                            <img style="margin-bottom:20px;height:95.75px;width:95.75px;" :src="model[i].img" alt="">
                            <div class="ml-2 w-100">
                                <p style="font-size:16.6101px;color:rgb(224, 46, 36)">¥2.9-18.8</p>
                                <span style="color:rgb(21, 21, 22);font-size:12.7019px;">请选择 口味</span>
                            </div>
                        </div>
                        <span @click="guanbi">X</span>
                    </div>
                    <div class="pt-2 pb-2 pl-3 pr-3" style="border-bottom: 1px solid rgba(0,0,0,0.1);">
                        <span style="font-size:13.6789px;color:rgb(21, 21, 22);">口味</span>
                        <div class="mt-2 fw d-flex jc-left ai-center">
                            <span @click="item1(i,item)" :class="action==i || collectionlist[n].arr.kwi==i ? 'action' : ''" class="ksn pl-2 pr-2 mr-2 mb-2" v-for="(item,i) in model[n].dateils[0].kw" :key="i">{{item}}</span>
                        </div>
                    </div>
                    <div class="pt-2 pb-2 pl-3 pr-3" style="border-bottom: 1px solid rgba(0,0,0,0.1);" v-show="model[n].dateils[0].ks">
                        <span style="font-size:13.6789px;color:rgb(21, 21, 22);">款式</span>
                        <div class="mt-2 fw d-flex jc-left ai-center">
                            <span @click="items(i,item)" :class="actions==i || collectionlist[n].arr.ksi==i ? 'action' : ''" class="ksn pl-2 pr-2 mr-2 mb-2" v-for="(item,i) in model[n].dateils[0].ks" :key="i">{{item}}</span>
                        </div>
                    </div>
                    <div class="pl-3 pr-3 pt-2 d-flex ai-center jc-between">
                        <span style="color:rgb(21, 21, 22);font-size:13.6789px;">数量</span>
                        <div class="d-flex jc-center ai-center">
                            <p @click="counts(-1)" :class="count == 1 ? 'bgbottons' : ''" class="bottons mr-1">-</p>
                            <input type="text" class="inputs" v-model="collectionlist[n].arr.count">
                            <p @click="counts(+1)" :class="count == 30 ? 'bgbottons' : ''" class="bottons ml-1">+</p>
                        </div>
                    </div>
                    <div class="qdbottons w-100" @click="qdbts(ksdateils.kw, model[i].dateils[0].ks ? ksdateils.ks : -1)">
                        <span>确定</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="dateils-title d-flex jc-center ai-center bg-white mt-2">
            <i class="iconfont icon-shoucang mr-1"></i>
            <span>精选推荐</span>
        </div>
        <div @click="guanbi" class="showss w-100" v-show="ksshow==true" style="z-index:1001"></div>
        <div class="zfbottons w-100 d-flex jc-between ai-center pl-3 h-100" v-show="ksshow == false">
            <div style="color:rgb(88, 89, 91);font-size:13.9477px;" class="d-flex h-100 jc-center ai-center">
                <span>已选</span>
                <span>{{spcount}}款</span>
                <i class="iconfont icon-youjiantou" style="color:rgba(0, 0, 0, 0.15);font-size:20px;"></i>
            </div>
            <div class="d-flex jc-center ai-center h-100">
                <div class="mr-2">
                    <span style="color:rgb(88, 89, 91);font-size:11.9552px;">合计：</span>
                    <span style="color:rgb(224, 46, 36);font-size:19.9253px;">{{countprice}}</span>
                </div>
                <span class="jiesuanbottons" @click="jiesuan">去结算</span>
            </div>
        </div>
        <dateilslist></dateilslist>
    </div>
</template>

<script>
import dateilslist from '../../components/DateilsList/DateilsList'
export default {
    name:'Collection',
    data(){
        return {
            action:-1,
            actions:-1,
            count:1,
            i:0,
            collectionlist:[
                {
                    sjimg:'https://t16img.yangkeduo.com/pdd_ims/48289f00326e3a21a491b8c01cee2335.jpg?imageView2/2/w/80/q/80',
                    sjtitle:'凡凡食品',
                    ck:false,
                    img:'https://img.pddpic.com/mms-material-img/2020-07-08/a368d482-005e-4111-8611-53376bde28eb.jpeg.a.jpeg?imageView2/2/w/300/q/80',
                    title:'手撕素肉素牛排辣条麻辣豆干豆腐年货批发休闲零食小吃零食大礼包',
                    price:'￥6.9',
                    countprice:'￥0',
                    pd:'已拼10万+件',
                    youhuishow:true,
                    youhui1:'满返',
                    youhui2:'满26返2',
                    kzdateils:false,
                    dateils:[
                        {
                            kw:['混合味','香辣味','麻辣味','烧烤味'],
                            ks:['30包（活动款）','10包','20包','50包','100包','60包【大分量实惠装】'],
                            count:1
                        }
                    ],
                    arr:{ks:'',kw:'',count:1,ksi:-1,kwi:-1}
                },
                {
                    sjimg:'https://t00img.yangkeduo.com/chat/images/2018-08-28/f23eea5cbba41fb2cc39a3cdad698e43.png?imageView2/2/w/80/q/80',
                    sjtitle:'海尚食品保健专营店',
                    ck:false,
                    img:'https://t00img.yangkeduo.com/goods/images/2019-07-19/bc8604849c0dd790d344a2ec34cb16a2.jpeg?imageView2/2/w/300/q/80',
                    title:'宇仔大刀肉辣条大礼包8090后怀旧麻辣网红辣条零食小吃100g多规格',
                    price:'￥2.9',
                    countprice:'￥0',
                    pd:'已拼10万+件',
                    kzdateils:false,
                    dateils:[
                        {
                            kw:['大刀肉尝鲜装（15颗）','15个（106克）【尝鲜装】','大刀肉1袋250克（约41个）','大刀肉2袋500克（约82个）'],
                            count:1
                        }
                    ],
                    arr:{ks:'',kw:'',count:1,ksi:-1,kwi:-1}
                }
            ],
            imgs:false,
            ksshow:false,
            model:[{dateils:[{kw:[],ks:[]}]},{dateils:[{kw:[],ks:[]}]}],
            ksdateils:{ks:'',kw:'',count:'',ksi:-1,kwi:-1},
            n:0,
            arr:[]
        }
    },
    methods:{
        jiesuan(){
            for(var i of this.collectionlist){
                if(i.ck){
                    sessionStorage.obj =JSON.stringify(this.collectionlist);
                    this.$router.push('/pay')
                    // this.$notify({ type: 'primary', message: '跳转支付页面' });
                    return;
                }else{
                    this.$notify({ type: 'danger', message: '请选择一个商品' });
                }
            }
        },
        item1(i,item){
            this.ksdateils.kw = item;
            this.ksdateils.kwi = i;
            this.action = i;
            if(this.collectionlist[this.n].arr.kw !== (item && this.collectionlist[this.n].kzdateils==true)){
                this.collectionlist[this.n].arr.kwi = i;
            }
        },
        items(i,item){
            this.ksdateils.ks = item;
            this.ksdateils.ksi = i;
            this.actions = i;
            if(this.collectionlist[this.n].arr.ks !== (item && this.collectionlist[this.n].kzdateils==true)){
                this.collectionlist[this.n].arr.ksi = i;
            }
        },
        countp(){
            if(this.collectionlist[this.n].ck == true){
                var i = Number(this.collectionlist[this.n].price.slice(1)) * Number(this.collectionlist[this.n].arr.count);
                this.collectionlist[this.n].countprice = '￥'+i.toFixed(2);
                
            }
        },
        ck(n,item,text,number4,qingxuanzhekuanshi){
            this.ksdateils = {ks:'',kw:'',count:'',ksi:-1,kwi:-1};
            if(this.collectionlist[n].arr.count !== 1){
                this.count = this.collectionlist[n].arr.count;
            }
            this.n = n;
            if(number4 !== undefined){
                this.ksshow = true;
                this.ksdateils = {ks:'',kw:'',count:'',ksi:-1,kwi:-1};
            }
            this.model[n] = text;
            this.model.count = this.count;
            if(qingxuanzhekuanshi == undefined){
                if(this.collectionlist[n].kzdateils == true){
                    if(this.collectionlist[n].ck == true){
                        this.collectionlist[n].ck = false;
                    }else{
                        this.collectionlist[n].ck = true;
                    }
                }
            }else{
                // console.log('点击的ks')
            }
            if(this.collectionlist[n].kzdateils == false){
                this.ksshow = true;
                this.collectionlist[this.n].ck = true;
                this.countp();
            }
        },
        counts(n){
            if(this.collectionlist[this.n].arr.count !== 0){
                this.count = this.collectionlist[this.n].arr.count;
            }
            if(this.count>=1){
                this.count+=n;
                this.collectionlist[this.n].arr.count = this.count;
            }
        },
        qdbts(kw,ks){
            if(this.collectionlist[this.n].arr.count == 0){
                this.$notify({ type: 'warning', message: '数量不能为0！' });
                return
            }else if(!Number(this.collectionlist[this.n].arr.count)){
                this.$notify({ type: 'warning', message: '请输入数字' });
                return
            }
            this.countp();
            this.ksdateils.count = this.collectionlist[this.n].arr.count;
            if(this.n == 1){
                this.collectionlist[this.n].arr.ks = -1;
            }
            if(this.collectionlist[this.n].arr.kw == '' || this.collectionlist[this.n].arr.ks == ''){
                if(kw.length == 0) {
                    this.$notify({ type: 'warning', message: '口味不能为空！' });
                    return
                }else if(ks.length == 0) {
                    this.$notify({ type: 'warning', message: '款式不能为空！' });
                    console.log('ks不能为空')
                    return
                }else if(this.collectionlist[this.n].arr.count == 0){
                    this.$notify({ type: 'warning', message: '数量不能为0！' });
                    return
                }else{
                    this.collectionlist[this.n].ck = true
                    this.collectionlist[this.n].arr = this.ksdateils;
                }
            }
            this.collectionlist[this.n].kzdateils = true;
            if(this.collectionlist[this.n].arr.kw !== ''){
                this.ksdateils.kw =(kw || this.collectionlist[this.n].arr.kw);
                if(this.collectionlist[this.n].arr.kwi == 0 || this.collectionlist[this.n].arr.kwi > 0){
                    this.ksdateils.kwi = this.collectionlist[this.n].arr.kwi;
                }
                this.ksshow = false;
            }
            if(this.collectionlist[this.n].arr.ks !== ''){
                this.ksdateils.ks =(this.ksdateils.ks || this.collectionlist[this.n].arr.ks);
                if(this.collectionlist[this.n].arr.ksi == 0 || this.collectionlist[this.n].arr.ksi > 0){
                    this.ksdateils.ksi = this.collectionlist[this.n].arr.ksi;
                }
                this.ksshow = false;
            }
            this.collectionlist[this.n].arr = this.ksdateils;
            this.count = 1;
        },
        guanbi(){
            if(this.collectionlist[this.n].arr.count == 0){
                this.collectionlist[this.n].arr.count = 1;
            }
            this.count = 1;
            if(this.collectionlist[this.n].kzdateils !== true){
                1
            }
            if(this.collectionlist[this.n].kzdateils == false) this.collectionlist[this.n].ck = false;
            this.ksshow = false;
        }
    },
    components:{
        dateilslist
    },
    watch:{
        count(){
            this.countp();
            if(this.count == 0){
                this.count = 1;
                this.collectionlist[this.n].arr.count = 1;
            }else if(this.count > 30){
                this.count = 30;
                this.collectionlist[this.n].arr.count = 30;
            }
        },
        ksshow(){
            this.action = -1;
            this.actions = -1;
        },
    },
    computed:{
        // 总价
        countprice(){
            var price = 0;
            for(var i of this.collectionlist){
                if(i.ck){
                    price+=Number(i.countprice.slice(1));
                }
            }
            return '￥'+price.toFixed(2);
        },
        spcount(){
            var count = 0;
            for(var i of this.collectionlist){
                count+=i.ck;
            }
            return count;
        }
    }
}
</script>
<style lang="scss">
.Collection-container{
    .zfbottons{
        position: fixed;
        bottom: 0;
        left: 1;
        height:52.7875px;
        background-color: #ffff;
    }
    .bgimgs::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.04);
    }
    .ks{
        color:rgb(88, 89, 91);
        font-size:12.7019px;
        border: 1px solid rgba(0,0,0,0.1);
        text-align: center;
        height:20.5125px;
        width:83.0625px;
        border-radius: 3px;
    }
    .w{
        width: 115;
    }
    .ws{
        width: 45px !important;
    }
    .youhui1{
        display: inline-block;
        height:17.05px;
        width:33.25px;
        background-color: rgb(224, 46, 36);
        color: #fff;
        font-size:11.7248px;
        border-radius: 4px;
    }
    .youhui2{
        display: inline-block;
        border: 1px solid rgb(224, 46, 36);;
        color: rgb(224, 46, 36);;
        font-size:11.7248px;
        border-radius: 3px;
    }
    .border{
        border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    .pricekuanshi{
        position: fixed;
        bottom: 0;
        left: 0;
        img{
            border-radius: 4px;
        }
    }
    .ksn{
        display: inline-block;
        height:28.3349px;
        background-color:rgb(245, 245, 245);
        line-height:28.325px;
        border-radius: 3px;
        font-size:12.7019px;
        color:rgb(21, 21, 22);
    }
    .m{
        margin-bottom: 0px !important;
    }
    .showss{
        position: fixed;
        top: 0px;
        left: 0;
        height: 640px;
        background-color: rgba(0,0,0,0.7);
    }
    .qdbottons{
        position: absolute;
        bottom:0px;
        left:0;
        color:rgb(255, 255, 255);
        background-color:rgb(224, 46, 36);
        font-size:17.5872px;
        height:46.8875px;
        // width:366.4px;
        text-align: center;
        line-height: 46.8875px;
    }
    .action{
        background-color:rgb(224, 46, 36) !important;
        color: #fff !important;
    }
    .texts{
        display: inline-block;
        height: 16px;
        width: 85px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .jiesuanbottons{
        display: inline-block;
        color:rgb(255, 255, 255);
        font-size:16.9365px;
        height:52.7875px;
        width:145.45px;
        background-color:rgb(224, 46, 36);
        text-align: center;
        line-height: 52.7875px;
    }
}
</style>