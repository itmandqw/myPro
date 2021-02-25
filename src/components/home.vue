<template>
  <div class="home">
    <div class="img_wrap">
      <img src="./../assets/logo.png">
    </div>
    <mt-button type="default">Vuex</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted(){
    var columLabel = ['甲','乙','丙','丁','戊'];         // 图例
		var columName = ['周一','周二','周三','周四','周五']   // x轴
    var columnValue = new Array();
    var arrData = new Array();
    
    for(var i=0;i<columLabel.length;i++) 
    {
      for(var j=0;j<columName.length;j++) 
      {
        arrData.push(Math.floor(Math.random()*1000+1000*j-1000*i));
        }
      columnValue.push(eval('(' + ("{'name':'"+columLabel[i]+"','type':'bar','data':["+arrData+"]}") + ')'));
    }

    console.log('columnValue', JSON.stringify(columnValue))

  },
  methods: {
    test(){
      axios.get('/news/index', 'type=top&key=123456')
      .then(res => {
        console.log(res.data);
        this.newsListShow = res.articles;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img_wrap{
  width: 100%;
  text-align: center;
}
.img_wrap img{
  width: 200px;
}
</style>
