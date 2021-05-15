<template>
<div class="login-container">
  <!-- 配置form表单验证
  1.给el-form组件绑定model为表单数据对象
  2.给需要验证的表单项el-form-Item绑定prop属性
  注意：prop属性需要指定表单对象中的数据名称
  3.通过el-form组件的rules属性配置验证规则 -->
<el-form class='login-form' ref="formaaa"  :model="user" :rules='formRules'>
  <el-form-item prop='mobile'>
    <el-input placeholder="请输入手机号" v-model="user.mobile"></el-input>
  </el-form-item>
  <el-form-item prop='code'>
    <el-input placeholder="请输入验证码" v-model="user.code"></el-input>
  </el-form-item>
    <el-form-item prop='agree'>
    <el-checkbox v-model="user.agree"/>我已同意协议
  </el-form-item>
  <el-form-item>
    <el-button class="loginBtn" type="primary" :loading="loginLoading" @click="onLogin">登录</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
import {login} from "@/api/user"
export default {
    name:'Login',
    components:{

    },
    props:{},
    data(){
      return {
        user: {
          mobile:'',
          code:'',
          agree:false//是否同意协议
        },
        checked:false,
        loginLoading:false,
        formRules:{
          mobile:[
            {
              required:true,message:'手机号不能为空',trigger:'blur'
            },
            // {
            //   min:3,max:5,message:'长度在3~5之间',trigger:'change'
            // }
          ],
          code:[
            {
              required:true,message:'验证码不能为空',trigger:'change'
            }
          ],
          agree:[
            {
              validator:(rule,value,callback)=>{
                if(value){
                  callback()
                }else{
                  callback(new Error('请同意用户协议'))
                }
              },
              trigger:'change'
            }
          ]
        }
      }
    },
    computed:{},
    watch:{},
    created(){},
    methods:{
      onLogin() {
        this.$refs.formaaa.validate(valid=>{
            if(!valid){
              return
            }
            this.login();
          })
      },
       
      login(){
         this.loginLoading=true;
         login(this.user).then(res=>{
          // console.log(res);
          this.$message({
            message: '恭喜你，这是一条成功消息',
            type: 'success'
          });
          this.$router.push('/home');
          // this.$router.push({
          //   name:'home'
          // })
          this.loginLoading=false;
          }
          ).catch(err=>{
            this.$message.error('错了哦，这是一条错误消息');
            this.loginLoading=false;
          })
      }
      
    }
}
</script>

<style>
.login-container{
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background:url("./login_bg.jpg") no-repeat;
  background-size:cover;
}
.login-form{
  background-color: #fff;
  padding:50px;
}
.loginBtn{
  width:100%;
}
</style>