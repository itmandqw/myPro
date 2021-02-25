<template>
  <div>
    <div>
      <mt-button @click="showBtn1 = !showBtn1">过渡</mt-button>
      <transition name="fade">
        <div style="margin-top: 20px;" v-show="showBtn1">我赌你的枪里没有子弹</div>
      </transition>
    </div>

    <div style="margin-top: 20px;">
      <mt-button @click="showBtn2 = !showBtn2">动画</mt-button>
      <transition name="bounce">
        <div style="margin-top: 20px;" v-if="showBtn2">我赌你的枪里没有子弹</div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showBtn1: false,
      showBtn2: false,
    }
  },
  computed: {
  },
  methods:{
      
  }
}
</script>

<style lang="css" scoped>
   /* 元素开始进入前和离开后的状态 */
  .fade-leave-to, .fade-enter{     
    opacity: 0;
    transform: translateY(30px) scale(0);
  }

  /* 元素进入后和离开前的状态 */
  .fade-enter-to, .fade-leave{
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .fade-enter-active, .fade-leave-active{
    transition: all .3s;
  }


  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

</style>