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
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
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
            }
        }
    }
</script>
