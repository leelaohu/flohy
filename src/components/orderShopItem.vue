<template>
    <div class="orderShopItem">
        <img src="../assets/flower.png" alt="">
        <div class="shopInfo">
            <div class="name">
                豪华系列DIY包月鲜花，盛装出行，我只为你，遇见你，家具是家具是家具是家具是家具是家具是家具是家具是家具是家具是家具是家具是
            </div>
            <div class="summary">
                一个月4束，每周一收花(周五十二点前付款)
            </div>
        </div>
        <div class="price">
            <span>￥19.9</span>
            <span>x1</span>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .orderShopItem{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 10px;
        img {
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 5px;
        }
        .shopInfo {
            font-size: 0.6rem;
            flex: 1;
            padding: 5px 10px;
            .name {
                line-height: 0.8rem;
                font-weight: bold;
                height: 1.6rem;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-all;
            }
            .summary {
                color: #999;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                word-break: break-all;
            }
        }
        .price {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.6rem;
            color: #000;
            span:last-child {
                color: #999;
                margin-top: 10px;
            }
        }
    }
</style>
