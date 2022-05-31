<template>
  <p>当前颜色: {{color}}</p>
  <button @click="color='red'">红</button>
  <button @click="color='yellow'">黄</button>
  <button @click="color='blue'">蓝</button>
  <hr>
  <child :msg="msg" msg2='哈哈哈' @show="show" />
  <hr>
  <child2></child2>
  <hr>
  <modal-button></modal-button>
  <hr>
  <Suspense>
     <!-- v-slot:defaul可以简写成#defaul -->
    <template v-slot:default>
      <AsyncComp/>
    </template>

    <template v-slot:fallback>
      <h1>LOADING...</h1>
    </template>
  </Suspense>
</template>
<script>
import { defineComponent, defineAsyncComponent, reactive, toRefs, ref, provide } from 'vue'
// 引入子组件
import Child from './childrenView.vue'
import Child2 from './childrenView2.vue'
import ModalButton from './ModalButton.vue'
const AsyncComp = defineAsyncComponent(() => import('./AsyncComp.vue'))
export default defineComponent({
  name: 'App',
  components: {
    Child,
    Child2,
    ModalButton,
    AsyncComp
  },
  // beforeCreate () {
  //   console.log('beforeCreate')
  // },
  // created () {
  //   console.log('created')
  // },
  // updated () {
  //   console.log('updated')
  // },
  // mounted () {
  //   console.log('mounted')
  // },
  // unmounted (props, context) {
  //   console.log('destroyed')
  // },
  setup () {
    // onBeforeMount(() => {
    //   console.log('--onBeforeMount')
    // })

    // onMounted(() => {
    //   console.log('--onMounted')
    // })

    // onBeforeUpdate(() => {
    //   console.log('--onBeforeUpdate')
    // })

    // onUpdated(() => {
    //   console.log('--onUpdated')
    // })

    // onBeforeUnmount(() => {
    //   console.log('--onBeforeUnmount')
    // })

    // onUnmounted(() => {
    //   console.log('--onUnmounted')
    // })

    const msg = ref('hello,vue3')
    const state = reactive({
      form: {
        username: 'admin',
        password: '123456'
      }
    })
    const state2 = toRefs(state)
    console.log('state', state.form)
    console.log('state2', state2.form.value)

    const show = () => {
      console.log('name:', 'gcx')
    }

    const color = ref('red')
    provide('color', color)

    return {
      msg,
      show,
      ...toRefs(state),
      color
    }
  }
})
</script>
