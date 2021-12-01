<template>
  <div class="container">
      <el-card class="item-card">
        <template v-slot:header>
          <img alt="Vue logo" src="../assets/logo.png" width="64" height="64"/>
          <br>
          <span>{{this.object}}</span>
        </template>
            <div class="item-div" v-for="item of items" :key="item">
              <el-row>
              <p>KR {{item.id}}</p>
              <el-input type="text" 
                  v-model="item.info" 
                  placeholder="Please input the key result"
                  autocomplete="on"
                  autofocus="off" 
                  class="key-result-input"
              />

              <el-slider
              class="marker-slider"
              v-model="item.score"
              :step="10"
              show-stops
              show-input/>
              </el-row>
            </div>


        <el-button class="btn-add-item" type="primary" icon="el-icon-edit" circle v-on:click="addItem"></el-button>
      </el-card>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  data() {
    return {
      object: "Object",
      items: [
        {id: 1, info: "", score: 0}
      ]
    }
  },

  methods: {
    addItem() : void {
      this.items.push({
        id: (this.items.length + 1),
        info: "",
        score: 0
        });
    }
  }
});
</script>


<style lang="scss" scoped>

.container {
    margin-left: 20px;
    margin-left: 20px;
    width: 100%;
    display: flex;
    justify-content:center;
}

.item-card {
    min-width: 480px;
    width: 80%;
    margin-right: 5px;
    margin-left: 5px;
    // transition: all .5s;
}

.card:hover {
    margin-top: -5px;
}

.btn-add-item {
  position: relative;
  float: right;
  right: 0%;
  margin: 10px;
}

.key-result-input {
  max-width: 40%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 0;
}

.marker-slider {
  min-width: 100px;
  width: 40%;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 0;
}

</style>
