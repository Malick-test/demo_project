<template>
    <el-tabs v-model="active_name" @tab-click="handleClick" class="tab-list">
        <el-tab-pane :label="item.name" :name="item.value" :key="index" v-for="(item, index) in dataList">
            <slot></slot>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    dataList: {
        type: Array,
        default: []
    },
    onClick: {
        type: Function,
        default: () => {}
    },
    activeName: {
        typr: String,
        default: ''
    }
})
const active_name = ref(props.activeName || '推荐')
const handleClick = (tab,event) => {
    props.onClick(tab, event)
}
</script>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #e02e24;
  font-size: 32px;
  font-weight: 600;
}
</style>