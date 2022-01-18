<template>
  <div>
    <div class="side">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu  v-for="item in title" :key="item.id" :index="item.id">
        <template slot="title">
          <!-- <i class="el-icon-location"></i>  图标 -->
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(item1,index1) in item.detail" :key="index1" :index="index1">{{item1}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <!-- <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航三</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航四</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
    </el-menu>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        title:{
          content1:{
            id:0,
            title:"css",
            detail:["css1","css2","css3"],
          },
          content2:{
            id:1,
            title:"JavaScript",
            detail:["js1","js2","js3"],
          },
          content3:{
            id:2,
            title:"vue",
            detail:["vue1","vue2","vue3"],
          },
        }
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scoped >
.side{
  position: relative;
  top: 60px;
  width: 270px;
  height: 100%;
  background-color: rgb(255,255,255); 
  border-right: 1px solid rgb(229,230,235);
  border: 0 40px;
}
</style>