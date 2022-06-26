<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      ref="LoginForm"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
        <span class="title-icon">icon</span>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <bellFilled />
          </el-icon>
        </span>
        <el-input v-model="loginForm.password" :type="inputType">
          <!-- <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template> -->
          <template #suffix>
            <el-icon
              v-if="inputType == 'password'"
              @click="handlePassWordStatus"
              class="el-input__icon"
              ><Hide
            /></el-icon>
            <el-icon v-else @click="handlePassWordStatus" class="el-input__icon"
              ><View
            /></el-icon>
          </template>
        </el-input>
      </el-form-item>

      <el-button
        type="primary"
        @click="handleLoginSubmit('loginForm')"
        class="login-button"
        >登录</el-button
      >

      <!-- <el-button @click="handlePassWordStatus">密码切换</el-button> -->
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// icons
import { Avatar, BellFilled, View, Hide } from '@element-plus/icons-vue'
// 密码的验证规则
import { validatePassword } from './rule'
const inputType = ref('password')
// 声明
const loginForm = ref({
  username: '',
  password: ''
})
// 校验规则
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      require: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ]
})
// 登录按钮的点击事件
const handleLoginSubmit = async (forName) => {
  //   alert('handleLoginSubmit')
  if (!forName) return
  await forName.validate((valid) => {
    if (valid) {
      alert('登录')
    }
  })
}
const handlePassWordStatus = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    // background-color: #889aa4;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #787777;
      position: relative;

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
      }
      .el-input__icon{
        position: absolute;
        top: 13px;
        right: -20px;
      }
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 40px;
      width: 85%;
      .el-input__wrapper {
        background: transparent !important;
        box-shadow: none;
      }
      .el-input__wrapper.is-focus {
        box-shadow: none;
      }
      input {
        color: $cursor;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        height: 40px;
      }
    }
    .login-button {
      width: 100%;
      margin-bottom: 30px;
    }
    .login-button:hover {
      background-color: rgb(12, 167, 228);
    }
  }
  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 35px auto;
      text-align: center;
      font-weight: bold;
    }

    .title-icon {
      position: absolute;
      top: 0;
      right: 0;
      color: $light_gray;
    }
  }
}
</style>
