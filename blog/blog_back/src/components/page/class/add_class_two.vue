<template>
    <div class="class_one">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        
        <h3 style="margin:30px 0 20px 100px;">增加二级分类</h3>
        <el-form-item label="中文类名" prop="" style="margin:20px;">
            <el-select v-model="ruleForm2.oneId" placeholder="请选择" style="margin-left:100px;">
                <el-option
                    v-for="item in classOnelist"
                    :key="item.id"
                    :label="item.cnname"
                    :value="item.id">
                </el-option>
            </el-select>
        </el-form-item>
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
                classOnelist:[],
                ruleForm2: {
                    oneId:"",
                    cnname_one: "",
                    enname_one: "",
                },
                rules2: {
                    cn: [{
                        validator: "",
                        trigger: 'blur'
                    }],
                    entwo: [{
                        validator: entwo,
                        trigger: 'blur'
                    }]
                }
            };
        },
        created(){
               var _this=this;
            this.axios.get("/api/back_class/select_one_class").then(function(data){
                console.log(data);
             
                if(data.data.code=="1021"){
                    _this.classOnelist=data.data.data;
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
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var _this=this;
                        this.axios.post("/api/back_class/add_two_class",this.ruleForm2).then(function(data){
                             if(data.data.code=="1032"){
                                _this.classOnelist=data.data.data;
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