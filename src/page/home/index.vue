<template>
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
    <!-- tabList -->
    <tab :activeName="active_name" :dataList="tablist" :onClick="change_tab">
        <div>{{'solt' + tab_pane}}</div>
    </tab>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Search, CameraFilled } from '@element-plus/icons-vue'
import { home_page } from '../../api/mock'
import tab from "../../components/tab.vue"

const tablist = ref([])
const active_name = ref('tuijian')
const tab_pane = ref('')
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
</script>

<style scoped lang="scss">
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