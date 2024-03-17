
<template>
    <el-dialog @close="cancel" class="login-dialog" :show-close="false" v-model="is_open" title="登陆" width="360" center>
      <el-form :model="form">
        <el-form-item label="用户名：" :label-width="formLabelWidth">
          <el-input @input="chang_name" v-model="form.name" autocomplete="off" />
          <span v-if="form_name" style="color: #e02e24">{{'请输入您的用户名'}}</span>
        </el-form-item>
        <el-form-item label="密码：" :label-width="formLabelWidth">
          <el-input @input="chang_password" type="password" show-password v-model="form.password" autocomplete="off" />
          <span v-if="form_password" style="color: #e02e24">{{'请输入您的用户密码'}}</span>
        </el-form-item>
        <span v-if="message_error" style="margin-left: 100px; color: #e02e24">{{message_error}}</span>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel">{{'取消'}}</el-button>
        <el-button type="primary" @click="submit">{{'确认'}}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from "vue"
import { login_user_info } from '../api/mock'
import { FormInstance, FormRules, ElMessage } from 'element-plus'

  const is_open = ref(true)
  const formLabelWidth = ref('100')
    const form = reactive({
      name: '',
      password: ''
    })
    const form_name = ref(false)
    const form_password = ref(false)
    const message_error = ref('')
    const props = defineProps({
      close_login_modal: {
        type: Function,
        default: () => {}
      }
    })
    // 关闭弹窗
    const cancel = () => {
      console.error('取消');
      props.close_login_modal()
    }
    const submit = () => {
      if (!form.name) {
        // 用户名为空
        form_name.value = true
      }
      if (!form.password) {
        // 密码为空
        form_password.value = true
        return
      }
      console.error(login_user_info);
      if (form.name != login_user_info.user_info_obj.admin.user) {
        message_error.value = ('用户名不存在，请输入正确用户名')
        return
      }
      if (form.password != login_user_info.user_info_obj.admin.passWord) {
        message_error.value = ('用户密码错误，请输入正确密码')
        return
      }
      props.close_login_modal()
      message_error.value = ''

    }
    // 用户名
    const chang_name = (value) => {
      if (value && form_name.value) {
        form_name.value = false
      }
      form.name = value
    }
    // 用户名密码
    const chang_password = (value) => {
      if (value && form_password.value) {
        form_password.value = false
      }
      form.password = value
    }
</script>

<style lang="scss" scoped>
  .el-dialog__headerbtn {
    display: none;
  }
  .from-name {
    color: #e02e24;
  }
</style>