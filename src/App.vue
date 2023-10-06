<template>
    <div>
        <h1>我是父组件</h1>
        {{money}}
        {{car}}
        <Son></Son>
    </div>
</template>

<script setup>
import Son from './Home.vue'
import {ref,provide} from 'vue'
const money = ref(10)
const car = ref('BYD')
provide('money',money)
const changeMoney = (num) => {
    money.value = num +1
}
</script>