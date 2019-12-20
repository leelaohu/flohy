<template>
    <div class="bottomInfo">
        <div class="bottomLeft">
            <slot name="left"></slot>
        </div>
        <slot></slot>
        <div class="bottomRight">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>


    export default {}
</script>
<style lang="scss">
    .bottomInfo {
        width: 100vw;
        height: 2.5rem;
        padding: 0.2rem 0.75rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        position: fixed;
        z-index: 998;
        border-top:1px solid #eee;
        >div{
            height:100%;
        }
        .bottomRight{
            flex:1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }

    .mint-tabbar {
        display: none;
    }
</style>
