<template>
    <div class="checkBox">
          <span class="mint-checkbox">
             <input type="checkbox" :checked="check" class="mint-checkbox-input" />
             <span class="mint-checkbox-core"></span>
          </span>
    </div>
</template>

<script>
    export default {
        props:{
            check:Boolean
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style>
</style>
