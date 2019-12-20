<template>
    <div class="goodsItem">
        <img src="../assets/goodItem.png" alt="">
        <div class="name bold sf">鲜花与你想自由</div>
        <div class="summary">你的生活你的生活你的生活你的生活你的生活你的生活</div>
        <div class="price active sf">￥168.00</div>
    </div>
</template>

<script>
    export default {}
</script>
<style>
    .goodsItem{
        margin-top: 1rem;
    }
    .goodsItem>img{
        width:8.5rem;
        height:8.5rem;
        border-radius: 10px;
    }
    .goodsItem>.name{
        margin-top: 0.5rem;
    }
    .goodsItem>.summary{
        color: #999;
        width:8.5rem;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin: 0.3rem  0;
        font-size: 0.6rem;
    }
    .goodsItem>.price{
        font-weight: bold;
     }

</style>
