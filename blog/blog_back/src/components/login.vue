<template>
  <div class="login">
        <h2>登录博客</h2>
        <div class="content">
            <h3>登录</h3>
            <label v-focus:test="loginname">
                <input type="text" placeholder="用户名" v-model.lazy="loginname.val" @blur="fn(loginname)">
                <span style="color:red;display:block" v-if="loginname.state">{{loginname.msg}}</span>
              </label>
            <label v-focus:required="loginpw">
              <input type="password" placeholder="密码" v-model.lazy="loginpw.val" @blur="fn(loginpw)">
               <span style="color:red;display:block" v-if="loginpw.state">{{loginpw.msg}}</span>
            </label>
            <input type="button" value="登录" class="btn" @click="login">
            
        </div>
  </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                loginname: {
                    val: "",
                    msgread: "您输入的姓名不符合中文格式",
                    msg: "您输入的姓名不符合中文格式",
                    test: /^[a-zA-z]+$/,
                    state: false
                },
                loginpw: {
                    val: "",
                    msgread: "您输入的密码格式不对",
                    blur: false,
                    msg: "您输入的密码格式不对",
                    test: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
                    state: false
                }
            }
        },
        methods: {
            login() {
                // 判断是否值是否正确
                var _this = this
                if (!this.loginpw.state && !this.loginname.state && this.loginpw.val != "" && this.loginname.val != "") {
                    this.axios.post("/api/back_class", {
                        loginname: this.loginname.val,
                        loginpw: this.loginpw.val
                    }).then(function(data) {
                        console.log(data)
                        _this.$message(data.data.msg);
                        if (data.data.code == "1001") {
                            sessionStorage.setItem("userId", data.data.userid);
                            sessionStorage.setItem("username", _this.loginname.val);
                            _this.$router.push("/main")
                        }
                    })
                } else {
                    alert("请正确填写用户名密码")
                }

            },
            // 必填项的验证
            fn(val) {
                val.blur = true
            }
        },
        directives: {
            focus: {
                componentUpdated(el, option, vnode, oldVnode) {
                    var $testState = option.value.test.test(option.value.val)
                    if (option.value.val != "") {
                        if ($testState) {
                            option.value.state = false
                        } else {
                            option.value.state = true
                        }
                        option.value.msg = option.oldValue.msgread
                    } else {
                        if (option.arg == "required" && option.value.blur) {
                            option.value.state = true
                            option.value.msg = "不能为空"
                        } else {
                            option.value.state = false
                        }

                    }
                }

            }

        }
    }
</script>

<style scoped>
      *{
        margin: 0 auto;
        padding: 0;
        font-family: "微软雅黑"
      } 
       .login{
        width: 100%;
        height: 100%;
        background: url("../../static/images/backs.jpg") no-repeat;
        background-size: 100% 100%;
      } 
       .login h2{
       padding: 130px 0 80px 0;
        font-size: 30px;
        color: #fff;
        text-align: center;
        font-weight: normal;
      } 
       .content{
          width: 35%;
          height: 300px;
          background:#14100d;
          opacity: 0.8;
          display: flex;
          flex-direction: column;
          margin-bottom: 200px;
      }
      .content h3{
        padding:10px 0 10px 30px;;
        line-height: 40px;
        color: #fff;
        font-size: 20px;
      }
      .content label{
        width: 70%;
        height:40px;
        border-bottom: 1px solid #383435;
        margin-top: 20px;
      }
      .content label input{
          background: none;
          border:none;
          line-height: 40px;
          outline: none;
          color: #fff;
      } 
      .btn{
          background: none;
          width: 30%;
          height: 40px;
          border:none;
          border: 1px solid #383435;
          margin-top: 40px;
          color: #fff;
           outline: none;
      } 
</style>