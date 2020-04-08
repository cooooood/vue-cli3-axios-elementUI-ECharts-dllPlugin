<template>
  <div class="lowVersion">
    <div class="error demote">
      <img src="../../assets/noie.png"
           alt="icon">
      <span>您正在使用的浏览器是{{browserVersion.browser}}{{browserVersion.version}}，不再支持范围内！</span>
      <span>为了您的服务正常使用与展示，<i>推荐使用Chrome浏览器最新版</i></span>
      <div class="browser-list">
        <span class="browser-list-title">支持浏览器:</span>
        <ul>
          <li class="chrome">
            <img src="../../assets/ic_chrome.png">
            <span>Chrome浏览器</span>
          </li>
          <li class="firefox">
            <img src="../../assets/ic_firefox.png">
            <span>火狐浏览器</span>
          </li>
          <li class="safari">
            <img src="../../assets/ic_safari.png">
            <span>Safari浏览器</span>
          </li>
          <li class="edge">
            <img src="../../assets/ic_edge.png">
            <span>Edge浏览器</span>
          </li>
          <li class="ie">
            <img src="../../assets/ic_ie.png">
            <span>IE浏览器10、11</span>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['browserVersion'])
  },
  created () {
    // eslint-disable-next-line no-prototype-builtins
    if (!this.browserVersion.hasOwnProperty('browser')) {
      this.$router.replace('/')
    }
  }

}
</script>

<style scoped lang="scss">
  .lowVersion{
    background-color: #ffffff;
  }
  .demote {
    padding-top: 83px;
    overflow: hidden;
    text-align: center;

    > span {
      color: #333333;
      &:first-of-type {
        font-size: 16px;
        margin-bottom: 10px;
      }
      &:nth-of-type(2) {
        display: block;
        font-size: 14px;
        i {
          font-style: normal;
          color: #ff7676;
        }
      }
    }
    img{
      display: block;
      margin: 0 auto 25px;
    }
    .browser-list {
      font-size: 14px;
      margin: 45px auto 0;
      width: 581px;
      .browser-list-title {
        display: block;
        font-size: 16px;
        line-height: 22px;
        text-align: left;
        margin-bottom: 29px;
      }
      ul {
        list-style: none;
        display: flex;
        padding: 0;
        li {
          list-style: none;
          margin-right: 55px;
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 50px;
            height: 50px;
          }
          span {
            font-size: 12px;
            line-height: 17px;
          }
        }
      }
    }
  }
</style>
