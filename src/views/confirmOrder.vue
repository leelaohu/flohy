<template>
    <div class="confirmOrder">
        <div class="content">
            <div class="sendInfo">
                <div class="address">
                    <div class="default">默认</div>
                    <div class="addressText">北京市 北京市北京市北京市北京市</div>
                </div>
                <div class="bigAddress sf bold">
                    <div>
                        <span>北京</span>
                        <span> 北京北京北京北京北京</span>
                    </div>
                    <i class="iconfont sf">&#xe600;</i>
                </div>
                <div class="userInfo">
                    <div>小明</div>
                    <div>13153859963</div>
                </div>
            </div>
            <div class="sendRuler">
                <div class="date title">间隔日期</div>
                <ul class="dateList">
                    <li class="on">一周一次</li>
                    <li>两周一次</li>
                </ul>
                <div class="day title">送达时间</div>
                <ul class="dayList">
                    <li class="on">
                        <span>周一送达</span>
                        <span>首月11.25</span>
                    </li>
                    <li>
                        <span>周一送达</span>
                        <span>首月11.25</span>
                    </li>
                </ul>
            </div>
            <div class="FlowerModel">
                <div class="model title">用途</div>
                <ul class="modelList">
                    <li class="on">家居自用</li>
                    <li>办公司自用</li>
                    <li>礼品</li>
                </ul>
            </div>
            <ul class="goodsList">
                <orderShopItem></orderShopItem>
                <orderShopItem></orderShopItem>
                <li class="goodsItem gift">
                    <div>
                        <span class="">祝福卡(5元/张)</span>
                        <div class="checkBoxWrap">
                            <input type="checkbox">
                            <div class=""></div>
                        </div>
                    </div>
                    <div v-show="false">
                        <textarea cols="30" rows="8" maxlength="150"></textarea>
                    </div>
                </li>
            </ul>
            <div class="payMethods" @click="choosePayMethods">
                <div>支付方式</div>
                <i class="iconfont">&#xe600;</i>
            </div>
            <div class="changeTicket" @click="chooseTickets">
                <div>选择卡券</div>
                <i class="iconfont">&#xe600;</i>
            </div>
        </div>
        <bottomInfo>
            <template v-slot:left>
                <div class="info">
                    <div class="relayPay sf">
                        实付款：<span>￥</span><span class="mf">2020</span>
                    </div>
                    <div class="sendPay">
                        运费: <span>20</span>
                    </div>
                </div>
            </template>
            <template v-slot:right>
                <div class="goPay">
                    去支付
                </div>
            </template>
        </bottomInfo>
        <transition name="fade">
            <actionSheet v-show="isActionSheet" @close="close" @getPayId="getPayId"></actionSheet>
        </transition>
    </div>
</template>

<script>
    import bottomInfo from '@/components/bottomInfo'
    import actionSheet from '@/components/actionSheet';
    import orderShopItem from '@/components/orderShopItem'

    export default {
        components: {
            bottomInfo, actionSheet, orderShopItem
        },
        data() {
            return {
                isActionSheet: false,
                show: true
            }
        },
        created() {
            document.title = '确认订单'
        },
        mounted() {

        },
        methods: {
            close() {
                this.isActionSheet = false
            },
            getPayId(id) {
                console.log(id);
            },
            choosePayMethods() {
                this.isActionSheet = true
            },
            chooseTickets() {
                this.isActionSheet = true
            }
        }
    }
</script>
<style lang="scss">
    .confirmOrder {
        height: calc(100vh - 2.5rem);
        padding: 0.75rem;
        background: #f5f5f5;
        overflow: auto;
        .title {
            font-size: 0.7rem;
            font-weight: bold;
        }
        > div:not(.bottomInfo) {
            > div, .goodsList {
                margin-top: 0.75rem;
                background: #fff;
                padding: 0.5rem;
            }
        }
        > div > div.sendInfo {
            font-size: 0.7rem;
            margin-top: 0;
            > div {
                display: flex;
                align-items: center;
                > div:first-child {
                    margin-right: 10px;
                }
            }
            .address {
                .default {
                    background: #f42937;
                    padding: 3px;
                    color: #fff;
                    border-radius: 5px;
                    font-size: 0.6rem;
                }
                .addressText {
                    font-size: 0.6rem;
                }
            }
            .bigAddress {
                margin: 0.5rem 0;
                justify-content: space-between;
                i {
                    color: #999;
                }
            }
            .userInfo {
                color: #999;
            }
        }
        .sendRuler {
            .dateList {
                li {
                    transition: .5s;
                    font-size: 0.6rem;
                    padding: 5px 10px;
                    display: inline-block;
                    margin: 10px 10px 10px 0;
                    border-radius: 20px;
                    background: #f5f5f5;
                    &.on {
                        background: #fef4f5;
                    }
                }
            }
            .dayList {
                display: flex;
                li {
                    border-radius: 5px;
                    padding: 5px 10px;
                    width: 4.5rem;
                    margin: 10px 10px 10px 0;
                    font-size: 0.6rem;
                    background: #f5f5f5;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    &.on {
                        background: #fef4f5;
                    }
                    span:last-child {
                        font-size: 0.5rem;
                        margin-top: 5px;
                    }
                }
            }
        }
        .FlowerModel {
            .modelList {
                display: flex;
                li {
                    transition: .5s;
                    font-size: 0.6rem;
                    padding: 5px 10px;
                    display: inline-block;
                    margin: 10px 10px 0 0;
                    border-radius: 5px;
                    background: #f5f5f5;
                    &.on {
                        background: #fef4f5;
                    }
                }
            }

        }
        .goodsList {
            padding: 0.5rem;

            .gift {
                margin-top: 10px;
                font-size: 0.6rem;
                > div:first-child {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .checkBoxWrap {
                        width: 2.4rem;
                        height: 1.2rem;
                        background: #eee;
                        transition: .5s;
                        position: relative;
                        border-radius: 20px;
                        input {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            z-index: 99;
                            opacity: 0;
                        }
                        input + div {
                            position: relative;
                            width: 99%;
                            height: 99%;
                            background: #eee;
                            transition: 1s;
                            border-radius: 20px;
                        }
                        input + div:before {
                            content: '';
                            position: absolute;
                            width: 50%;
                            height: 93%;
                            background: #fff;
                            border: 1px solid #ccc;
                            border-radius: 20px;
                            z-index: 98;
                        }
                        input + div:after {
                            content: '';
                            position: absolute;
                            left: 50%;
                            width: 50%;
                            height: 100%;
                            background: #eee;
                            border-radius: 20px;
                        }
                        input:checked + div:before {
                            content: '';
                            position: absolute;
                            left: 50%;
                            width: 50%;
                            height: 93%;
                            transition: 1s ease-in;
                            background: #fff;
                            border-radius: 20px;
                        }
                        input:checked + div:after {
                            width: 100%;
                            left: 0;
                            background: $theme-color;
                            border-radius: 20px;
                        }
                    }
                }
                > div:last-child {
                    textarea {
                        width: 100%;
                        height: 100%;
                        margin-top: 10px;
                        padding: 0.5rem;
                        outline: none;
                    }
                }
            }
        }
        .payMethods {
            display: flex;
            justify-content: space-between;
            font-size: 0.6rem;
            .iconfont {
                font-size: 0.6rem;
            }
        }
        .changeTicket {
            display: flex;
            justify-content: space-between;
            font-size: 0.6rem;
            .iconfont {
                font-size: 0.6rem;
            }
        }
    }

    .confirmOrder {
        .bottomInfo {
            bottom: 0;
            left: 0;
            .info {
                height: 100%;
                padding: 2px 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .relayPay {
                    span {
                        color: $theme-color;
                    }
                }
                .sendPay {
                    color: #999;
                    font-size: 0.6rem;
                }
            }
            .goPay {
                width: 6rem;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                border-radius: 20px;
                @include button;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        bottom: 0;

    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        bottom: -100%;
    }

    .shop {
        width: 100vw;
        height: 23rem;
        position: fixed;
        bottom: 0;
        transition: all 1s;
        background: red;
        z-index: 1000;
        left: 0;
    }

</style>
