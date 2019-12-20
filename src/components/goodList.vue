<template>
    <div class="goodList">
        <goodsItem></goodsItem>
        <goodsItem></goodsItem>
        <goodsItem></goodsItem>
    </div>
</template>

<script>
    import goodsItem from '@/components/item'
    export default {
        components:{
            goodsItem
        }
    }
</script>

<style>
    .goodList{
        padding: 0 0.75rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>
