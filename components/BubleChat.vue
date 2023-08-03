<template>
    <div class="flex gap-3 mb-5" :class="position">
        <Avatar v-if="jesica === 'true'" online="false" width="w-10 relative" />
        <div class="balon rounded-lg p-4 max-w-[16rem] text-base" :class="color">
            <p  >
                {{ msg }}
            </p>
    
        </div>
    </div>
</template>

<script>
    export default {
        props : [
            'jesica',
            'msg'
        ],
        data(){
            return{
                position : this.jesica === "true" ? "justify-start" : "justify-end",
                color : this.jesica === "true" ? "bg-[#F2F4F7] text-[#475467]" : "bg-[#E31B54] text-[#FCFCFD]"
        
            }
        }
    }
</script>