<template>
    <div class="search-container">
        <div class="bg-white pr-3 pl-3 p-2">
            <div class="d-flex jc-between ai-cneter">
                <div class="search-top d-flex jc-center ai-center">
                    <i @click="dbsearch" class="iconfont icon-zuojiantou-01 mr-3" style="color:rgb(102, 102, 102);font-size:20px;"></i>
                    <div class="search-input d-flex jc-center ai-center">
                        <i class="iconfont icon-search mr-1 pl-2"></i>
                        <input type="text" placeholder="oppo原装数据线">
                    </div>
                </div>
                <span class="search-right ml-1">搜索</span>
            </div>
            <div class="mt-4 mb-3" style="color:rgb(156, 156, 156);font-size:14.4px;" v-show="shows==true">
                <i class="iconfont icon-search mr-1 pl-2"></i>
                <span>更多搜索方式</span>
            </div>
            <div v-show="shows==true" class="search-dianpu d-flex jc-between ai-center pl-2 pr-2" @click="search">
                <span>搜索店铺</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <div class="bg-white mt-2 w-100" v-show="shows==true">
            <div class="d-flex jc-cneter ai-cneter w-100" style="border-bottom: 1px solid rgba(0,0,0,0.1);">
                <div @click="BorderBottoms(1)" class="search-bottom ml-3 mr-4" :class="BorderBottom == true ? 'border-b' : '' ">
                    搜索发现
                </div>
                <div @click="BorderBottoms(2)" class="search-bottom" :class="BorderBottom == false ? 'border-b' : '' ">
                    热搜榜
                </div>
            </div>
            <!-- 这是搜索发现的div -->
            <div v-show="BorderBottom === true" class="fw ml-3 mr-3" style="height:455px;">
                <span class="search-bottom-text pl-2 pr-2 mr-2 mt-3 mb-2">麻辣烫速食自热</span>
                <span class="search-bottom-text pl-2 pr-2 mr-2">麻辣烫速食自热</span>
                <span class="search-bottom-text pl-2 pr-2">迷你人偶</span>
                <span class="search-bottom-text pl-2 pr-2 mr-2">麻辣烫速食自热</span>

            </div>
            <!-- 这是热搜榜的div -->
            <div v-show="BorderBottom === false" class="mt-3">
                <div class="d-flex jc-between ai-center pl-3 pr-3" style="color:rgb(156, 156, 156);font-size:11.52px;">
                    <span>根据全站女性用户实时计算得出</span>
                    <div class="d-flex jc-cneter ai-center">
                        <span @click="chakankuanshi" v-text="chakankuanshis"></span>
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                </div>
                <!-- 这是女款 -->
                <div class="d-flex jc-between ai-center pl-3 pr-3 mt-3" v-for="item in 10" :key="item" v-show="ks == true">
                    <div class="d-flex jc-center ai-cneter">
                        <div class="d-flex jc-center ai-center">
                            <img class="mr-3" style="width:16.3125px;height:16.3125px;" src="https://funimg.pddpic.com/2020-06-03/e19bc72d-01af-4c0f-b68d-5dd677689812.png?imageView2/2/w/1300/q/80/format/webp" alt="">
                            <img class="mr-2" style="height:48px;width:48px;" src="https://t00img.yangkeduo.com/goods/images/2019-07-11/75c45951-8bcb-4c29-9370-84498626680f.jpg?imageView2/2/w/1300/q/80/format/webp" alt="">
                        </div>
                        <div>
                            <p class="m-0 p-0 mb-1" style="font-size:13.44px;olor:rgb(21, 21, 22);">一口一口喝成瘦子</p>
                            <span style="color:rgb(156, 156, 156);font-size:11.52px;">热度指数：17385832</span>
                        </div>
                    </div>
                    <img style="height:13.4375px;width:13.4375px;" src="https://pinduoduoimg.yangkeduo.com/2020-05-21/35dfba3f-1203-4ddd-a4f1-c9e16ade0b14.png.slim.png?imageView2/2/w/1300/q/80/format/webp" alt="">
                </div>
                <!-- 这是男款 -->
                <div class="d-flex jc-between ai-center pl-3 pr-3 mt-3" v-for="item in obj" :key="item.img" v-show="ks == false">
                    <div class="d-flex jc-center ai-cneter">
                        <div class="d-flex jc-center ai-center">
                            <img class="mr-3" style="width:16.3125px;height:16.3125px;" src="https://funimg.pddpic.com/2020-06-03/e19bc72d-01af-4c0f-b68d-5dd677689812.png?imageView2/2/w/1300/q/80/format/webp" alt="">
                            <img class="mr-2" style="height:48px;width:48px;" src="https://t00img.yangkeduo.com/goods/images/2020-02-23/8e908a89-0a59-4d47-8290-3d14fb4992cb.jpg?imageView2/2/w/1300/q/80/format/webp" alt="">
                        </div>
                        <div>
                            <p class="m-0 p-0 mb-1" style="font-size:13.44px;olor:rgb(21, 21, 22);">超级显脸小的眼镜框架</p>
                            <span style="color:rgb(156, 156, 156);font-size:11.52px;">热度指数：1118815</span>
                        </div>
                    </div>
                    <img style="height:13.4375px;width:13.4375px;" src="https://pinduoduoimg.yangkeduo.com/2020-05-21/35dfba3f-1203-4ddd-a4f1-c9e16ade0b14.png.slim.png?imageView2/2/w/1300/q/80/format/webp" alt="">
                </div>
            </div>
        </div>
        <!-- 点击搜索店铺就显示否则隐藏 -->
        <div class="bg-white pl-3 pr-3" v-show="shows!=true">
            <span style="color:rgb(156, 156, 156);font-size:14.4px;display: inline-block;" class="mb-3 mt-3">发现店铺</span>
            <div v-for="item in 10 " :key="item" class="mb-3 d-flex jc-cneter ai-center pb-3" style="border-bottom: 1px solid rgba(0,0,0,0.1);">
                <img class="mr-2" style="height:60.475px;width:60.475px;" src="https://t00img.yangkeduo.com/goods/images/2020-04-30/10c9f94651a0bd3f48f2209467d13631.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
                <img style="height:60.475px;width:60.475px;" src="https://t00img.yangkeduo.com/goods/images/2020-05-26/36882c962dfa13c6d09a4ff58ea8858e.jpeg?imageView2/2/w/1300/q/80/format/webp" alt="">
                <div class="ml-2">
                    <p class="m-0 p-0" style="color:rgb(21, 21, 22);font-size:14.4px;">凸格科创联华专卖店 <i class="iconfont icon-youjiantou"></i> </p>
                    <p class="m-0 p-0 mt-1" style="color:rgb(155, 155, 155);font-size:11.52px;">已拼: 10万+件</p>
                    <p class="m-0 p-0 mt-2" style="color:rgb(88, 89, 91);font-size:11.52px;">根据浏览店铺推荐</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'search',
    data(){
        return {
            // 控制如果点击搜索店铺就显示，现在默认是隐藏
            shows:true,
            // 控制下边框颜色
            BorderBottom:true,
            // 查看男款或者女款
            chakankuanshis:'看男性榜单',
            // 控制显示男款还是女款
            ks:true,
            // 多余的
            obj:[{img:'a'},{img:'b'},{img:'c'},{img:'d'},{img:'e'},{img:'f'},{img:'g'},{img:'h'},{img:'s'},{img:'p'}]
        }
    },
    methods:{
        search(){
            if(this.shows == true){
                this.shows = false;
            }
        },
        dbsearch(){
            if(this.shows == false){
                this.shows = true
            }else{
                window.history.go(-1);
            }
        },
        BorderBottoms(n){
            if(n === 1){
                this.BorderBottom = true;
            }else{
                this.BorderBottom = false;
            }
        },
        chakankuanshi(){
            if(this.chakankuanshis == '看男性榜单'){
                this.chakankuanshis = '看女性榜单';
                this.ks = false;
            }else{
                this.chakankuanshis = '看男性榜单';
                this.ks = true;
            }
        }
    },
    components:{

    }
}
</script>
<style lang="scss">
.search-container{
    .search-right{
        display: inline-block;
        width:31.275px;
        height:35.1625px;
        color:rgb(224, 46, 36);
        font-size:15.6331px;
        text-align: center;
        line-height: 35.1625px;
    }
    .search-top{
        .search-input{
            color:rgb(21, 21, 22);
            font-size:15.36px;
            background-color:rgb(237, 237, 237);
            border-radius: 7px;
            input{
                color:rgb(21, 21, 22);
                background-color:rgb(237, 237, 237);
                font-size:15.36px;
                height:34.55px;
                width:220px;
                outline: none;
                border: none;
                border-radius: 5px;
            }
        }
    }
    .search-dianpu{
        height:30.7125px;
        width:159.35px;
        background-color:rgb(244, 244, 244);
        text-align: center;
        line-height: 30.7125px;
        border-radius: 50px;
        font-size:13.44px;
        color:rgb(88, 89, 91);
    }
    .search-bottom{
        height:40.3125px;
        width:57.6px;
        font-size:14.4px;
        color:rgb(88, 89, 91);
        text-align: center;
        line-height: 40.3125px;
    }
    .border-b{
        border-bottom: 2px solid red;
    }
    .search-bottom-text{
        color:rgb(88, 89, 91);
        font-size:13.44px;
        height:30.4px;
        background-color:rgb(244, 244, 244);
        display: inline-block;
        text-align: center;
        line-height: 30.4px;
        border-radius: 50px;
    }
}
</style>