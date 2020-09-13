<template>
    <div class="chat-container">
        <div class="chat-top d-flex jc-center ai-center flex-column">
            <i class="iconfont icon-message"></i>
            <p class="m-0 p-0 mt-3" style="color:rgb(88, 89, 91);font-size:15.36px;">还没有聊天消息哦</p>
            <p class="m-0 p-0 mt-2" style="font-size:13.44px;color:rgb(156, 156, 156);">与商家、官方客服的聊天会显示在这里</p>
            <p class="m-0 p-0 mt-2" style="color:rgb(58, 172, 233);font-size:13.44px;">联系官方客服</p>
        </div>
        <div class="dateils-title d-flex jc-center ai-center bg-white">
            <i class="iconfont icon-shoucang mr-1"></i>
            <span>精品推荐</span>
        </div>
        <DateilsList></DateilsList>
    </div>
</template>

<script>
import DateilsList from '../../components/DateilsList/DateilsList'
export default {
    name:'chat',
    components:{
        DateilsList
    },
    data(){
        return {

        }
    },
    methods:{
        
    },
}
</script>
<style lang="scss">
.chat-container{
    .chat-top{
        height:346.55px;
        i{
            font-size: 70px;
        }
    }
}
</style>