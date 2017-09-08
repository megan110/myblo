<template>
  <div id="app">
   <div>
         <div id="templatemo_header_panel">
            <div id="templatemo_title_section">
                        <h1>MEGAN BLOG</h1>
                        Your heart goes here
            </div>
        </div> <!-- end of templatemo header panel -->
        <!-- end of menu -->
        <div id="templatemo_menu_panel">
            <div id="templatemo_menu_section">
                <ul>
                    <router-link v-for="i in list" :to="{path:'/index',query:{id:i.id}}" tag="li">{{i.cnname}}</router-link>                     
                </ul> 
            </div>
        </div>    
        
        <router-view></router-view>
          <div id="templatemo_bottom_panel">
            <div id="templatemo_bottom_section">
                <div class="templatemo_bottom_section_content">
                    <h3>IT</h3>
                    <ul>
                        <li><a href="#">IT中没有意外</a></li>
                        <li><a href="#">只有Bug</a></li>
                        <li><a href="#">IT在哪</a></li>
                        <li><a href="#">我在那</a></li>
                    </ul>
                </div>
                
                <div class="templatemo_bottom_section_content">
                    <h3>你的时间，我的时间</h3>
                    <p>发令枪一响，你是没时间看你的对手是怎么跑的。只有明天是我们的竞争对手。</p>
                </div>
                
                <div class="templatemo_bottom_section_content">
                    <h3>About myseflf</h3>
                    <p>我为什么能活下来?第一是由于我没有钱，第二是我对INTERNET一点不懂，第三是我想得像傻瓜一样
                    </p>
                    <a href="#">
                        <img style="border:0;width:88px;height:31px" src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" width="88" height="31" vspace="8" border="0" />
                    </a>
                    <a href="#">
                        <img style="border:0;width:88px;height:31px"  src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" vspace="8" border="0" />
                    </a> 
                </div>
                
            </div>
        </div> 
        
         <div id="templatemo_footer_panel">
            <div id="templatemo_footer_section">
                Copyright © 2014 <a href="#">你的月亮</a> | Designed by <a href="#" target="_parent">我的心</a>
            </div>
        </div>   

   </div>
  </div>
</template>

<script>
export default {
        name: 'first',
        data() {
            return {
                list:[]

            }
        },
        created(){
            //头部导航数据
            this.axios.get("http://localhost:8080/api/front_article/getNav").then(function(data){
               this.list=data.data.data;
               
            }.bind(this))
        }
    
       
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

    /* 公共样式 */
    body {
        margin: 0;
        padding: 0;
        line-height: 1.5em;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        color: #1a0d00;
        background: #4c4c4c;
    }

a:link, a:visited { color: #990000; text-decoration: none; } 
a:active, a:hover { color: #000000; text-decoration: underline; }


h1 {
	margin: 0px;
	padding: 10px;
	font-size: 60px;
	color: #000000;;
}

h2 {
	margin: 0 0 15px 0;
	padding: 0 0 10px 0;
	font-size: 20px;
	color: #dbc1a7;
	border-bottom: 1px dotted #663e17;
   
}

h3 {
	margin: 0 0 15px 0;
	padding: 0 0 10px 0;
	font-size: 20px;
	color: #a6703c;
	border-bottom: 1px dotted #663e17;
}

p {
	margin: 0px;
	padding: 0 0 10px 0;
	text-align: justify;
}

.cleaner {
	clear: both;
	width: 100%;
	height: 1px;	
}

/* ----- Form ----- */

form{
	margin: 0px;
	padding: 0px;
	width: 100%;
	text-align: right;
}

.inputfield{
	background: #ffffff;
	border: 1px solid #c9f5f6;
	color: #000;
	font-size: 13px;
	font-variant: normal;
	height: 14px;
	line-height: normal;
	padding: 4px;
	margin-bottom: 5px;
	width: 150px;
}

.button{
	width: 60px;
	height: 25px;
}

/* end of form */


#templatemo_header_panel{
	width:100%;
	margin: 0 auto;
	background-color: #0c0600;
	color: #FFFFFF;
	height: 205px;
}

#templatemo_header_panel #templatemo_title_section{
	width: 960px;
	height: 132px;
	margin:0 auto;
	padding-top: 73px;
	background: url("../static/images/templatemo_title_bg.jpg") center top no-repeat;
	text-align: center;
}

#templatemo_menu_panel{
	width:100%;
	height: 45px;	
	margin: 0 auto;
	background: url("../static/images/templatemo_menu_bg.gif") repeat-x;
	color: #ffffff;
}

#templatemo_menu_panel #templatemo_menu_section{
	width: 930px;
	height: 45px;	
	margin:0 auto;
	padding: 0 0 0 30px;
	color: #03a0a6;
}

#templatemo_menu_section ul {
	float: left;
	width: 930px;
	margin: 0;
	padding: 7px 0 0 0;
	list-style: none;
}

#templatemo_menu_section ul li{
  	display: inline;
	float: left;
	width: 110px;
	padding: 5px 0;
	margin-right: 5px;
	font-size: 12px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	color: #ffffff;
	border-bottom: 3px solid #472400;
}

#templatemo_menu_section li:hover, #templatemo_menu_section li .current{
	color: #ffffff;
	border-bottom: 3px solid #703901;
}
/* end of menu */

/* content panel */
#templatemo_content_container {
	overflow: hidden;
	height: 100%;
	width:100%;
	margin: 0 auto;
	background: url("../static/images/templatemo_content_bg.gif") repeat;
}

#templatemo_content_container #templatemo_content{
	width: 930px;
	padding: 15px 0 0 30px;
	margin:0 auto;
}

#templatemo_content_left {
	float: left;
	width: 600px;
	margin: 0px;
	margin-bottom: 15px;
}

#templatemo_content_right {
	float: right;
	width: 300px;
	margin-bottom: 15px;
	color: #dbc1a7;
	background: #000000 url("../static/images/templatemo_right_column_bg.jpg") repeat-y;
}

#templatemo_content_left .templatemo_post_wrapper {
	clear: both;
	width: 590px;
	background: url("../static/images/templatemo_post_bg_repeat.gif") repeat;
	border: 5px solid #3b3023;
	margin-bottom: 15px;	
}

#templatemo_content_left .templatemo_post {
	width: 530px;
	padding: 25px 30px 0 30px;
	background: url("../static/images/templatemo_post_bg.gif") top center no-repeat;
	
}

* html #templatemo_content_left .templatemo_post {
	margin-bottom: 5px;
}

.templatemo_post .post_title{
	width: 100%;
	margin: 0px;
	padding: 5px 0;
	font-size: 26px;
	font-weight: bold;
	color: #1a0d00;
}

.templatemo_post .post_info{
	width: 100%;
	padding: 0 0 10px 0;
	border-bottom: 1px solid #333333;
	margin-bottom: 15px;
}

.templatemo_post .post_body{
	width: 100%;
}

.templatemo_post .post_body img{
	margin-bottom: 15px;
}

.templatemo_post .post_comment{
	width: 100%;
	padding: 5px 0;
	font-weight: bold;
}

#templatemo_content_right .templatemo_right_section{
	clear: both;
	display:inline-block;
	width: 250px;
	color: #bd8956;
	padding: 15px 15px 10px 15px;
	margin-bottom: 20px;
	border-bottom: 1px solid #684018;
}

#templatemo_content_right .templatemo_right_section form{
	padding: 0 0 15px 0;
}

#templatemo_content_right .templatemo_right_section ul{
	clear: both;
	margin: 20px 0 0 15px;
	padding: 0px;
}

#templatemo_content_right .templatemo_right_section ul li{
	margin: 20px 0 5px 0;
}

#templatemo_content_right .templatemo_right_section ul li a {
	color: #dbc1a7;
}

#templatemo_bottom_panel{
	width:100%;
	margin: 0 auto;
	border-top: 5px solid #000000;
	background-color: #0c0600;
}

#templatemo_bottom_panel #templatemo_bottom_section{
	width: 930px;
	margin:0 auto;
	height: 150px;	
	background: #0c0600 url("../static/images/templatemo_footer_bg.jpg") center top no-repeat;
	padding: 30px 0 15px 30px;
}

#templatemo_bottom_section .templatemo_bottom_section_content {
	display: inherit;
	float: left;
	width: 270px;
	padding-right: 20px;
	margin-left: 10px;
	margin-bottom: 15px;
	color: #dbc1a7;
}

#templatemo_bottom_section .templatemo_bottom_section_content ul{
	margin: 0 0 0 10px;
	padding: 0 0 5px 10px;
}

#templatemo_bottom_section .templatemo_bottom_section_content li a{
	color: #dbc1a7;
}

#templatemo_footer_panel{
	width:100%;
	margin: 0 auto;
	background-color: #000000;
	color: #ffffff;
}

#templatemo_footer_panel #templatemo_footer_section{
	width: 960px;
	margin:0 auto;
	text-align: center;
	padding: 15px;
}

#templatemo_footer_panel #templatemo_footer_section a {
	color:#dbc1a7;
}
 


      
</style>
