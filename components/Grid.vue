<template>
    <div class="wrapper">
        <div class="grid">
            <NuxtLink
                v-for="item in itemList"
                :key="item.name"
                :to="`/${item.name}`"
                :class="`item ${item.class}`"
            >
                <Icon
                    :name="item.name"
                    :style="{ 'view-transition-name': `icon-${item.name}` }"
                />
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const itemList = ref([
    {
        name: 'doll',
        class: 'medium'
    },
    {
        name: 'doll1',
    },
    {
        name: 'main',
    },
    {
        name: 'union',
        class: 'medium'
    }
])

</script>

<style lang="stylus">
.grid
    --amount 4
    --gap calc(var(--item-size) / 16)
    display grid
    gap var(--gap)
    grid-auto-rows var(--item-size)
    width calc(var(--min-item-size) * var(--amount) + var(--gap) * (var(--amount) - 1))
    grid-template-columns repeat(auto-fill, var(--min-item-size))
    grid-gap 8px
    grid-auto-rows var(--min-item-size)
    grid-auto-flow dense
    & > *
        --size 1
        --item-size calc(var(--min-item-size) * var(--size))
        grid-column-end span var(--size)
        grid-row-end span var(--size)
    & .medium
        --size 2
    & .big
        --size 3
</style>