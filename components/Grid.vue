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
const itemList = ref(['doll', 'doll1', 'main', 'union', 'doll', 'union'])
</script>
