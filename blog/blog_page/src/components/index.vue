<template>
   <div>
        <!-- end of content container -->
          <div id="templatemo_content_container">
            <div id="templatemo_content">
                 <div id="templatemo_content_left">
                      <h2>所有文章</h2>
                    <div class="templatemo_post_wrapper" v-for="i in everypage">
                        <div class="templatemo_post">
                            <div class="post_title">
                                {{i.article_name}}
                            </div>
                            <div class="post_info">
                                Posted by 
								<router-link :to="{path:'/detaillist',query:{id:i.id}}">详细了解...</router-link>
                                ,{{i.time}}, from
                                <a href="#">{{i.editer}}</a>
                            </div>
                            <div class="post_body">
                                <img src="../../static/images/templatemo_image_02.jpg" alt="free css template" border="1" />
                                <p v-html="i.daodu"></p>  
                            </div>
                            <div class="post_comment">
                                <a href="#">{{i.time}}</a>
                            </div>
                         </div>
					</div>  
					<div class="block">
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[2,4,6]" :page-size="2" layout="total, sizes, prev, pager, next, jumper" :total="itemlist.length"></el-pagination>
					</div>
                </div>
            
               <div id="templatemo_content_right">
                    <div class="templatemo_right_section">
                         <div class="tag_section">
                            <div class="templatemo_right_section">
                                <h2>全站搜索</h2>
                                <form method="get" action="#">
                                    <input class="inputfield" name="keyword" type="text" id="keyword"/>
                                    <input type="submit" name="submit" class="button" value="Search" />
                                </form>
                            </div>  

                            <div class="templatemo_right_section">
                                <h2>最新排行</h2>
                                <ul>
                                    <li><a href="#">January 2024</a></li>
                                    <li><a href="#">December 2023</a></li>
                                    <li><a href="#">November 2023</a></li>
                                    <li><a href="#">October 2023</a></li>
                                    <li><a href="#">September 2023</a></li>
                                </ul>   
                            </div> 
                            
                             <div class="templatemo_right_section">
                                <h2>点击量排行</h2>
                                <ul>
                                    <li><a href="#">Quisque dictum pharetra neque</a></li>
                                    <li><a href="#">Aliquam pretium porta odio</a></li>
                                    <li><a href="#">Maecenas adipiscing</a></li>
                                    <li><a href="#">Vivamus vestibulum condimentum</a></li>
                                    <li><a href="#">Cum sociis natoque</a></li>
                                </ul>    
                            </div> 
                            
                            <div class="templatemo_right_section">
                                <h2>有联系方式哦</h2>
                                <ul>	
                                    <li><a href="#">qq</a></li>
                                    <li><a href="#">微信</a></li>
                                    <li><a href="#">gitHub</a></li>
                                    <li><a href="#">微博</a></li>
                                </ul> 
                            </div>  
                        </div> 
                      
                    </div>
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
                article:[],
				itemlist:[],
				currentPage: 0, //当前显示页
                everypagelist: 2, //默认每页显示条数
                everypage: [] //每页的数据

            }
		},
		 mounted(){
            var _this=this;
            var paramid=this.$route.query.id;
            // console.log(paramid);
            this.axios.get('http://localhost:8080/api/front_article/getArticleAll').then(function(data){
				// console.log(data.data.data);
			   _this.itemlist=[];
                data.data.data.forEach(function(val,ind){
					var id=val.oneId;
					// console.log(id);
                    if(paramid==id){
						_this.itemlist.push(val) 
                    }
                    
				})  
            })    
		},
		methods:{
			 handleSizeChange(val) {
                this.everypagelist = val

            },
            handleCurrentChange(val) {

                this.everypage = this.itemlist.slice(this.everypagelist * (val - 1), this.everypagelist * val)

            },
		}
		
		
       
		
    }
</script>

<style scoped>

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
	background: url("../../static/images/templatemo_title_bg.jpg") center top no-repeat;
	text-align: center;
}

#templatemo_menu_panel{
	width:100%;
	height: 45px;	
	margin: 0 auto;
	background: url("../../static/images/templatemo_menu_bg.gif") repeat-x;
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
}

#templatemo_menu_section ul li a{
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

#templatemo_menu_section li a:hover, #templatemo_menu_section li .current{
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
	background: url("../../static/images/templatemo_content_bg.gif") repeat;
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
	background: #000000 url("../../static/images/templatemo_right_column_bg.jpg") repeat-y;
}

#templatemo_content_left .templatemo_post_wrapper {
	clear: both;
	width: 590px;
	background: url("../../static/images/templatemo_post_bg_repeat.gif") repeat;
	border: 5px solid #3b3023;
	margin-bottom: 15px;	
}

#templatemo_content_left .templatemo_post {
	width: 530px;
	padding: 25px 30px 0 30px;
	background: url("../../static/images/templatemo_post_bg.gif") top center no-repeat;
	
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
	background: #0c0600 url("../../static/images/templatemo_footer_bg.jpg") center top no-repeat;
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