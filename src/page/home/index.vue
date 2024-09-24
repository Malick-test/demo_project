<template>
    <!-- tabList -->
    <tab :activeName="active_name" :dataList="tablist" :onClick="change_tab">
        <div>{{'solt' + tab_pane}}</div>
    </tab>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Search,CameraFilled, UserFilled, Avatar } from '@element-plus/icons-vue'
import { home_page } from '../../api/mock'
import tab from "../../components/tab.vue"
import { useStore } from "vuex"
// tab的数据
const tablist = ref([])
// 选择的tab
const active_name = ref('tuijian')

const tab_pane = ref('')
const store = useStore()

onMounted(() => {
    // 初始化请求数据
    home_page_data()
})
// 获取tablist 数据
const home_page_data = () => {
    tablist.value = home_page.getHomePageData().data.tabs
     tab_pane.value = tablist.value[0].name
}
// 点击tab处理方法
const change_tab = (tab, event) => {
    tab_pane.value = tab.props.label
}


</script>

<style scoped lang="scss">
.el-header {
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-avatar--circle {
        margin-left: 0.2rem;
        width: 1.2rem;
    }
    .el-input {
        :deep(.el-input-group__append) {
            .el-button {
                display: flex;
            }
            .el-icon{
                font-size: 30px;
            }
        }
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