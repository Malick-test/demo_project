<template>
    <el-container>
      <el-header>
         <!-- 头部搜索 -->
        <el-input
            v-model="input1"
            size="large"
            placeholder="输入搜索内容"
            :prefix-icon="Search"
        >
        <!-- 图片搜索 -->
            <template #append>
                <el-button :icon="CameraFilled" />
            </template>
        </el-input>
        <!-- <el-button @click="loginFun" type="primary" :icon="Avatar" /> -->
        <el-avatar @click="loginFun" :icon="UserFilled" />
      </el-header>
      <el-main>
        <!-- tabList -->
        <tab :activeName="active_name" :dataList="tablist" :onClick="change_tab">
            <div>{{'solt' + tab_pane}}</div>
        </tab>
      </el-main>
      <el-footer>
        
      </el-footer>
    </el-container>
   <loginDialog v-if='is_modal' :close_login_modal="close_login_modal"></loginDialog>
    
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Search,CameraFilled, UserFilled, Avatar } from '@element-plus/icons-vue'
import { home_page } from '../../api/mock'
import tab from "../../components/tab.vue"
import loginDialog from "../../components/login_dialog.vue"

const input1 = ref('')
const tablist = ref([])
const active_name = ref('tuijian')
const tab_pane = ref('')
const is_modal = ref(false)
onMounted(() => {
    home_page_data()
})
// 获取tablist 数据
const home_page_data = () => {
    tablist.value = home_page.getHomePageData().data.tabs
     console.error(tablist);
     tab_pane.value = tablist.value[0].name
}
// 点击tab处理方法
const change_tab = (tab, event) => {
    console.error('home', tab, event);
    tab_pane.value = tab.props.label
}
// 登陆事件
const loginFun = () => {
    // 打开登陆弹窗
    is_modal.value = true
}
// 关闭登陆弹窗
const close_login_modal = () => {
    is_modal.value = false
}
</script>

<style scoped lang="scss">
.el-header {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-avatar--circle {
        margin-left: 0.2rem;
        width: 1.2rem;
    }
}
.el-main {
    padding: 0;
}
    .title {
        background-color: brown;
        color: #fff;
    }
    .tab-list {
        :deep(.el-tabs__header) {
            .el-tabs__item.is-active {
                color: #e02e24;
            }
            .el-tabs__active-bar {
                background-color: #e02e24;
            }
        }
    }
</style>