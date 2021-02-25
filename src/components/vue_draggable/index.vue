<template>
  <div>
    <draggable v-model="colors" @update="datadragEnd" :options="{animation:500}">
      <transition-group>
        <div v-for="element in colors" :key="element.text" class="drag-item">{{element.text}}</div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import draggable from "vuedraggable";

export default {
  name: "app",
  data() {
    return {
      colors: [
        {
          text: "Aquamarine",
        },
        {
          text: "Hotpink",
        },
        {
          text: "Gold",
        },
        {
          text: "Crimson",
        },
        {
          text: "Blueviolet",
        },
        {
          text: "Lightblue",
        },
        {
          text: "Cornflowerblue",
        },
        {
          text: "Skyblue",
        },
        {
          text: "Burlywood",
        },
      ],
    };
  },
  components: {
    draggable,
  },
  mounted() {
    //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
    document.body.ondrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
    };
  },
  methods: {
    datadragEnd(evt) {
      evt.preventDefault();
      console.log("拖动前的索引 :" + evt.oldIndex);
      console.log("拖动后的索引 :" + evt.newIndex);
      console.log(this.colors);
    },
  },
};
</script>

<style lang="css">
.test {
  border: 1px solid #ccc;
}
.drag-item {
  width: 200px;
  height: 50px;
  line-height: 50px;
  margin: auto;
  position: relative;
  background: #ddd;
  margin-top: 20px;
}
.ghostClass {
  opacity: 1;
}
.bottom {
  width: 200px;
  height: 50px;
  position: relative;
  background: blue;
  top: 2px;
  left: 2px;
  transition: all 0.5s linear;
}
</style>