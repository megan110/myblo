<template>
    <div class="class_one">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <h3 style="margin-top:10px;">一级类名设置</h3>
        <el-form-item label="中文类名" prop="cn" style="margin:20px;">
            <el-input type="text" v-model="ruleForm2.cnname_one" auto-complete="off" style="width:300px;height:40px;"></el-input>
        </el-form-item>
        <el-form-item label="英文类名" prop="en" style="margin:20px;">
            <el-input v-model.number="ruleForm2.enname_one" style="width:300px;height:40px;"></el-input>
        </el-form-item>
        <h3>二级类名设置</h3>
        <el-form-item label="中文类名" prop="cn" style="margin:20px;">
            <el-input type="text" v-model="ruleForm2.cnname_two" auto-complete="off" style="width:300px;height:40px;"></el-input>
        </el-form-item>
        <el-form-item label="英文类名" prop="entwo" style="margin:20px;">
            <el-input v-model.number="ruleForm2.enname_two" style="width:300px;height:40px;"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" style="width:80px;height:35px;margin-left:70px;">提交</el-button>
            <el-button @click="resetForm('ruleForm2')" style="width:80px;height:35px;">重置</el-button>
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
                    console.log(this.ruleForm2.enname_one)
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_one)) {
                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }

                }
            };
            var entwo = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入英文标识'));
                } else {
                    console.log(this.ruleForm2.enname_two)
                    if (/^[A-Za-z]+$/.test(this.ruleForm2.enname_two)) {

                        callback();
                    } else {
                        callback(new Error('请输入英文'));
                    }

                }
            };

            return {
                ruleForm2: {
                    cnname_one: "",
                    enname_one: "",
                    cnname_two: "",
                    enname_two: "",
                },
                rules2: {
                    cn: [{
                        validator: "",
                        trigger: 'blur'
                    }],
                    en: [{
                        validator: en,
                        trigger: 'blur'
                    }],
                    entwo: [{
                        validator: entwo,
                        trigger: 'blur'
                    }]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        var _this=this;
                        this.axios.post("/api/back_class/add_class_one",this.ruleForm2).then(function(data){
                            console.log(data);
                            if(data.data.code=="1014"){
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