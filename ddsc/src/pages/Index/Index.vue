<template>
    <div class="index-container" style="margin-bottom:50px;">
        <div class="top w-100 pt-2 pl-3 pr-3">
            <router-link to="/Search" tag="div" class="search">
                <div class=" d-flex jc-between ai-center w-100 h-100 p-2">
                    <div></div>
                    <div>
                        <i class="iconfont icon-search mr-2"></i>
                        <span>3元以下</span>
                    </div>
                    <i class="iconfont icon-xiangji" style="font-size:20px;"></i>
                </div>
            </router-link>
            <ly-tab
                v-model="selectedId"
                :items="items"
                @change="handleChange"
                >
            </ly-tab>
        </div>
        <div style="margin-top: 85px;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name:'index',
    data(){
        return {
            selectedId: 0,
            items: [
                {label: '推荐'},
                {label: '美妆'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'},
                {label: '推荐'}
            ],
            subRouteUrl:['/','/index/BM']
        }
    },
    methods:{
        handleChange(item,index){
            this.$router.replace(this.subRouteUrl[index])
        },
    },
    components:{

    },
    created(){
        
    }
}
</script>
<style lang="scss">
@import '../../assets/scss/dateils.scss';
.index-container{
    .top{
        .ly-tab-list{
            padding-top:10px;
            // padding-left: 0;
        }
        .ly-tabbar{
            box-shadow:none;
            background-color: transparent;
            border-bottom:0;
        }
        .ly-tab-item{
            padding: 0;
            font-size: 16px;
        }
    }
}
</style>