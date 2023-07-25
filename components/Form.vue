<template>
    <label class="text-[#475467]" :for="name">{{ title }}</label>
    <div class="relative border border-[#D0D5DD] text-[#475467] rounded-xl w-full h-16 overflow-hidden mt-3 mb-5 flex" >
        <div class="basis-1/12 relative" >
            <img class="mx-auto translate-y-4 top-1/2" :src="svg" alt="">
        </div>
        <input class="w-full border-none basis-11/12" :name="name" :id="name" :type="typeP" placeholder="Enter your NIK Telkom" autocomplete="on">
        <div v-if="password == 'true'" @click="toggle" class="absolute right-5 top-1/2 -translate-y-3 cursor-pointer">
            <img :src="hide ? '/assets/icons/eye.svg' : '/assets/icons/eyeOff.svg'" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props : [
            "name",
            "title",
            "type",
            "placeholder",
            "icon",
            "password"
        ],
        emits : [
            'toggle-hide'
        ],
        data(){
            return{
                svg : `/assets/icons/${this.icon}.svg`,
                hide : true,
                typeP : this.type
            }
        },
        methods : {
            toggle(){

                this.$emit('toggle-hide')

                this.hide = !this.hide
                if(this.typeP == "password"){
                    this.typeP = "text"
                } else {
                    this.typeP = "password"
                }

                console.log(this.typeP);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>