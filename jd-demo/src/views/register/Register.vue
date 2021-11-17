<!--
 * @Description:注册
 * @Author: Jamboy
 * @Date: 2021-11-09 16:38:25
 * @LastEditTime: 2021-11-15 11:25:58
-->
<template>
  <div class="wrapper">
    <img class="wrapper__img"
         src="http://www.dell-lee.com/imgs/vue3/user.png">
    <div class="wrapper__input">
      <input class="wrapper__input__content"
             type="text"
             placeholder="请输入手机号">
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content"
             type="text"
             placeholder="请输入密码">
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content"
             type="text"
             placeholder="请确认密码">
    </div>
    <div class="wrapper__register-btn"
         @click="handleRegister">
      注册
    </div>
    <div class="wrapper__register-register"
         @click="handleBackLogin">
      已有账号?去登录
    </div>
  </div>
</template>
<script>

import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup () {
    const router = useRouter()
    const handleBackLogin = () => {
      router.push({ name: 'Login' })
    }
    return { handleBackLogin }
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

  &__register-btn {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    font-size: 0.16rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0);
    border-radius: 0.04rem;
    color: #fff;
    text-align: center;
  }
  &__register-register {
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}
</style>
