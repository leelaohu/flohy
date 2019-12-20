<template>
    <mt-tabbar v-model="selected" @click.native="activeRouter()">
        <mt-tab-item id="0">
            <i class="iconfont" slot="icon">&#xe654;</i>
            首页
        </mt-tab-item>
        <mt-tab-item id="1">
            <i class="iconfont" slot="icon">&#xe64d;</i>
            <!--<img slot="icon" src="../assets/logo.png">-->
            社区
        </mt-tab-item>
        <mt-tab-item id="2">
            <i class="iconfont" slot="icon">&#xe651;</i>
            驿站
        </mt-tab-item>
        <mt-tab-item id="3">
            <i class="iconfont" slot="icon">&#xe655;</i>
            购物车
        </mt-tab-item>
        <mt-tab-item id="4">
            <i class="iconfont" slot="icon">&#xe64b;</i>
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
    import { Tabbar, TabItem } from 'mint-ui';
    var list = ''
    export default {
        components:{
            Tabbar, TabItem
        },
        data() {
            return {
                selected: '',
            };
        },
        mounted(){

        },
        methods:{
            activeRouter(){
               var val = this.selected
                switch(val*1) {
                    case 0:
                        this.$router.replace('/index')
                        break;
                    case 1:
                        this.$router.replace('/area')
                        break;
                    case 2:
                        this.$router.replace('/station')
                        break;
                    case 3:
                        this.$router.replace('/goodCar')
                        break;
                    case 4:
                        this.$router.replace('/mine')
                        break;
                    default:
                        this.$router.replace('/index')
                }
            }
        }
    }
</script>

<style>
    .mint-tabbar{
        height:2.5rem;
        z-index:999;
        border-top:1px solid #eee;
    }
    .mint-tabbar > .mint-tab-item{
        color: #999;
        padding: 4px 0;
    }
    .mint-tabbar > .mint-tab-item.is-selected {
        color: #000;
        font-weight: bold;
        background: #fff ;
    }
</style>
