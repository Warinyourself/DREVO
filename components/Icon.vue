<template>
    <component :is="icon" />
</template>

<script lang="ts" setup>
import doll from '~/assets/icons/doll.svg'
import doll1 from '~/assets/icons/doll_1.svg'
import main from '~/assets/icons/main.svg'
import union from '~/assets/icons/union.svg'

const icons = {
    doll,
    doll1,
    main,
    union
} as const

const props = defineProps({
    name: {
        type: String as PropType<keyof typeof icons>,
        required: true
    },
})

const icon = computed(() => icons[props.name])
</script>

<style lang="stylus">
svg
    transition-duration .4s
</style>