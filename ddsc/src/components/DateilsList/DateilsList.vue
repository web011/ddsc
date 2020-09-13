<template>
    <div class="dateils-container fw d-flex jc-center ai-center" style="margin-bottom:50px;">
        <router-link to="/Dateils" tag="div" class="datails mr-1 mb-1 fw" v-for="item in 6" :key="item">
            <img style="height:175.675px;" src="../../assets/Dateils/1.jpeg" class="w-100" alt="">
            <p class="m-0 p-0" style="height:20px;">【包邮限抢】氨基酸美白洗面奶控油补水祛痘男女学生洁面乳护肤品</p>
            <span class="subtitle text-center subtitle1 ml-1">只换不修</span>
            <div class="price d-flex jc-between ai-center mt-2 pr-1 pl-1" style="border-bottom:none;">
                <div class="d-flex jc-center ai-center">
                    <p class="m-0 p-0 mr-1">￥1.05</p>
                    <span>已拼10万+件</span>
                </div>
                <div class="d-flex">
                    <div class="userimg"></div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'DateilsList',
    data(){
        return {

        }
    },
    methods:{
        
    },
    components:{

    }
}
</script>
<style lang="scss">
.dateils-container{
    .datails{
        width: 48%;
        height: 252px;
        background-color: #ffffff;
        p{
            color:rgb(21, 21, 22);
            font-size:12.48px;
            overflow: hidden;
            height: 20px;
        }
    }
}
</style>