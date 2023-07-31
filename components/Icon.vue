<template>
    <div class="icon-wrapper">
        <Icon />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    name: {
        type: String as PropType<string>,
        required: true
    },
})

const Icon = defineAsyncComponent(() => 
    import(`~/assets/icons/${props.name}.svg`)
)
</script>

<style lang="stylus">
.icon-wrapper
    svg
        width 100%
        height 100%
</style>