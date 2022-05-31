<template>
  <h2>children2</h2>
  <a-input v-model:value="antValue" placeholder="Basic usage" style="width: 200px"></a-input>
  <input type="text" ref="inputRef" value="54645">
  <h3>姓名:{{user.name}}</h3>
  <h3>年龄:{{user.age}}</h3>
  <h3>wife:{{user.wife}}</h3>
  <button @click="updateUser">更新</button>
  <button @click='changeMsg'>点击修改msg</button>
</template>

<script>
import { onMounted, ref, reactive, computed, watch, watchEffect, toRefs } from 'vue'
import emitter from '@utils/mitt'
/*
ref获取元素: 利用ref函数获取组件中的标签元素
功能需求: 让输入框自动获取焦点
*/
export default {
  setup () {
    // 定义的inputRef对象名称与要获取的ref元素一致
    const antValue = ref('123')
    // const value1 = ref < string > ('mysite')
    const inputRef = ref(null)

    const user = reactive({
      name: 'gcx',
      age: 18,
      wife: {
        name: 'xioaohong',
        age: 18,
        books: ['红宝书', '设计模式', '算法与数据结构']
      }
    })
    // 计算属性只传入一个回调函数 表示的是get操作
    const fullName1 = computed(() => {
      return user.name + user.age
    })
    // 计算属性的函数中可以传入一个对象,可以包含set和get函数,进行读取和修改的操作
    const fullName2 = computed({
      get () {
        return user.name + '_' + user.age
      },
      set (val) {
        const names = val.split('_')
        user.name = names[0]
        user.age = names[1]
      }
    })
    // 默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次.通过配置deep为true, 来指定深度监视
    const fullName3 = ref('')
    watch(
      user,
      ({ name, age }) => {
        fullName3.value = name + '_' + age
      },
      { immediate: true, deep: true }
    )
    watch(
      [() => user.name, () => user.age, () => fullName3], ([name, age, name3]) => {
        console.log('我执行了')
      }
    )
    // 监视数据发生变化时执行回调，不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据，默认初始时就会执行第一次, 从而可以收集需要监视的数据。
    const fullName4 = ref('')
    watchEffect(() => {
      fullName4.value = user.name + '_' + user.age
    })

    const state = reactive({
      name: 'hzw'
    })
    const state2 = toRefs(state)
    setInterval(() => {
      state.name += '==='
    }, 1000)
    console.log(state)
    console.log(state2)

    const updateUser = () => {
      user.name = '小红'
      user.age += 2
      user.wife.books[0] = '红楼梦'
    }

    onMounted(() => {
      inputRef.value && inputRef.value.focus()
    })

    const changeMsg = () => {
      emitter.emit('change-msg')
    }

    return {
      antValue,
      inputRef,
      user,
      // 通过toRefs返回的对象,解构出来的属性也是响应式的
      ...state2,
      fullName1,
      fullName2,
      updateUser,
      changeMsg
    }
  }
}
</script>
