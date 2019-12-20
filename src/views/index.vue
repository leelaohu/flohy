<template>
    <div class="home">
            <div class="content">
                <!--banner-->
                <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide>
                        <img src="http://m.flohy.com/Uploads/Slide/20190117/5c403425e321a.jpg" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
                <img class="feature" src="../assets/feature.png" alt="">
                <!--group-->
                <div class="groupWrap">
                    <indexTitle title="团购专区" :activePage="groupActive" :page="groupList.length"></indexTitle>
                    <div class="group">
                        <ul class="content">
                            <li class="groupItem sf">
                                <div>
                                    <div><i></i>01天08小时24分10秒</div>
                                    <div class="bold">豪华系列DIV包月鲜花</div>
                                    <div class="active sf">￥<span class="mf">128</span>/束</div>
                                </div>
                                <img src="../assets/goodItem.png" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <!--router-->
                <div class="routerArea">
                    <router-link to="/gift">
                        <img class="gift" src="../assets/gift.png" alt="">
                    </router-link>
                    <router-link to="/flowerClass">
                        <img class="flowerClass" src="../assets/flowerClass.png" alt="">
                    </router-link>
                    <router-link to="/protect">
                        <img class="protect" src="../assets/protect.png" alt="">
                    </router-link>
                    <router-link to="/flower">
                        <img class="flower" src="../assets/flower.png" alt="">
                    </router-link>
                    <router-link to="/around">
                        <img class="around" src="../assets/around.png" alt="">
                    </router-link>
                </div>
                <!--限时活动-->
                <div class="activeIn">
                    <indexTitle title="限时活动" :activePage="activeInActive" :page="activeInList.length"></indexTitle>
                    <swiper class="activeInList" :options="swiperOption1" ref="mySwiper1">
                        <!-- slides -->
                        <swiper-slide>
                            <img src="http://m.flohy.com/Uploads/Slide/20190115/5c3d70afe2c1a.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="http://m.flohy.com/Uploads/Slide/20190115/5c3d70afe2c1a.jpg" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="http://m.flohy.com/Uploads/Slide/20190115/5c3d70afe2c1a.jpg" alt="">
                        </swiper-slide>
                        <!-- Optional controls -->
                        <div class="swiper-pagination"  slot="pagination"></div>
                    </swiper>
                </div>
                <!--鲜花预订-->
                <div>
                    <indexTitle title="鲜花预订/包月"></indexTitle>
                    <goodList></goodList>
                </div>
                <!--护肤周边-->
                <div>
                    <indexTitle title="护肤周边"></indexTitle>
                    <goodList></goodList>
                </div>
                <!--花粉晒照-->
                <div>
                    <indexTitle title="花粉晒照"  :activePage="fansActive" :page="fansList.length"></indexTitle>
                    <div class="fans">
                        <ul class="picture">
                            <li>
                                <img src="https://m.flohy.com/Thumb/320x320/Images/20191127/5dde4a2ebb666.jpg" alt="">
                                <div class="summary">
                                    白天有光，夜晚有星，水中有鱼，天空有飞鸟 在这善变且繁华的世界，难得有你
                                </div>
                                <div class="about_user">
                                    <div class=""><img src="https://m.flohy.com/Thumb/320x320/Images/20181023/5bce956f20f93.jpg" alt=""></div>
                                    <div class="about_user_detail">
                                        <p>凉风</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://m.flohy.com/Thumb/320x320/Images/20191127/5dde4a2ebb666.jpg" alt="">
                                <div class="summary">
                                    白天有光，夜晚有星，水中有鱼，天空有飞鸟 在这善变且繁华的世界，难得有你
                                </div>
                                <div class="about_user">
                                    <div class=""><img src="/Thumb/320x320/Images/20181023/5bce956f20f93.jpg" alt=""></div>
                                    <div class="about_user_detail">
                                        <p>凉风</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src="https://m.flohy.com/Thumb/320x320/Images/20191127/5dde4a2ebb666.jpg" alt="">
                                <div class="summary">
                                    白天有光，夜晚有星，水中有鱼，天空有飞鸟 在这善变且繁华的世界，难得有你
                                </div>
                                <div class="about_user">
                                    <div class=""><img src="/Thumb/320x320/Images/20181023/5bce956f20f93.jpg" alt=""></div>
                                    <div class="about_user_detail">
                                        <p>凉风</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    import navBar from '@/components/navbar'
    import indexTitle from '@/components/indexTitle'
    import goodList from '@/components/goodList'
    var screenWidth = window.screen.width
    export default {
        components:{
            swiper, swiperSlide,indexTitle,goodList
        },
        data() {
            return {
                swiperOption: {
                    autoplay: {
                        delay: 1000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    },
                    loop:true,
                    speed:300,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                swiperOption1: {
                    on:{
                        transitionEnd: ()=>{
                            this.activeInActive = this.$refs.mySwiper1.swiper.activeIndex+1
                            console.log(this.activeInActive);
                        },
                    },
                },
                groupScroll:null,
                fanScroll:null,
                groupList:["/img/logo.82b9c7a5.png","/img/logo.82b9c7a5.png","/img/logo.82b9c7a5.png"],
                activeInList:[1,2,3],
                fansList:[1,2,3],
                groupActive:1,
                activeInActive:1,
                fansActive:1,
                scrollTop:0
            }
        },
        mounted(){
            document.title = '弗洛花园鲜花商城'
            this.groupScroll =  new BScroll('.group',{
                scrollX: true,
                click: true,
                probeType:3
            })
            this.groupScroll.on('scroll',position=>{
//                console.log(Math.floor(position.x / screenWidth);
                this.groupActive = (Math.abs(Math.floor(position.x/screenWidth))+1)>this.groupList.length?this.groupList.length:Math.abs(Math.floor(position.x/screenWidth))+1
            })
            this.fanSroll = new BScroll('.fans',{
                scrollX: true,
                click: true,
                probeType:3
            })
            var fansItemWidth = (document.querySelector('.fans .picture li').offsetWidth+10)
            var fansWidth = fansItemWidth*3
            document.querySelector('.fans .picture').style.width = fansWidth+15+'px'
            var distance = (fansWidth+15-screenWidth)/3
            this.fanSroll.on('scroll',(position)=>{
                this.fansActive = Math.floor(Math.abs(position.x.toFixed(0))/distance)+1>this.fansList.length?this.fansList.length:Math.floor(Math.abs(position.x.toFixed(0))/distance)+1
            })
            this.initBS()
        },

        methods:{
//            handleClick: function() {
//                Toast('提示信息');
//            },
            initBS(){
                let scroll = new BScroll('.home',{
                    scrollY: true,
                    click: true
                })
            }
        }
    }
</script>

<style>
    .home{
        height:calc(100vh - 2.5rem);
    }
    .mint-swipe-indicator.is-active{
        background: #ee4f63;
        opacity: 1;
    }
    .feature{
        width:100%;
        display: block;
    }
    .swiper-container{
        width:100vw;
    }
    .swiper-container img{
        width:100%;
        display: block;
    }
    .group{
        width:100vw;
    }
    .group ul{
        display: flex;
        width:300vw;
    }
    .group ul li {
        width: 100vw;
        height:5rem;
        display: flex;
        justify-content: space-between;
        padding:0 0.75rem;
    }
    .group ul li>div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.5rem 0;
    }
    .group ul li img{
        width: 5rem;
        height:5rem;
        border-radius: 10px;
    }
    .routerArea{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 1.2rem;
        padding: 0 0.75rem;
    }
    .routerArea .gift, .routerArea .flowerClass{
        width:8.55rem;
        height: 5rem;
    }
    .routerArea .flower,.routerArea .protect,.routerArea .around{
        height:4.5rem;
        margin-top: 0.2rem;
    }
    .activeIn .swiper-slide{
        padding:  0 0.75rem;
    }
    .activeInList{
        height:100px;
    }
    .activeIn li img{
        width:100%;
    }
    .fans{
        width:100vw;
        margin:0 0.75rem;
        padding-bottom: 10px;
    }
    .fans ul{
        width:auto;
        display: flex;
    }
    .fans li{
        margin-right: 10px;
        box-shadow: 0 0 1px #999;
        border-radius: 5px;
    }
    .fans li img{
        width:6.5rem;
        height:6.5rem;
        border-radius: 5px;
    }
    .fans li .summary{
        padding: 0.3rem;
        width: 6.5rem;
        padding-top: 0.375rem;
        font-size: 0.6rem;
        color: #333;
        height: 1.6rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
    .fans .about_user {
        display: flex;
        align-items: center;
        padding: 0.3rem;
    }
    .fans .about_user img
    {
        margin-top: 0.3rem;
        margin-right: 0.5rem;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
    }
    .fans .about_user p{
        font-size: 0.7rem;
        color: #999;
    }
</style>
