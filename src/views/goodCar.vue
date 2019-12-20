<template>
    <div class="goodCar">
        <div class="address">
            <div>
                <i class="iconfont">&#xe653;</i>
                <span>北京市昌平区天通苑北街道</span>
            </div>
            <span>编辑</span>
        </div>
        <ul class="carList">
            <li>
                <div class="checkBut">
                    <checkBox :check="false"></checkBox>
                </div>
                <shopInfo>
                    <div class="count">
                        <div class="add">+</div>
                        <div class="showCount">1</div>
                        <div class="reduce">-</div>
                    </div>
                    <template v-slot:footer>
                        <ul class="addOrGiftList">
                            <li>
                                <div class="top">
                                    <img src="http://m.flohy.com/Uploads/Images/20180607/5b1914dda9c2e.jpg" alt="">
                                    <div class="sendGuide">礼物</div>
                                </div>
                                <div class="bottom">
                                    <div class="name">巴洛克花瓶x1</div>
                                    <div class="price">￥1</div>
                                </div>
                            </li>
                        </ul>
                    </template>
                </shopInfo>
            </li>
        </ul>
        <div class="carHandel">
            <div class="allChecked">
                <checkBox @click.native="allcheck" :check="allchecked"></checkBox>
                <span>全选</span>
            </div>
            <div class="handel">
                <span>合计：8604</span>
                <div>去结算(3)</div>
            </div>
        </div>
    </div>
</template>

<script>
    import shopInfo from '@/components/shopInfo'
    import checkBox from '@/components/checkBox'
    export default {
        components:{
            shopInfo,checkBox
        },
        data(){
            return {
                allchecked:false
            }
        },
        methods:{
            allcheck(){
                this.allchecked = !this.allchecked
            }
        }
    }
</script>

<style lang="scss">
    .goodCar{
        height:calc(100vh-2.5rem);
    }
    .address{
        height:2.25rem;
        padding: 0 0.75rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
        font-size: 0.7rem;
        >div{
            color: #999;
            span{
                margin-left: 1rem;
            }
        }
        >span{
            color: #333;
        }
    }
    .checkBut{
        width:30px;
        >div{
            height:5rem;
            display: flex;align-items: center;
            justify-content: center;
        }
    }
    .mint-checkbox-input:checked + .mint-checkbox-core {
        background-color: $theme-color;
        border-color: $theme-color;
    }
    .carList{
        >li{
            width:100vw;
            overflow: hidden;
            display: flex;
            border-bottom: 0.5rem solid #eee;
            .shopInfo{
                flex: 1;
                .count{
                    width:3.5rem;
                    height:1rem;
                    display: flex;
                    align-items: center;
                    .add,.reduce{
                        font-size: 0.6rem;
                        line-height: 1rem;
                        background: #eee;
                        text-align: center;
                        width: 1rem;
                        height:1rem;
                        border-radius: 2px;
                    }
                    .showCount{
                        font-size: 0.6rem;
                        flex: 1;
                        text-align: center;
                    }
                }
            }
            .addOrGiftList{
                width:100%;
                display: flex;
                li{
                    box-shadow: 0 0 2px #999;
                    margin-right: 1rem;
                   .top{
                       width: 3.75rem;
                       height:3.75rem;
                       border-radius: 10px;
                       position: relative;
                       img{
                           width: 3.75rem;
                           height:3.75rem;
                           border-radius: 10px;
                       }
                       >div{
                           color: #fff;
                           font-size: 0.5rem;
                           width:1.25rem;
                           height:0.75rem;
                           position: absolute;
                           bottom: 0;
                           right:0;
                           border-top-left-radius: 5px;
                           border-bottom-right-radius: 5px;
                       }
                       .sendGuide{
                            background: linear-gradient(to left,#ec4158,#ec1b3d);
                       }
                       .addGuide{
                           background: linear-gradient(to left,#ff8e20,#ff6326);
                       }
                   }
                    .bottom{
                        text-align: center;
                        padding:0.2rem;
                        .name{
                            font-size: 0.6rem;
                        }
                        .price{
                            font-size: 0.6rem;
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
    }
    .carHandel{
        width:100vw;
        font-size: 0.7rem;
        height:2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.2rem 0.75rem;
        position: fixed;
        bottom:2.5rem;
        border-top:1px solid #eee;
        .allChecked{
            width:3rem;
            display: flex;
            align-items: center;
            .checkBox{
                width: 20px;
            }
            >span:last-child{
                display: inline-block;
            }
        }
        .handel{
            flex: 1;
            height:100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            span{
                color: $theme-color;
            }
            div{
                margin-left: 10px;
                height:100%;
                width:5rem;
                color: #fff;
                border-radius: 20px;
                background: linear-gradient(to left,#ec4158,#ec1c3d);
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>
