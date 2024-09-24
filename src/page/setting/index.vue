<template>
    <div class="setting-page">
        <div class="header">
            <div class="left">
                <!-- <img :src="`../../img/common/${login.is_login ? 'login' : 'unlogin'}.png`" alt=""> -->
                <img v-if="login.is_login" src="../../img/setting/user-img.png" alt="">
                <img v-else src="../../img/common/unlogin.png" alt="">
                <div class="login-status">{{login.is_login ? '已登陆' : '未登陆'}}</div>
            </div>
            <div class="right">
                <img src="../../img/setting/setting.png" alt="">
                <img src="../../img/setting/information.png" alt="">
            </div>
        </div>
        <div class="body">
            <div class="tab-1">
                <div>
                    <img src="../../img/setting/play.png" alt="">
                    <span>待付款</span>
                </div>
                <div>
                    <img src="../../img/setting/receipt.png" alt="">
                    <span>待收货/使用</span>
                </div>
                <div>
                    <img src="../../img/setting/be-evaluated.png" alt="">
                    <span>待评价</span>
                </div>
                <div>
                    <img src="../../img/setting/return-exchange.png" alt="">
                    <span>退换/售后</span>
                </div>
                <div>
                    <img src="../../img/setting/ordered.png" alt="">
                    <span>我的订单</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex"

const { login, useFooter } = useStore().state

console.error('store', login);
</script>

<style lang="scss" scoped>
    .setting-page {
        background-color: #ffffff;
        height: calc(100vh - 66px);
    }
    .header {
        background-color: #ffffff;
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 36px;
            height: 36px;
        }
        .login-status {
            color: #000000;
            font-size: 18px;
        }
        .left {
            display: flex;
            align-items: center;
            img {
                margin-left: 5px;
            }
        }
        .right {
            img {
                margin-right: 5px;
            }
        }
    }
    .body {
        .tab-1 {
            background-color: #ffffff;
            box-shadow: 0 0 3px 3px #cccccc;
            margin: 10px 5px;
            padding: 2px 5px;
            border-radius: 10px;
            display: flex;
            font-size: 16px;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
            img {
                width: 30px;
                height: 30px;
                display: block;
                margin: 5px auto;
            }
        }
    }
</style>