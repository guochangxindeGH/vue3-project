<template>
  <div>
    <h2>我是父组件！</h2>
    <Child msg="helloFather" ref='son' @child-click="handleClick" />
  </div>
</template>

<script setup>
import Child from './demo2Children.vue'
import { ref } from 'vue'
const son = ref(null)
console.log('????????~ son:', son)
const handleClick = (ctx) => {
  console.log(ctx)
}
</script>
