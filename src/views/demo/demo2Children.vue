<template>
  <div>
    <span>我是子组件{{msg}}</span>
    <hr>
    <span @click="sonClick">msg: {{ props.msg }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineExpose } from 'vue'
const props = defineProps({
  msg: String
})
const emit = defineEmits(['child-click'])
const msg = ref('helloChildren')
const sonClick = () => {
  emit('child-click', 'ctx')
}
// 暴露给父组件
defineExpose({
  msg
})
</script>
