<template>
  <div class="container">
      <img src="../../assets/img/login-head.png" alt="" class="head-img">
    <div class="inner">
      <form action="/">
        <div class="item">
          <label for="count">账号：</label>
          <input type="text" id="count" class="input" autocomplete="off" v-model="count">
        </div>
        <div class="item">
          <label for="password">密码：</label>
          <input type="password" id="password" class="input" v-model="password">
        </div>
        <input type="submit" class="btn" @click="login">
      </form>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      password:'',
      count:''
    }
  },
  methods:{
    login(){
      if(this.password!='' && this.count!=''){
        this.$router.push("/index")
      }
      else{
        alert("请输入账号密码👀👀")
      }
    }
  }
}
</script>

<style scoped>
.container{
  padding: 5px 30px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 350px;
  box-shadow: 1px 1px 7px #ccc;
  /* background-color: rgb(240, 236, 236); */
 border-radius: 10px;
}
.head-img{
  width: 280px;
  display: block;
  margin: 0 auto;
  margin-bottom: 8px;
}
.input{
  border: none;
  outline: none;
  width: 230px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #999999;
  /* background-color: rgb(240, 236, 236); */
}
.item{
  height: 60px;
  
}
.btn{
  outline: none;
  border: none;
  background-color: rgb(35,168,242);
  color: #f1f1f1f1;
  width: 100px;
  height: 35px;
  border-radius: 4px;
  font-size: 16px;
 float: right;
 margin-right: 14px;
 cursor: pointer;
}
</style>