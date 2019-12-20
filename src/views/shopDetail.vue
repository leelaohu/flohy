<template>
    <div class="shopDetail">
        <div class="content">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <img src="http://m.flohy.com/Uploads/Slide/20190117/5c403425e321a.jpg" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="http://m.flohy.com/Uploads/Slide/20190117/5c403425e321a.jpg" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="shopInfo">
                <div class="name">轻奢系列DIY包月鲜花，新鲜，新味，新感受||3-5钟8-12枝花材，一期一会</div>
                <div class="summary">你的生活，我来形容，那就是轻奢</div>
                <div class="spec">(3-5种，8-12枝优选花材)</div>
                <div class="price"><span>￥</span>168-2016</div>
            </div>
            <img src="../assets/feature.png" alt="">
            <div class="content" v-html="content">

            </div>
        </div>
        <div class="shopHandel" v-show="!isShopBoxShow">
            <div class="toOther">
                <div>
                    <i class="iconfont">&#xe654;</i>
                    <span>首页</span>
                </div>
                <div>
                    <i class="iconfont">&#xe655;</i>
                    <span>购物车</span>
                </div>
            </div>
            <div class="handelGoods">
                <div>加入购物车</div>
                <div @click="toBuy">立即购买</div>
            </div>
        </div>
        <transition name="slide">
            <div v-show="isShopBoxShow" class="shopBox">
                <i class="close iconfont" @click="close">&#xe612;</i>
                <div class="goodInfo">
                    <img src="../assets/flower.png" alt="">
                    <div>
                        <span class="price"><span>￥</span>133-2999</span>
                        <div>请选择规格:</div>
                    </div>
                </div>
                <div class="address">
                    <indexTitle title="配送区域"></indexTitle>
                    <div>
                        <span>请选择收花区域</span>
                        <i class="iconfont">&#xe600;</i>
                    </div>
                </div>
                <div class="spec">
                    <indexTitle title="规格"></indexTitle>
                    <ul class="specList">
                        <li class="on">11111</li>
                        <li>11111</li>
                        <li>11111</li>
                        <li>11111</li>
                        <li>11111</li>
                        <li>11111</li>
                    </ul>
                </div>
                <indexTitle title="优惠加购"></indexTitle>
                <div class="otherShop">
                    <ul class="otherList">
                        <li>
                            <div>
                                <img src="../assets/flower.png" alt="">
                                <div class="sendGuide">赠送</div>
                            </div>
                            <div>
                                <div class="name">巴洛克花瓶</div>
                                <div class="price sendGood">￥9.9</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="../assets/flower.png" alt="">
                                <div class="addGuide">赠送</div>
                            </div>
                            <div>
                                <div class="name">巴洛克花瓶</div>
                                <div class="price">￥9.9</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="../assets/flower.png" alt="">
                                <div class="sendGuide">赠送</div>
                            </div>
                            <div>
                                <div class="name">巴洛克花瓶</div>
                                <div class="price sendGood">￥9.9</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img src="../assets/flower.png" alt="">
                                <div class="addGuide">赠送</div>
                            </div>
                            <div>
                                <div class="name">巴洛克花瓶</div>
                                <div class="price">￥9.9</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="buy" @click="$router.push('/confirmOrder')">确定</div>
            </div>
        </transition>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import indexTitle from '@/components/indexTitle'
    import util from '@/until/index'

    export default {
        components: {
            swiper, swiperSlide, indexTitle
        },
        data() {
            return {
                swiperOption: {
                    autoplay: {
                        delay: 1000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    },
                    loop: true,
                    speed: 300,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                content: '',
                isShopBoxShow: false
            }
        },
        mounted() {
            var scroll = new BScroll('.shopDetail', {
                scrollY: true,
                click: true
            })
            this.$axios({
                method: 'get',
                url: '/flohy/book/meal1',
            }).then((res) => {          //这里使用了ES6的语法
                this.content = util.transText(res.data.content)
            }).catch((err) => {
                console.log(err)       //请求失败返回的数据
            })


        },
        methods: {
            toBuy() {
                this.isShopBoxShow = true
                this.$store.commit('openMark')
            },
            close(){
                this.isShopBoxShow = false
                this.$store.commit('closeMark')
            }
        },
        deactivated(){
            this.$store.commit('closeMark')
        }
    }
</script>

<style lang="scss">
    .shopDetail {
        width: 100vw;
        height: calc(100vh - 2.5rem);
        .swiper-container {
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
    .shopDetail>.content img {
        width: 100%;
    }
    .mint-tabbar {
        display: none;
    }
    .shopDetail .swiper-pagination-bullet-active {
        background: #fff;
    }
    .shopDetail .shopInfo {
        padding: 0.75rem;
        .name {
            font-size: 0.8rem;
            font-weight: bold;
            line-height: 1rem;
        }
        .summary {
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 15px;
            display: inline-block;
            color: #fff;
            padding: 0.5rem;
            font-size: 0.6rem;
            background: #f2525a;
            margin: 10px 0;
        }
        .spec {
            font-size: 0.6rem;
            color: #999;
        }
        .price {
            margin-top: 0.75rem;
            font-size: 0.9rem;
            color: #f62d3b;
            font-weight: bold;
        }
    }
    .shopHandel {
        width: 100%;
        padding: 0 0.75rem;
        display: flex;
        align-items: center;
        height: 2.5rem;
        position: fixed;
        background: #fff;
        border-top: 1px solid #eee;
        z-index: 998;
        bottom: 0;
        .toOther {
            width: 4rem;
            display: flex;
            justify-content: space-between;
            div {
                height: 1.5rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                i {
                    font-size: 0.7rem;
                }
                span {
                    color: #999;
                    font-size: 0.6rem;
                }
            }
        }
        .handelGoods {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            font-size: 0.8rem;
            div {
                width: 6rem;
                line-height: 2rem;
                text-align: center;
                color: #fff;
                font-size: 0.8rem;
                height: 2rem;
                &:first-child {
                    background: #ff9299;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;
                }
                &:last-child {
                    background: #f62d3b;
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;
                }
            }
        }
    }
    .shopBox {
        transition:0.5s;
        height: 23rem;
        padding: 0.75rem 0;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 100vw;
        background: #fff;
        position: fixed;
        bottom: 0;
        z-index: 997;
        overflow: auto;
        .close {
            font-size: 1rem;
            color: #999;
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;
        }
        .indexTitle {
            .title {
                font-size: 0.7rem;
            }
        }
        .goodInfo {
            padding: 0 0.75rem;
            display: flex;
            align-items: flex-end;
            img {
                width: 4.5rem;
                height: 4.5rem;
                border-radius: 10px;
            }
            > div {
                padding-left: 0.5rem;
                padding-bottom: 0.75rem;
                > span {
                    font-size: 0.9rem;
                    font-weight: bold;
                    color: $theme-color;
                    span {
                        font-size: 0.6rem;
                    }
                }
                div {
                    color: #999;
                    font-size: 0.6rem;
                    line-height: 0.8rem;
                }
            }
        }
        .address {
            > div:last-child {
                width: 16.8rem;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
                font-size: 0.6rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid #eee;
                .iconfont {
                    font-size: 0.6rem;
                }
            }
        }
        .spec {
            .specList {
                padding: 0 0.75rem;
                display: flex;
                flex-wrap: wrap;
                li {
                    font-size: 0.7rem;
                    padding: 5px 10px;
                    background: #f5f5f5;
                    margin: 0.5rem;
                    border-radius: 5px;
                    &.on {
                        background: #fef4f5;
                        color: $theme-color;
                    }
                }
            }
        }
        .otherShop {
            width: 100vw;
            padding: 0 0.75rem;
            padding-bottom: 0.5rem;
            overflow: hidden;
            ul {
                display: flex;;
                li {
                    padding-right: 0.75rem;
                    > div:first-child {
                        width: 4.25rem;
                        height: 4.25rem;
                        border-radius: 5px;
                        position: relative;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                        > div {
                            color: #fff;
                            font-size: 0.5rem;
                            width: 1.25rem;
                            height: 0.75rem;
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            border-top-left-radius: 5px;
                            border-bottom-right-radius: 5px;
                        }
                        .sendGuide {
                            background: linear-gradient(to left, #ec4158, #ec1b3d);
                        }
                        .addGuide {
                            background: linear-gradient(to left, #ff8e20, #ff6326);
                        }
                    }
                    > div:last-child {
                        margin-top: 0.5rem;
                        text-align: center;
                        .name {
                            font-size: 0.7rem;
                        }
                        .price {
                            font-size: 0.6rem;
                            color: #999;
                        }
                        .sendGood {
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
        .buy {
            width:14.5rem;
            height:2rem;
            border-radius: 20px;
            color: #fff;
            font-size: 1rem;
            background: linear-gradient(to left,#ec4158, #ec1b3d);
            margin: 0 auto;
            text-align: center;
            line-height: 2rem;
        }
    }
    .slide-enter-active, .slide-leave-active {
        bottom:0;
    }
    .slide-enter, .slide-leave-to {
        bottom:-23rem;
    }
</style>
