<template>
    <div class="wrapper">
        <div class="grid">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="stylus">
.wrapper
    --item-size 20vmin
    width 100%
    height 100%
    display grid
    place-items center

.grid
    display grid
    gap calc(var(--item-size) / 12)
    grid-auto-rows minmax(var(--item-size), auto)
    grid-template-columns repeat(3, var(--item-size))

.item
    width 100%
    height 100%
    min-width var(--item-size)
    min-height var(--item-size)
    border-radius calc(var(--item-size) / 10)
    border 2px solid white
    mix-blend-mode difference
    backdrop-filter blur(10px)

.item:last-of-type
    grid-column 1 / 3
    grid-row 1 / 3
</style>