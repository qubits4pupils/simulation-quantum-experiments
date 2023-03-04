<template>
  <div>
    <button @click="state = 1" style="width: 100px; height: 50px;">1</button>
    <button @click="state = 2" style="width: 100px; height: 50px;">2</button>
    <button @click="state = 3" style="width: 100px; height: 50px;">3</button>
    <button @click="state = 4" style="width: 100px; height: 50px;">4</button>

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
</template>

<script lang="ts" setup>
import {ref, Ref, onMounted, watch, watchEffect} from "vue";
import Simulation1 from "@/components/Simulation1.vue";
import Simulation3 from "@/components/Simulation3.vue";
import Simulation4 from "@/components/Simulation4.vue";
import Simulation2 from "@/components/Simulation2.vue";

const state = ref(Number(localStorage.getItem('simulation')) || 1);
watchEffect(() => {
  localStorage.setItem('simulation', String(state.value));
})

</script>

<style scoped>

</style>