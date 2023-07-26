<template>
    <button type="button" :class="background" class=" focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none ">{{ title }}</button>
</template>

<script>
    export default {
        props : [
            'title',
            'background'
        ]
    }
</script>