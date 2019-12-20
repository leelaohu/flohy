<template>
    <div class="indexTitle">
        <div class="title">{{title}}</div>
        <div class="page" v-show="!page==0"><span>{{activePage}}</span>/{{page}}</div>
    </div>
</template>

<script>
    export default {
        props:{
            title:{
                type:String,
                default:''
            },
            page:{
                type:Number,
                default:0
            },
            activePage:{
                type:Number,
                default:0
            }
        }
    }
</script>

<style>
    .indexTitle{
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        width:100%;
        padding: 1rem;
    }
    .indexTitle .title,.page>span {
        font-weight: bold;
        font-size: 0.9rem;
    }
    .page {
        font-size: 0.7rem;
    }
</style>
