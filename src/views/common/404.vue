<template>
  <div class="notFound">
    <img src="../../assets/404.png"
         alt="icon">
    <span>哎呀，你的页面被带走了</span>
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
  .notFound {
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
