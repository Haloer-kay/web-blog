<template>
  <div class="main">
    <top></top>
    <mainSide></mainSide>
  </div>
</template>

<script>
import top from "../components/index/Top"
import mainSide from "../components/side/Side"
export default {
components:{
  top,
  mainSide,
}
}
</script>

<style>
body{
  height: 100%;
}
.main{
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
}
</style>