<template>
    <div class="footer-page">
        <div class="item" v-for="(item,index) in tabList" :key="index" @click="tab_click(item)">
            <el-icon :class="{'active-icon': useFooter.active_tab == item.value}">
                <component :is="item.icon"/>
            </el-icon>
           <span class="item-name" :class="{'active': useFooter.active_tab == item.value}">{{item.name}}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, compile, reactive } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { HomeFilled, Star, Finished, Setting, Avatar, InfoFilled, Tools, UserFilled } from '@element-plus/icons-vue'
// console.error('xuanran', useRouter());
const router = useRouter()
const store = useStore()
const { useFooter } = store.state
const active_tab = ref('/')
const tabList = reactive([
    {
        name: '首页',
        value: '/',
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
        value: 'setting',
        icon: UserFilled
    },
])
const tab_click = (item) => {
    router.push(item.value)
    active_tab.value = item.value
    store.dispatch('useFooter/changetabAction', item.value)
    console.error('footer', useFooter);
}
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
            .active {
                color: #e02e24;
            }
            .el-icon {
                width: 34px;
                height: 34px;
                margin: auto;
            }
            .active-icon {
                color: #e02e24;
            }
        }
    }
</style>