<template>
    <div class="basis-2/7 text-center rounded-2xl bg-[##FFE4E8] px-6 pb-8 shadow-2xl">
        <img class="mx-auto -mt-10" src="/assets/img/thunder.png" alt="">
        <h2 class="text-xl font-bold leading-7" >{{ title }}</h2>
        <p class="mt-3" >
            {{ content }}
        </p>
    </div>
</template>

<script>
    export default {
        props : [
            'title',
            'content'
        ]
    }
</script>