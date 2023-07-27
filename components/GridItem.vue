<template>
    <div class="item"></div>
</template>

<script lang="ts" setup></script>

<style lang="stylus">
.item
    width 100%
    height 100%
    min-width var(--item-size)
    min-height var(--item-size)
    border-radius calc(var(--item-size) / 10)
    border 2px solid white
    mix-blend-mode difference
    backdrop-filter blur(10px)
</style>