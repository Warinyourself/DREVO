<template>
    <div class="icon-wrapper">
        <component :is="icon" />
    </div>
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
.icon-wrapper
    svg
        width 100%
        height 100%
</style>