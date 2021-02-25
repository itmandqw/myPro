<template>
  <div id="app">
	<mt-button  @click="increment" type="default">增加</mt-button>
	<mt-button  @click="decrement" type="default">减少</mt-button>
	<mt-button  @click="incrementAsync" type="default">延时增加</mt-button>
    <p>{{count}}</p>
    <p>{{isEvenOrOdd}}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed:mapGetters([
    'count',
    'isEvenOrOdd'
  ]),
  mounted(){
	  console.log(this.$store)
  },
  methods:mapActions([
    'increment',
    'decrement',
    'incrementAsync'
  ])
}
</script>