<template>
    <div class="Classification-container">
        <div class="top w-100 pt-2 pl-3 pr-3" style="height:55px;" @click="search">
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
        </div>
        <div class="shop w-100" style="margin-bottom:50px;">
            <!-- 左侧 -->
            <div class="wrapper" ref="msg">
                <ul class="content m-0 p-0 " style="padding-bottom:35px">
                    <li @click="action(i,item.list)" class="pt-3 pb-3 content-li w-100 d-flex jc-between ai-center" v-for="(item,i) of arr" :key="i" :class="actions == i ? 'actions' : ''">
                        <div :class="actions === i ? 'action' : ''"></div>
                        <span style="margin-right:4px;">{{item.name}}</span>
                        <div> </div>
                    </li>
                </ul>
            </div>
            <div class="right w-100 pt-2">
                <ul class="m-0 p-0">
                    <li class="pt-2" v-for="item of list" :key="item.img" style="width:279px;">
                        <div>
                            <p class="m-0 p-0 mt-2 pr-3 pl-3" style="color:rgb(21, 21, 22);font-size:14.656px;">{{item.name}}</p>
                        </div>
                        <ul class="m-0 p-0 mt-2 w-100 fw d-flex jc-left ai-cneter" style="padding-bottom:35px;">
                            <li v-for="items in 40 " :key="items" class="d-flex jc-left ai-center flex-column mt-1" style="width:89px;height:73.275px;text-align: center;">
                                <img style="width:54.7125px;height:54.7125px;" :src="item.img" alt="">
                                <p style="font-size:12.7019px;color:rgb(88, 89, 91);" class="m-0 p-0">{{item.title}}</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:'Classification',
    data(){
        return {
            arr:[
                {name:"推荐",list:[{name:'热门分类',img:'https://t00img.yangkeduo.com/goods/images/2019-12-30/1608ece580cc388747650d826286924b.jpeg?imageView2/2/w/112/q/80/format/webp',title:'帆布女鞋'}]},
                {name:"食品",list:[{name:'本周热门',img:'https://img.pddpic.com/mms-material-img/2020-07-17/43757d9c-a4d9-47a7-9764-911a9567f84c.jpg.a.jpeg?imageView2/2/w/112/q/80/format/webp',title:'即食火锅'}]},
                {name:"女装",list:[{name:'本周热门',img:'https://img.pddpic.com/mms-material-img/2020-06-30/c5d21a06-6baa-49e3-8e00-40bd184bf7d8.jpeg?imageView2/2/w/112/q/80/format/webp',title:'女装T恤'}]},
                {name:"靴包",list:[{name:'本周热门',img:'https://img.pddpic.com/mms-material-img/2020-07-11/efb72c5b-eb45-4a16-a6af-aaec37414e47.jpg?imageView2/2/w/112/q/80/format/webp',title:'双肩包'}]},
                {name:"母婴",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2020-03-09/9d13ee4a3b3b210d8113fa40c353707f.jpeg?imageView2/2/w/112/q/80/format/webp',title:'儿童套餐t'}]},
                {name:"内衣",list:[{name:'本周热门',img:'https://img.pddpic.com/mms-material-img/2020-06-05/c138c57f-7d2e-4226-a2ab-10d0b91d6d18.jpeg?imageView2/2/w/112/q/80/format/webp',title:'女士睡衣'}]},
                {name:"美妆",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2019-12-03/52797a4b2ee8658ae3029a02aa61d575.jpeg?imageView2/2/w/112/q/80/format/webp',title:'洁面'}]},
                {name:"手机",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2020-08-23/f8615e84b03b75253955dc567bf23db3.jpeg?imageView2/2/w/112/q/80/format/webp',title:'智能机'}]},
                {name:"洗护",list:[{name:'本周热门',img:'https://t16img.yangkeduo.com/phone_adx/1444c30e-c5d3-11ea-b913-dedea81423e9.jpg?imageView2/2/w/112/q/80/format/webp',title:'洗发护发'}]},
                {name:"百货",list:[{name:'本周热门',img:'https://img.pddpic.com/mms-material-img/2020-08-21/a2724d99-0d33-4bc2-9ced-902263cfea3e.jpeg.a.jpeg?imageView2/2/w/112/q/80/format/webp',title:'文创礼品'}]},
                {name:"图书",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2020-05-13/6167e3cda4de2be4bcddcd02bdbdb4c0.jpeg?imageView2/2/w/112/q/80/format/webp',title:'中学教辅'}]},
                {name:"车品",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2019-08-26/363c948f-d944-4e50-8f49-6042bd83ebc7.png?imageView2/2/w/112/q/80/format/webp',title:'汽车坐垫'}]},
                {name:"健康",list:[{name:'本周热门',img:'https://img.pddpic.com/mms-material-img/2020-06-23/bddc7b7a-3469-41aa-b089-829cb1ed365f.jpeg?imageView2/2/w/112/q/80/format/webp',title:'男科药品'}]},
                {name:"运动",list:[{name:'本周热门',img:'https://img.pddpic.com/mms-material-img/2020-06-16/5e6a30ce-6742-42bd-9899-eeed9f18ed04.jpeg?imageView2/2/w/112/q/80/format/webp',title:'电动车整车'}]},
                {name:"数码",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2019-07-16/2f6d4076-1780-4ca8-a8c0-e304277f0330.jpg?imageView2/2/w/112/q/80/format/webp',title:'笔记本电脑'}]},
                {name:"男装",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2020-04-15/0b3aa5dd3d5bf2245d5ed0442518f20f.jpeg?imageView2/2/w/112/q/80/format/webp',title:'男装T恤'}]},
                {name:"电器",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2020-06-29/21f03ee9-2a12-4051-95b1-982c2e332d8f.jpeg?imageView2/2/w/112/q/80/format/webp',title:'冰箱'}]},
                {name:"家装",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2019-03-12/31b46e68-89a7-4624-87f2-e84dc68d7c43.jpg?imageView2/2/w/112/q/80/format/webp',title:'布艺沙发'}]},
                {name:"生鲜",list:[{name:'本周热门',img:'https://img.pddpic.com/mms-material-img/2020-08-03/0625d618-c9ce-4e73-a1d5-b967a21a1c58.jpg.a.jpeg?imageView2/2/w/112/q/80/format/webp',title:'猪肉'}]},
                {name:"家纺",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2020-03-18/d55a04cc573d276dfb6e33115e4f2bba.jpeg?imageView2/2/w/112/q/80/format/webp',title:'四件套'}]},
                {name:"充值",list:[{name:'本周热门',img:'https://t00img.yangkeduo.com/goods/images/2019-05-12/409bdbacc39afc39da32fd749211c4c0.png?imageView2/2/w/112/q/80/format/webp',title:'话费充值'}]},
                {name:"海淘",list:[{name:'本周热门',img:'https://t16img.yangkeduo.com/phone_adx/b8bec646-dda7-11ea-a5c5-fad2c830d3e5.jpg?imageView2/2/w/112/q/80/format/webp',title:'进口水乳面霜'}]},
                {name:"品牌",list:[{name:'本周热门',img:'https://omsproductionimg.yangkeduo.com/images/2017-07-19/7d08f2bb933f537b780d83d8a3529b5b.png?imageView2/2/w/112/q/80/format/webp',title:'南极人'}]}
            ],
            actions:0,
            list:[]
        }
    },
    created(){
        this.$nextTick(()=>{
            // 初始化
            this.show(); 
        });
        this.list = this.arr[0].list;
    },
    methods:{
        action(n,item){
            this.actions = n;
            this.list = item;
        },
        show(){
            this.scroll = new BScroll('.wrapper',{
                click:true,
                tap:true,
                mouseWheel: true,
                disableMouse: false,
                disableTouch: false,
            })
            this.scrolls = new BScroll('.right',{
                click:true,
                tap:true,
                mouseWheel: true,
                disableMouse: false,
                disableTouch: false
            })
        },
        search(){
            this.$router.push('/Search')
        }
    },
    components:{

    }
}
</script>
<style lang="scss">
.Classification-container{
    .shop{
        border-top:1px solid rgba(0,0,0,0.1);
        background-color: #fff;
        display: flex;
        overflow: hidden;
        height: 660px;
        position: fixed;
        top: 55px;
        left: 0;
        padding-bottom: 70px;
        .wrapper{
            width: 120px;
            background-color: #fafafa;
            .content{
                .content-li{
                    height: 60px;
                    font-size:14.656px;
                }
            }
        }
    }
    .action{
        height: 25px;
        background-color: rgb(224,46,36);
        width: 4px;
    }
    .actions{
        color:rgb(224,46,36);
        background-color: #fff;
    }
}
</style>