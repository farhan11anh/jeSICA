<template>
    <div class="text-center" :class="stylee">
        <div class="sm:w-96 md:w-96 lg:w-60 xl:w-72 h-72 mx-auto rounded-2xl bg-[##FFE4E8] px-6 pb-8 shadow-2xl" :class="styleeChild">
            <img class="mx-auto -mt-10" src="/assets/img/thunder.png" alt="">
            <h2 class="text-xl font-bold leading-7" >{{ title }}</h2>
            <p class="mt-3" >
                {{ content }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props : [
            'title',
            'content',
            'stylee',
            'styleeChild'
        ]
    }
</script>