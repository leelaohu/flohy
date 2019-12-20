<template>
    <ul class="navList">
        <li class="navItem"
            :class="activeIndex == index ? 'active' : ''"
            @click="activeItem(index)"
            v-for="(item,index) in navList">
            <router-link :to="item.link">{{item.name}}</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        props:{
            navList:Array
        },
        data(){
            return {
                activeIndex:0
            }
        },
        methods:{
            activeItem(index){
                this.activeIndex = inedx
                console.log(index);
            }
        }
    }
</script>

<style>
    .navList{
        box-sizing: border-box;
        width:100%;
        padding: 10px;
        height:50px;
        line-height: 50px;
        font-size: 14px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        color: #333;
    }
</style>
