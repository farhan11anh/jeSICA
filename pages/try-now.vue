<template>
    <div class="">
        <div class="basis-3/12">What do you want to try ?</div>
        <p>회사 자체는 매우 성공적인 회사입니다. 그가 그들이나 편리한 사람을 찾게 하십시오, 그들은 그들이 제공한 것에 대해 그들을 고발할 줄 모르고 빚을 지게 되지만, 아무도 통찰력이 없습니다. 여기에서 그들은 자신의 수고를 알지 못하지만 그것을 가정하기 위해 거친 쾌락에서 도망치거나 유연하게 가장 쉬운 이유를 싫어합니다. 이러한 고통 중 가장 작은 것이 즐겁고 일부 문제가 발생하지만 다른 더 큰 고통이 종종 그를 따르며 그는 마음의 상태에 있어야 합니다. 그것을 거부하는 것에 대해 많은 비판을 받는 사람이 있습니까? 필요없이 태어난 사람들을 위해. 우리는 그들을 무지하고 우리가 축복받은 환난의 즐거움과 유사하다고 비난합니까?</p>


      
            <input type="text" v-model="find" placeholder="">
            <button @click="testing"> TEST </button>
            <p>{{find}}</p>
 

    </div>
</template>

<script>
    definePageMeta({
        layout : "navbar"
    })

    export default {
        data(){
            return{
                find : ""
            }
        },
        computed : {
            
        }
        
    }
</script>

<style lang="scss" scoped>

</style>