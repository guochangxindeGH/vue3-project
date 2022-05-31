<template>
  <div class="login-container">
    <h2 class="login-title">Vue+AntDesign实现登陆页面</h2>
    <a-form :model="form" class="login-form">
      <h2 class="title">用户登录 LOGIN</h2>
      <a-form-item>
        <a-input class="inputBox" v-model:value="form.username">
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password class="inputBox" v-model:value="form.password">
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-button class="submit" type="primary" @click="onSubmit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { getLogin } from '@api/login'
import { onMounted, onUpdated, onUnmounted, defineComponent, reactive, toRefs, getCurrentInstance, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'login-view',

  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  unmounted () {
    console.log('destroyed')
  },

  setup (props, context) {
    onMounted(() => {
      console.log('onMounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
    console.log('setup执行了')

    const state = reactive({
      form: {
        username: 'admin',
        password: '123456'
      }
    })
    const msg = ref('hello,vue3')
    const router = useRouter()

    const { proxy } = getCurrentInstance()
    console.log(proxy)
    const onSubmit = async () => {
      const res = await getLogin(state.form)
      if (res.code === 200) {
        router.push({
          name: 'home'
        })
      }
      console.log('登陆成功！', res)
    }

    /* 返回 */
    return {
      msg,
      ...toRefs(state),
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
/* 背景 */
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("@assets/user.png");
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;

    /* Log */
  .login-title {
    color: #fff;
    text-align: center;
    margin: 120px 0;
    font-size: 48px;
    font-family: Microsoft Yahei;
  }

  .login-form {
    width: 565px;
    height: 372px;
    margin: 0 auto;
    background: url("@assets/form.png");
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    padding: 40px 110px;
  }

  /* 登陆按钮 */
  .submit{
    width: 100%;
    height: 45px;
    font-size: 16px;
  }
  /* 用户登陆标题 */
  .title{
    margin-bottom: 50px;
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    font-family: Microsoft Yahei;
  }
  /* 输入框 */
  .inputBox{
    height: 45px;
  }
}

/* 输入框内左边距50px */
.ant-input-affix-wrapper .ant-input:not(:first-child) {
    padding-left: 50px;
}
</style>
