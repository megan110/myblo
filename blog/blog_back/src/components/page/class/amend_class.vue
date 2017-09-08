<template>
    <div class="class_one">
        <el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <h3 style="margin-top:10px;">{{typeData.label}}</h3>
            <el-form-item label="中文类名" prop="cn" style="margin:20px;">
                <el-input type="text" v-model="ruleForm.cnname_one" auto-complete="off" style="width:300px;height:40px;"></el-input>
            </el-form-item>
            <el-form-item label="英文类名" prop="en" style="margin:20px;">
                <el-input v-model.number="ruleForm.enname_one" style="width:300px;height:40px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" style="width:80px;height:35px;margin-left:70px;">提交</el-button>
                <el-button @click="resetForm('ruleForm')" style="width:80px;height:35px;">重置</el-button>
            </el-form-item>
        </el-form>
  </div>

</template>

<script>
    export default {
        data() {

            var en = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    if (/^[A-Za-z]+$/.test(this.ruleForm.enname_one)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }

                }
            };
            

            return {
                typeData:{
                    label:"",
                    url:""
                },
                ruleForm: {
                   enname_one:"",
                   cnname_one:""
                },
                sendForm:{
                    oldenname_one:""
                },
                rules2: {
                    cn: [{
                        validator: "",
                        trigger: 'blur'
                    }],
                    en: [{
                        validator: en,
                        trigger: 'blur'
                    }]
                }
            };
        },
        created(){
          

            if(this.$route.params.type=="one"){
                this.typeData.label="一级类名";
                this.typeData.url="/api/back_class/amend_class_one";
                this.ruleForm.enname_one=this.$route.params.data.onedata.enname;
                this.ruleForm.cnname_one=this.$route.params.data.onedata.cnname;
                this.sendForm.oldenname_one=this.$route.params.data.onedata.enname;
            }else{
                this.typeData.label="二级类名";
                this.typeData.url="/api/back_class/amend_class_two";
                this.ruleForm.enname_one=this.$route.params.data.enname;
                this.ruleForm.cnname_one =this.$route.params.data.cnname;
                this.sendForm.oldenname_two=this.$route.params.data.enname;
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var sendData={}
                        if(this.$route.params.type=="one"){
                            sendData=this.ruleForm;
                        }else{
                            sendData.enname_two=this.ruleForm.enname_one;
                            sendData.cnname_two=this.ruleForm.cnname_one;
                        }
                        Object.assign(this.sendForm,sendData)
                        var _this=this;
                        this.axios.post(this.typeData.url,this.sendForm).then(function(data){
                            if(data.data.code=="1052" || data.data.code=="1062"){
                                _this.$message({
                                   message: data.data.msg,
                                   type: 'success'
                                })
                                
                            }else{
                                _this.$message({
                                   message: data.data.msg,
                                   type: 'error'
                                })
                            }
                         
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
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
    .class_one{
         color: #000;
    }
    h3{
        font-size: 20px;
        font-weight: normal;
        margin-left: 10px;
        line-height: 30px;

    }
</style>