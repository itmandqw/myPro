<template>
  <!-- 不太好用÷ -->
  <div>
    <li>
        <div class="left">
            <span>所在地区</span>
        </div>
        <div class="right r">
            <div class="city" @click="toAddress">{{city}}</div>
            <i class="arrow-r"> </i>
        </div>
    </li>
    <v-distpicker type="mobile" @selected='selected' v-show="addInp">
    </v-distpicker>
    <div class="mask" v-show="mask"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VDistpicker from 'v-distpicker'
export default {
  name: 'app',
  data () {
    return {
      city: '请选择',
      addInp: false,
      mask: false,
    }
  },
  components: {
    VDistpicker
  },
  methods: {
    toAddress(){
      this.addInp = true;
      this.mask = true;
    },
    selected(){
      this.mask = false;
      this.addInp = false;
      this.city = data.province.value + '' + data.city.value + '' + data.area.value
    }
  }
}
</script>