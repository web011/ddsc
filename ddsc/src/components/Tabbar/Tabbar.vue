<template>
    <div class="tabbar-container">
        <van-tabbar v-model="active" active-color="red">
            <van-tabbar-item info="" to="/">
                <span>首页</span>
                <img
                slot="icon"
                :src="active==0 ? 'https://t13img.yangkeduo.com/cart/2018-09-02/4149b41e8ade31e7487e12e372e13d69.png?imageView2/q/70/format/webp' : 'https://t13img.yangkeduo.com/cart/2018-09-02/f4f7bb8e393e08f1bd7a813d27e91c66.png?imageMogr2/sharpen/50%7CimageView2/q/70/format/webp'"
                >
            </van-tabbar-item>
            <van-tabbar-item info="" to="/Attention">
                <span>关注</span>
                <img
                slot="icon"
                :src="active==1 ? 'https://t00img.yangkeduo.com/goods/2020-01-15/4e6fb66e95f52aec02d93edc43f48336.png?imageMogr2/sharpen/50%7CimageView2/q/70/format/webp' : 'https://t00img.yangkeduo.com/goods/2020-01-15/38b7c98dea4df6e5b8dd35f203b5f2ee.png?imageView2/q/70/format/webp'"
                >
            </van-tabbar-item>
            <van-tabbar-item info="" to="/Classification">
                <span>分类</span>
                <img
                slot="icon"
                :src="active==2 ? 'https://t00img.yangkeduo.com/goods/images/2019-01-14/33c270cc0aec300dc8d9ce6559114625.png?imageView2/q/70/format/webp' : 'https://t00img.yangkeduo.com/goods/images/2019-01-14/e4944e9a215de89a1b2dd6e5e18add17.png?imageView2/q/70/format/webp'"
                >
            </van-tabbar-item>
            <van-tabbar-item info="0" to="/Chat">
                <span>聊天</span>
                <img
                slot="icon"
                :src="active==3 ? 'https://t13img.yangkeduo.com/cart/2018-09-02/f000638fa810c954ed344293d214bc34.png?imageView2/q/70/format/webp' : 'https://t13img.yangkeduo.com/cart/2018-09-02/40e2c153f09720b43044dfa82f771714.png?imageView2/q/70/format/webp'"
                >
            </van-tabbar-item>
            <van-tabbar-item info="" to="/MD">
                <span>个人中心</span>
                <img
                slot="icon"
                :src="active==4 ? 'https://t13img.yangkeduo.com/cart/2018-09-02/8d4c80854ebcc4c34628c15f1581527c.png?imageView2/q/70/format/webp' : 'https://t13img.yangkeduo.com/cart/2018-09-02/8d22d9ba476f49fbebb66c8cf0d0aaab.png?imageView2/q/70/format/webp'"
                >
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'tabbar',
    data(){
        return {
            active: 0,
            icon: {
                active: 'https://img.yzcdn.cn/vant/user-active.png',
                inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
            }
        }
    },
    methods:{
        
    },
    components:{

    },
    created(){

    }
}
</script>
<style lang="scss">

</style>