
<template>
  <div class="wrapper">
    <img class="wrapper__img"
         src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input class="wrapper__input__content"
             type="text"
             v-model="username"
             placeholder="请输入手机号">
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content"
             type="text"
             v-model="password"
             placeholder="请输入密码">
    </div>
    <div class="wrapper__login-btn"
         @click="handleLogin">
      登录
    </div>
    <div class="wrapper__login-register"
         @click="handleRegister">
      立即注册
    </div>
    <Toast :msg="toastMsg"
           v-if="show"></Toast>
  </div>
</template>
<script>
// 第三方
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
// 自定义
import { post } from '../../utils/request'
import Toast, { userToastEffect } from '../../components/Toast'

const userLoginEffect = (showToast) => {
  const router = useRouter()
  const userData = reactive({ username: '', password: '' })
  const handleLogin = async () => {
    try {
      const res = await post('/api/user/login', {
        username: userData.username,
        password: userData.password
      })
      if (res?.errno === 0) {
        showToast('登录成功')
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登录失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(userData)
  return { username, password, handleLogin }
}

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const router = useRouter()
    const { show, toastMsg, showToast } = userToastEffect()
    const { username, password, handleLogin } = userLoginEffect(showToast)
    const handleRegister = () => { router.push({ name: 'Register' }) }
    return {
      show, toastMsg, showToast,
      handleLogin, username, password,
      handleRegister
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../style/viriables';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0.01rem 0.16rem;
    &__content {
      background: #f9f9f9;
      width: 100%;
      line-height: 0.47rem;
      border: none;
      outline: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &__login-btn {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0);
    border-radius: 0.04rem;
    color: #fff;
    text-align: center;
  }
  &__login-register {
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
