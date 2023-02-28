<template>
<div>
  <h1>Simulation 4</h1>

  <button>Elektron Spin (Up/Down)</button>
  <button>Staubteilchen Ort (1/2)</button>
  <button>kleine Katze (lebendig/tot)</button>
  <button>große Katze (lebendig/tot</button>
  <button>In Superpositionszustand präperieren</button>

  Umgebungsparameter
  <label>
    Temperatur
    kalt <input type="range"/> warm
  </label>
  <label>
  Druck
  Vakuum <input type="range"/> Atmosphärendruck
</label>
  <label>
    Lichteinfall
    dunkel <input type="range"/> hell
  </label>

  <button>Umgebung an</button>

</div>
</template>

<script lang="ts" setup>
import {ref, defineProps} from "vue";

const props = defineProps({
  foo: String
})

</script>

<style scoped>
label{
  width:100%;
  display:block;
}
</style>
