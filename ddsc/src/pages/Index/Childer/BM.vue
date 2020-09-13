<template>
    <div class="BM-container">
        <div class="d-flex jc-center ai-cneter w-100 bg-white pt-2 pl-3 pr-3" style="height:170px;flex-wrap: wrap;">
            <div v-for="item in 10" :key="item" class="tops d-flex jc-center ai-center flex-column" style="width:30px;height30px;">
                <img src="../../../assets/Index-Childer/BM/daeils.webp" alt="">
                <p class="p-0 m-0">限时秒杀</p>
            </div>
            <div class=""></div>
        </div>
        <img class="w-100 h-100 mt-2 mb-1" src="../../../assets/Index-Childer/BM/dateils.png" alt="">
        <DateilsList></DateilsList>
    </div>
</template>
<script>
import DateilsList from '../../../components/DateilsList/DateilsList'
export default {
    name:'bm',
    components:{
        DateilsList
    },
    data(){
        return {

        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss">
</style>