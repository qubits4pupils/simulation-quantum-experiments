<template>
  <div>
    <h1>{{ $t('simulation2.index') }}: {{ $t('simulation2.label') }}</h1>
  </div>
</template>

<script lang="ts" setup>
import {ref, defineProps} from "vue";

const props = defineProps({
  foo: String
})

</script>

<style scoped>

</style>