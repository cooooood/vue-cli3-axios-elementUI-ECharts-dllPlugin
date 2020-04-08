<template>
  <div class="error">
    <img src="../../assets/nomission.png"
         alt="icon">
    <span>抱歉！您没有权限访问此页面</span>
    <a :href="href"
       class="back">返回xxxx</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      href: ''
    }
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
  .error {
    overflow: hidden;
    margin-top: 93px;
    text-align: center;
    & .back {
      display: block;
      margin: 24px auto 0;
      width: 90px;
      height: 32px;
      background-color: #1B85FF;
      border-radius: 2px;
      color: #FFFFFF;
      line-height: 32px;
    }
    & span {
      display: block;
      margin-top: 20px;
      color: #666666;
    }
  }
</style>
