<template>
  <div>
    <div class="simulation-picker-container">
      <keep-alive>
        <Simulation1 :is-second="false" v-if="state === 1"/>
      </keep-alive>
      <keep-alive>
        <Simulation1 :is-second="true" v-if="state === 2"/>
      </keep-alive>
      <keep-alive>
        <Simulation3 v-if="state === 3"/>
      </keep-alive>
      <keep-alive>
        <Simulation4 v-if="state === 4"/>
      </keep-alive>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {ref, Ref, onMounted, watch, watchEffect, defineProps} from "vue";
import Simulation1 from "@/components/Simulation1.vue";
import Simulation3 from "@/components/Simulation3.vue";
import Simulation4 from "@/components/Simulation4.vue";
import router from "@/router";

const props = defineProps<{
  state: number
}>()


</script>

<style scoped lang="scss">

</style>