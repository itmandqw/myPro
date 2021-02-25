<template>
    <div>

      <div @click="openPicker">{{ pickerValue }}</div>

      <mt-datetime-picker
        ref="picker"
        type="date"
        year-format="{value} 年"
        month-format="{value} 月"
        v-model="pickerValue">
      </mt-datetime-picker>
    </div>
</template>

<script>
// import Datepicker from 'vuejs-datepicker'   // 不符合
import {Datepicker} from 'mint-ui'

export default {
  data(){
    return{
      pickerValue: '2020-08-22'
    }
  },
  components:{
    Datepicker
  },
  methods:{
    openPicker(){
      this.$refs.picker.open()
    }
  }

}
</script>