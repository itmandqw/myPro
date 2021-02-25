<template>
  <div>
      js代码演示，无实际可操作demo
      <button @click="download()">点击下载</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from 'axios'

export default {
  name: 'download',
  data () {
    
  },
  methods:{
      download(){
        let that = this
        axios({
          url: 'xxx/yyy',
          data: {},
          method: 'POST',
          responseType: 'blob'   // 要求返回数据类型为blob类型
        }).then((res) =>{
          let data = res.data
          let reader = new FileReader()
          reader.onload = function(){
            try{
              // 如果能被解析，说明是json格式的报错，转化成json格式，报错给用户
              let jsonObj = JSON.parse(this.result)
              alert(jsonObj.msg)       // 弹出报错信息
            }catch(e){
              // 说明是可下载的文件流，执行下载动作
              that.callBackDownload(res)
            }
          }
          reader.readAsText(data)
        })
      },

      callBackDownload(res){
        let fileName = res.headers['content-disponsition'].split('filename=')[1]
        let fileData = new Blob([res.data], {type: 'application/vnd.ms-excel;charset=utf-8'})
        if(window.navigator.msSaveOrOpenBlob){                // msSaveOrOpenBlob 兼容IE10
          window.navigator.msSaveOrOpenBlob(fileData, fileName)
        }else{
          let a = document.createElement('a')
          let url = window.URL.createObjectURL(fileData)
          a.style = 'display: none'
          a.download = decodeURI(fileName)
          a.href = url
          a.click()
          a.remove()
          window.URL.revokeObjectURL(url)
        }
      }
  }
}
</script>