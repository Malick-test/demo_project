<template>
    <div class="header" @click="go_back">
        <img class="img" src="../img/common/back.png" alt="">
        <span class="text">返回</span>
        <div></div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
const go_back = () => {
    router.go(-1)
}
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        background-color: gray;
        .img {
            width: 24px;
            height: 24px;
        }
        .text {
            color: #ffffff;
        }
    }
</style>