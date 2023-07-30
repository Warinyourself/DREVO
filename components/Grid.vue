<template>
    <div class="wrapper">
        <div class="grid">
            <NuxtLink
                v-for="(item, index) in itemList"
                :key="item + index"
                :to="`/${item}`"
                class="item"
            >
                <Icon
                    :name="item"
                    :style="{ 'view-transition-name': `icon-${item}` }"
                />
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const itemList = ref(['doll', 'doll1', 'main', 'union'])
</script>

<style lang="stylus">
.grid
    display grid
    gap calc(var(--item-size) / 16)
    grid-auto-rows var(--item-size)
    grid-template-columns repeat(3, var(--min-item-size))
    & > *:first-of-type
        --item-size: 40vmin
        grid-column 1 / 3
        grid-row 1 / 3
</style>