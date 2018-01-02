<template>
    <div>
        <ul>
            <li v-for = "(val,ind) in list" :key="ind">{{val}}</li>
        </ul>
        <hr>
        <ul>
            <li v-for="(val,ind) in testList" :key="ind">{{val}}</li>
        </ul>
        <button @click="add">添加</button>
        <x-button @click.native="goTo">goto</x-button>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import { XButton } from 'vux';
    export default {
        components:{
            XButton
        },
        data() {
            return {

            }
        },
        computed: {
            /* list() {
                return this.$store.state.dataList
            } */
            ...mapState({
                list: state => state.dataList,
                testList:state => state.testList
            })
        },
        methods:{
            add() {
                this.$store.dispatch('setDataList',2)
            },
            goTo() {
                this.$router.push({path:'/dynamic'})
            }
        }
    }
</script>
