<template>
    <div class="flex"> 
        <div class="basis-3/12">What do you want to try ?</div>
    </div>
</template>

<script>
    definePageMeta({
        layout : "navbar"
    })
    export default {
        data(){
            return{
                path : ""
            }
        },
        mounted() {
            this.getpath()
        },  
        methods : {
            doTest(){
                // 
            },
            getpath(){
                this.path = this.$route.name
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>