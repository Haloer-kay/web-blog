<template>
  <div>
    <header class="header" id="DarkModelPage">
      <div class="top">
      <a href="">
        <span class="title" style="color:rgb(22,93,255)">kai-star</span>
        <span class="title">的个人博客</span>
      </a>
      <div class="top-side">
        <div class="search">
          <i class="iconfont icon-search" style="color:rgb(22,93,255)">&#xe603;</i>
          <input type="text" class="input">
        </div>
        <div class="links">
          <nav>
            <i class="iconfont">&#xe7ab;</i>
            <a href="https://github.com/Reinvent6080" target="_blanket" class="hover-blue">
              github
            </a>
          </nav>
           <nav>
            <a href="" class="hover-blue">
              笔记
            </a>
          </nav>
          <nav>
           <div class="switch" @click="modelBtn">
             按钮
           </div>
          </nav>
        </div>
      </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data(){
    return {
      dark:false,
    }
  },
  methods:{
    modelBtn(){
        this.dark = !this.dark;
            if(this.dark){
                window.document.documentElement.setAttribute( "data-theme", 'dark' );
            }else{
                 window.document.documentElement.setAttribute( "data-theme", 'light' );
            }
    },
  mounted() {
        window.document.documentElement.setAttribute( "data-theme", 'light' );
    },
  }

}
</script>

<style scoped lang="scss">
@import '@/assets/scss/common/common';
#DarkModelPage{
    //在此使用了背景颜色变量
    @include background_color("background_color");
    //再次使用了文字颜色变量
    @include font_color("text-color");
    transition: background 1s , color 0.6s;
}
body{
  margin: 0;
  border: 0;
}
a{
  text-decoration: none;
  color: rgb(29, 33, 41);
  line-height: 60px;
}
.header{
  background: rgb(255,255,255);
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid rgb(229, 230, 235);
  position:fixed;
  top: 0px;
  box-shadow: 0px 0px 4px rgb(219, 218, 218);
  z-index: 9999;
}
.top{
  margin: 0 auto;
  width: 90vw;
  display: flex;
  justify-content: space-between;
}
.title{
  margin: 0 5px;
}
.top-side{
  display: flex;
  align-items: center;
}
.input{
  border: none;
  outline: none;
  width: 210px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  border-radius: 20px;
  text-indent: 25px;
  box-shadow: 0px 0px 2px rgb(219, 218, 218);
}
.links{
  display: flex;
  justify-content: space-around;
}
nav{
  margin: 0 25px;
}
.icon-search{
  position: relative;
  left: 22px;
  line-height: 30px;
  top: 2px;
}
.switch{
  line-height: 60px;
}
.hover-blue:hover{
  color:rgb(22,93,255)
}
</style>