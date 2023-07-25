<template>
    <div v-html="src" >
        
    </div>
</template>

<script>
    export default {
        name : "Icon",
        props : ['name'],
        computed : {
            src() {
                const src = require(`/assets/img/${this.name}.svg?raw`)
                return src
            }
        }
    }
</script>