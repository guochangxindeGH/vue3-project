<template>
  <h2>children1</h2>
  <h3>msg:{{ msg }}</h3>
  <h3>跨组件通信 msg:{{ msg2 }}</h3>
  <button @click='emitFn(1)'>事件分发1</button>
  <button @click='emitFn(2)'>事件分发2</button>
  <transition name="slide-fade" type="transition">
    <h2 v-if="hide">
      v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
      v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
      v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
      v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
      v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
      v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
    </h2>
  </transition>
  <GrandSon />
</template>

<script>
import GrandSon from './grandSonView.vue'
import { defineComponent, onUnmounted, ref, toRef, toRefs, reactive, readonly, isRef, isReactive, isReadonly, isProxy } from 'vue'
import emitter from '@utils/mitt'
export default defineComponent({
  name: 'childView',
  components: {
    GrandSon
  },
  props: ['msg', 'state', 'state22'],
  // props: {
  //   msg: {
  //     type: String,
  //     default: '123'
  //   }
  // },
  emits: {
    show: (value) => { // 不加这个会有告警
      if (value === 1) {
        return true
      } else {
        return false
      }
    }
  },
  setup (props, { attrs, slots, emit }) {
    const hide = ref(false)
    const emitFn = (value) => {
      hide.value = !hide.value
      emit('show', value)
    }

    // 初始化
    const msg2 = ref('emitter')
    const changeMsg = () => {
      msg2.value = 'emitter2'
    }
    // 监听事件,更新数据
    emitter.on('change-msg', changeMsg)
    // 显式卸载
    onUnmounted(() => {
      emitter.off('change-msg', changeMsg)
    })

    // const state = toRef(props, 'state')
    const { state } = toRefs(props)
    const { state22 } = toRefs(props)
    const state222 = props.state22
    console.log('props:', props)
    console.log('attrs:', attrs)
    console.log('state:', state.value.form.username)
    console.log('state22:', state22.value.form.value.username)
    console.log('state222:', state222.form.value.username)

    const state1 = ref(1)
    console.log('isref:', isRef(state1))// isref: true
    const state2 = reactive({})
    console.log('isReactive:', isReactive(state2))// isReactive: true
    const state3 = readonly({})
    console.log('isReadonly:', isReadonly(state3))// isReadonly: true
    const state4 = reactive({})
    console.log('isProxy:', isProxy(state2))// isProxy: true
    console.log('isProxy:', isProxy(state4))// isProxy: true
    return {
      msg2,
      hide,
      changeMsg,
      emitFn
    }
  }
})
</script>

<style lang="scss" scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
