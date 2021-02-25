<template>
    <div>
      <vue-pickers
        :data="pickData"
        @cancel="cancel"
        @confirm="confirm"
        @change="change"
        :showToolbar="true"
        :maskClick="true"
        :visible.sync="pickerVisible"
        :title="'所在机构'"
        :layer="3"
        :link="true"
        ></vue-pickers>

        <p>选中项</p>
        <p v-for="(item, index) in result" :key="index">{{ item.label }}</p>

        <button @click="pickerVisible=true;">打开</button>
    </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import vuePickers from 'vue-pickers'

export default {
  data () {
    let dataObj = 
      [
        {
          "label":"一级选项",
          "level": 1,
          "children":[
            {
              "label":"二级选项1",
              "level": 2,
              "children":[
                {
                  "label":"三级选项1",
                  "level": 3,
                },
                {
                  "label":"三级选项2",
                  "level": 3,
                },
                {
                  "label":"三级选项3",
                  "level": 3,
                },
                {
                  "label":"三级选项4",
                  "level": 3,
                },
              ]
            },
            {
              "label":"二级选项2",
              "level": 2,
              "children":[
                {
                  "label":"211",
                  "level": 3,
                },
                {
                  "label":"212",
                  "level": 3,
                },
                {
                  "label":"213",
                  "level": 3,
                },
              ]
            },
            {
              "label":"二级选项3",
              "level": 2,
              "children":[
                // {
                //   "label":"",
                //   "level": 3,
                // },
              ]
            },
          ]
        },
        {
          "label":"地球",
          "level": 1,
          "children":[
            {
              "label":"非洲",
              "level": 2,
              children: [
                {
                  "label":"印度",
                  "level": 3,
                },
                {
                  "label":"刚果",
                  "level": 3,
                }
              ],
            },
            {
              "label":"亚洲",
              "level": 2,
              children: [
                {
                  "label":"中国",
                  "level": 3,
                },
                {
                  "label":"大中华",
                  "level": 3
                }
              ],
            },
          ]
        },
      ]

    return {
      pickData: dataObj,
      result: '',
      pickerVisible: false
    }
  },
  components: {
    vuePickers
  },
  mounted(){
    console.log('pickData', this.pickData)
  },
  methods: {
    cancel(){
      console.log('cancel')
    },
    confirm(res){
      console.log('res', res)
      this.result = res
    },
    change(val){
      console.log(val)
    }
  }
}
</script>