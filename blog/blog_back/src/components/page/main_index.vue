<template>
     <div class="main-index">
        <h2>欢迎来到后台管理系统</h2>   
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeNames: ['1']
            };
        }
    }
</script>
<style scoped>
    *{
        margin: 0 auto;
        padding: 0;
        font-family: "微软雅黑"
    }
    h2{
        font-size: 20px;
        color: #000;
        text-align: center;
        line-height: 100px;
    }
</style>