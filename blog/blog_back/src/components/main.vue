<template>
  <div class="main">
     <header>
          <div class="log">
              <p>个人博客</p>
          </div>
          <div class="welcome">
              welcome <b>Megan</b> to  blog
          </div>
      </header>
      <main>
          <div class="pagelist">
              <page-list>111</page-list>
          </div>
          <div class="pagecontent">
            <router-view>
                  <page-content></page-content>
            </router-view>
              
          </div>
      </main>
      
  </div>
</template>
<script>
    import pageList from './page/main_left.vue'
    export default {
        data() {
            return {
                activeNames: ['1'],
                username: ""
            };
        },
        components: {
            pageList
        },
        mounted() {
            this.username = sessionStorage.getItem("username")
        }
    }
</script>
<style scoped>
     *{
        margin: 0;
        padding: 0;
        font-family: "微软雅黑"
      }
      .main{
        width: 100%;
        height: 100%;
      }
      .main header{
          width: 100%;
          height: 60px;
          background: cadetblue;
          color: #fff;
          display: flex;
          border-bottom: 1px solid #fff;
      }
      .log{
          width:80%;
          font-size: 20px;
          line-height: 60px;
          padding-left: 50px;
      }
      .welcome{
          text-align: center;
          line-height: 60px;
      }
      .welcome b{
        color: pink;
      }
      main{
        width: 100%;
        height: 600px;;
        display: flex;
        
      }
      .pagelist{
        width: 15%;
        height: auto;
        /* background:#cc6ff0; */
        
      }
      .pagecontent{
        width: 85%;
        height: auto;
         color: #fff;
         border-left: 1px solid #fff;
      }
</style>