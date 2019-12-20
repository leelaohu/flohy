<template>
    <div class="mine">
        <div class="user">
            <img class="headImg" src="https://p1.ssl.qhimg.com/dr/270_500_/t01edc43cb9711c05ed.jpg?size=2800x1867"
                 alt="">
            <div class="userName">勒布朗·詹姆斯</div>
        </div>
        <div class="order">
            <div class="title">
                <span>我的订单</span>
                <span>全部订单 <i class="iconfont">&#xe600;</i></span>
            </div>
            <ul class="orderStatus">
                <li>
                    <i class="iconfont">&#xe641;</i>
                    <div>待付款</div>
                </li>
                <li>
                    <i class="iconfont">&#xe645;</i>
                    <div>服务中</div>
                </li>
                <li>
                    <i class="iconfont">&#xe64c;</i>
                    <div>收花日历</div>
                </li>
                <li>
                    <i class="iconfont">&#xe650;</i>
                    <div>已完成</div>
                </li>
            </ul>
        </div>
        <div class="myApp">
            <div class="title">我的账户必备</div>
            <ul class="appList">
                <li>
                    <i class="iconfont">&#xe648;</i>
                    <div>礼物订单</div>
                </li>
                <li>
                    <i class="iconfont">&#xe652;</i>
                    <div>我的优惠券</div>
                </li>
                <li>
                    <i class="iconfont">&#xe64f;</i>
                    <div>我的兑换码</div>
                </li>
                <li>
                    <i class="iconfont">&#xe650;</i>
                    <div>我的手机</div>
                </li>
                <li>
                    <i class="iconfont">&#xe646;</i>
                    <div>兑换专区</div>
                </li>
                <li>
                    <i class="iconfont">&#xe647;;</i>
                    <div>花粉赠品</div>
                </li>
                <li>
                    <i class="iconfont">&#xe642;</i>
                    <div>常见问题</div>
                </li>
                <li>
                    <i class="iconfont">&#xe64e;</i>
                    <div>我的蜂巢</div>
                </li>
                <li>
                    <i class="iconfont">&#xe64a;</i>
                    <div>我的二维码</div>
                </li>
                <li>
                    <i class="iconfont">&#xe644;</i>
                    <div>企业信息</div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .mine {
        background: #f4f6f8;
        height: calc(100vh - 2.5rem);
    }

    .user {
        width: 100%;
        height: 7.5rem;
        background: $theme-color;
        display: flex;
        background: $theme-color;
        border-bottom-left-radius: 12%;
        border-bottom-right-radius: 12%;
        padding-bottom: 1.75rem;
        align-items: center;
        img {
            width: 3rem;
            height: 3rem;
            margin: 0 1rem;
            border-radius: 50%;
        }
        .userName {
            color: #fff;
        }
    }

    .order {
        width: 17.5rem;
        /*height:7.5rem;*/
        background: #fff;
        margin: 0 auto;
        margin-top: -1.75rem;
        padding: 0.75rem;
        border-radius: 10px;
        > .title {
            width: 100%;
            display: flex;
            border-bottom: 1px solid #eee;
            padding-bottom: 0.5rem;
            justify-content: space-between;
            span:first-child {
                color: #333;
                font-size: 0.7rem;
                font-weight: bold;
            }
            span:last-child {
                color: #999;
                font-size: 0.6rem;
                display: flex;
                align-items: center;
            }
        }
        .orderStatus {
            display: flex;
            justify-content: space-between;
            padding: 1rem 0;
            li {
                width: 25%;
                text-align: center;
                height: 1.75rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                i {
                }
                div {
                    font-size: 0.6rem;

                }
            }
        }
    }

    .myApp {
        width: 17.5rem;
        background: #fff;
        margin: 0 auto;
        padding: 0.75rem;
        border-radius: 10px;
        margin-top: 0.75rem;
        > .title {
            color: #333;
            font-size: 0.7rem;
            font-weight: bold;
            border-bottom: 1px solid #eee;
            padding-bottom: 0.5rem;
        }
        .appList {
            display: flex;
            flex-wrap: wrap;
            padding-bottom: 1rem;
            li {
                width: 25%;
                margin-top: 1rem;
                text-align: center;
                height:2rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                i{
                    font-size: 1rem;
                    color: $theme-color;
                }
                div{
                    font-size: 12px;
                }
            }
        }
    }
</style>
