<template>
    <label class="text-[#475467]" :for="name">{{ title }}</label>
    <div id="input" class="relative border border-[#D0D5DD] text-[#475467] rounded-xl w-full h-16 overflow-hidden mt-3 mb-5 flex" >
        <div class="basis-1/12 relative" >
            <div class=" w-20 h-fit">
                <img class="mx-auto translate-y-3 top-1/2 w-1/2 object-cover h-1/3" :src="svg" alt="">
            </div>
        </div>
        <input
            v-model="valueInput"
            @input="emitVal"
            @keyup.enter="emitLogin"
            @focus="emitValidate"
            @blur="emitBlur"
        class="w-full border-none basis-11/12" :name="name" :id="name" :type="typeP" :placeholder="placeholder" autocomplete="on">
        <div v-if="password == 'true'" @click="toggleHides" class="absolute right-5 top-1/2 -translate-y-3 cursor-pointer">
            <img :src="hide ? '/assets/icons/eye.svg' : '/assets/icons/eyeOff.svg'" class=" max-w-full object-fill" alt="">
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
        emits: ['toggle-hide', 'user-entry'],
        data(){
            return{
                valueInput : "",

                svg : `/assets/icons/${this.icon}.svg`,
                hide : true,
                typeP : this.type
            }
        },
        methods : {
            toggleHides(){
                this.$emit('toggle-hide')

                this.hide = !this.hide
                if(this.typeP == "password"){
                    this.typeP = "text"
                } else {
                    this.typeP = "password"
                }

                // console.log(this.typeP);
            },

            emitVal(){
                this.$emit('user-entry', this.valueInput)
            },
            emitLogin(){
                this.$emit('log-in')
            },
            emitValidate(){
                this.$emit('emit-validate')
            },
            emitBlur(){
                this.$emit('emit-blur')
            }
        }
    }
</script>

<style scoped>

    #input:has(input:focus) {
        box-shadow: 0px 0px 10px rgba(153, 205, 50, 0.316);
        background-color: rgba(247, 247, 237, 0.474);
    }
</style>