<template>
    <div>
        <group label-width="4.5em" label-margin-right="1em" label-align="justify">
            <datetime v-model="itemData.startDate" class="data-time" title="发生日期" placeholder="请选择发生日期"></datetime>
            <x-input v-model="itemData.startPoint" title="起点" placeholder="请填写起点"> </x-input>
            <datetime v-model="itemData.endDate" class="data-time" title="结束日期" placeholder="请选择结束日期"></datetime>
            <x-input v-model="itemData.endPoint" title="终点" placeholder="请填写终点"> </x-input>
            <x-input v-model.number="itemData.personNum" title="人数" placeholder="请填写人数" type="number"> </x-input>
            <x-input v-model.number="itemData.dayNum" title="天数" placeholder="请填写天数" type="number"> </x-input>
            <x-input v-model.number="itemData.billNum" title="票据数量" placeholder="请填写票据数量" type="number"> </x-input>
            <x-input v-model.number="itemData.expenseAmt" title="报销金额" placeholder="请填写报销金额" type="number"> </x-input>
        </group>
    </div>
</template>
<script>
    import { Group, Cell, XButton, XInput,Box,Datetime } from 'vux';
    export default {
        components:{
            Group,
            Cell,
            XButton,
            XInput,
            Box,
            Datetime
        },
        data() {
            return {
                itemData:{}
            }
        },

    }
</script>
