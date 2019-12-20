<template>
    <div class="actionSheet">
        <ul>
            <li>选择支付方式</li>
            <li class="item wxPay" payId="0" @click="changePay($event)">
                <div>
                    <i class="iconfont">&#xe628;</i>
                    <div>微信支付</div>
                </div>
                <i class="iconfont">&#xe659;</i>
            </li>
            <li  class="item bankPay" payId="1"  @click="changePay($event)">
                <div>
                    <i class="iconfont">&#xe629;</i>
                    <div>建行支付</div>
                </div>
                <i class="iconfont"></i>
            </li>
            <div class="close">
                <i class="iconfont" @click="close">&#xe612;</i>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        methods:{
            close(){
                this.$emit('close')
            },
            changePay(e){
                this.$emit('getPayId',e.currentTarget.getAttribute('payid'))
            }
        }
    }
</script>

<style lang="scss">
    .actionSheet{
        transition:.5s;
        width:100vw;
        padding: 0.75rem;
        background: #fff;
        position: fixed;
        bottom:0;
        left: 0;
        z-index:999;
        border-radius: 20px;}
    .actionSheet ul{
        .close{
            position: absolute;
            right: 0.75rem;
            top:0.75rem;
        }
        li{
            display: flex;
            height:2rem;
            align-items: center;
            justify-content: center;
            font-size: 0.7rem;
            div{
                display: flex;
            }
        }
        .item{
            display: flex;
            justify-content: space-between;
            >.iconfont{
                color: $theme-color;
            }
            &.wxPay>div{
                .iconfont{
                    margin-right: 10px;
                    color: #40BA49;
                }
            }
            &.bankPay>div{
                .iconfont{
                    margin-right: 10px;
                    color: #002694;
                }
            }
        }
    }
</style>
