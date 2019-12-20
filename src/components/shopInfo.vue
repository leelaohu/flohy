<template>
    <div class="shopInfo">
        <div class="shopMain">
            <div class="content">
                <img src="../assets/flower.png" alt="">
                <div class="">
                    <div class="name sf bold">豪华系列DIY包月鲜花，盛装出行，我只为你，遇见你，家具是家具是家具是家具是家具是家具是家具是家具是家具是家具是家具是家具是</div>
                    <div class="summary sf">
                        <span>一个月4束，每周一收花(周五十二点前付款)</span>
                        <i class="iconfont">&#xe600;</i>
                    </div>
                    <div class="price active sf">￥<span class="bold mf">2868</span></div>
                </div>
            </div>
            <div class="handel">
                <slot></slot>
            </div>
        </div>
        <div class="otherShop">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
    export default {}
</script>
<style lang="scss">
    .shopInfo{
        padding: 0.5rem 0;
    }
    .shopMain{
        width:100%;
        padding:  0 0.75rem;
        padding-bottom: 0.5rem;
        position: relative;
        .content{
            width:100%;
            height:100%;
            display: flex;
            >img{
                width:5rem;
                height:5rem;
                border-radius: 10px;
            }
            >div{
                flex: 1;
              padding: 0.5rem;
                padding-right: 0;
                .name{
                    line-height: 0.8rem;
                    height: 1.6rem;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                }
                .summary{
                    color: #999;
                    font-size: 0.6rem;
                    margin: 0.3rem 0 0.5rem 0;
                    height:2rem;
                    overflow: hidden;
                    padding: 0 0.5rem;
                    background: #eee;
                    display: flex;
                    align-items: center;
                    i{
                        font-size: 0.6rem;
                        margin-left: 0.5rem;
                        transform: rotate(90deg);
                    }
                }
            }
        }
        .handel{
            position: absolute;
            right:0.75rem;
            bottom:0.5rem;
        }
    }

    .otherShop{
        width:16.4rem;
        padding-left: 0.75rem;
    }
</style>
