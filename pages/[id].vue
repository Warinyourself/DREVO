<template>
  <div>
    <Canvas />
    <div class="wrapper">
      <NuxtLink to="/" class="main-icon item">
        <Icon
          :name="iconName"
          :style="{ 'view-transition-name': `icon-${iconName}` }"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'DREVO'
})

const route = useRoute()
const iconName = route.params.id
</script>

<style lang="stylus">
.item.main-icon
  width 60vmin
  height 60vmin
</style>