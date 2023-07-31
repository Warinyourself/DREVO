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
                />
                <!-- :style="{ 'view-transition-name': `icon-${item.name}` }" -->
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const itemList = ref([
    {
        name: 'balalaika',
    },
    {
        name: 'doll1',
        class: 'medium'
    },
    {
        name: 'kremlin1'
    },
    {
        name: 'orthodoxy'
    },
    {
        name: 'squirrel'
    },
    {
        name: 'ballerina'
    },
    {
        name: 'doll'
    },
    {
        name: 'snow'
    },
    {
        name: 'motherOfGod',
        class: 'medium'
    },
    {
        name: 'bear1'
    },
    {
        name: 'kalashnikov'
    },
    {
        name: 'socks'
    },
    {
        name: 'accordion'
    },
    {
        name: 'bear'
    },
    {
        name: 'kremlin'
    },
    {
        name: 'mother',
        class: 'medium'
    },
    {
        name: 'sputnik'
    },
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