<template>
    <div @click="change()">我是子组件1</div>
    {{ money }} --- {{ car }}
</template>

<script setup>
import {computed,inject} from 'vue'
const money = inject('money')
const props = defineProps({
    money: Number,
    car: String
})

const emit = defineEmits(['changeMoney'])

const change = () => {
    emit('changeMoney',15)
}

</script>