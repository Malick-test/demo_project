<template>
    <div class="footer-page">
        <div class="item" v-for="(item,index) in tabList" :key="index">
            <el-icon>
                <component :is="item.icon"/>
            </el-icon>
           <span class="item-name">{{item.name}}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, compile } from "vue"
import { HomeFilled, Star, Finished, Setting, Avatar, InfoFilled, Tools } from '@element-plus/icons-vue'
console.error('xuanran');
const tabList = ref([
    {
        name: '首页',
        value: 'home',
        icon: HomeFilled
    },
    {
        name: '热门',
        value: 'hot',
        icon: Star
    },
    {
        name: '分类',
        value: 'classify',
        icon: Finished
    },
    {
        name: '个人中心',
        value: 'set',
        icon: Tools
    },
])
</script>

<style lang="scss" scoped>
    .footer-page {
        background-color: #ffffff;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .item {
            display: grid;
            justify-content: center;
            align-items: center;
            .item-name {
                font-size: 0.5em;
            }
            .el-icon {
                width: 34px;
                height: 34px;
                margin: auto;
            }
        }
    }
</style>