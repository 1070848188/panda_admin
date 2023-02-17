<template>
  <div class="container">
    <div class="back">
      登录界面
    </div>
    <div class="from">
      表单输入
      <el-button @click="handleLogin" >登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  props: {},
  data() {
    return {
      title: ''
    }
  },
  mounted() {
  },
  methods: {
    handleLogin () {
      this.$store.dispatch('user/login', 'xxx').then(() => {
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.back {
  flex: 1;
}
.from {
  width: 40vw;
}
</style>
