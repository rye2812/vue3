<template>
  <!-- 中英文切换 -->
  <ConfigProvider :locale="getAntLocale">
    <div></div>
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue'
import { useLocale } from './locales/useLocale'
const { getAntLocale } = useLocale()
console.log('getAntLocale', getAntLocale)
</script>
