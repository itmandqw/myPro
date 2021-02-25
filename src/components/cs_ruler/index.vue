<template>
  <div>
      <input ref="inputNum" type="number" v-model="NumValue">
      <cs-ruler @post-NumValue="rulerNum" 
        :NowNum="originNum" 
        :maxNum='100' 
        :minNum='0' 
        :oneGridValue='100'
        :ruleWidth='80'
        :numSize='20'
        :pointerColor="'red'">
      </cs-ruler>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Toast } from 'mint-ui'
export default {
  name: 'app',
  data () {
    return {
      NumValue: '5000'
    }
  },
  computed: {
    originNum(){
      return this.NumValue / 100
    }
  },
  methods:{
      rulerNum(value){
        this.NumValue = value
        if(value > 10000){
          this.$refs.inputNum.focus()
          Toast('不能超过10000元哦')
        }
      },
      endEvent(val){    // 是否滚动结束
        // console.log(val)
      }
  }
}
</script>