<template>
  <div>

    <button @click="state = 1" style="width: 100px; height: 50px;">1&2</button>
    <button @click="state = 3" style="width: 100px; height: 50px;">3</button>
    <button @click="state = 4" style="width: 100px; height: 50px;">4</button>

    <Simulation1 v-if="state === 1"/>
    <Simulation3 v-if="state === 3"/>
    <Simulation4 v-if="state === 4"/>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref, onMounted} from "vue";
import Simulation1 from "@/components/Simulation1.vue";
import Simulation3 from "@/components/Simulation3.vue";
import Simulation4 from "@/components/Simulation4.vue";

const state = ref(1);
</script>

<style>
body{
  touch-action: manipulation;
}

#electronGroup #electrono {
  transition: opacity 0.5s
}

#electronGroup #electronu {
  transition: opacity 0.5s
}

#electronGroup #electron {
  transition: opacity 0.5s
}

#electronGroup.spin #electrono {
  opacity: 0.5;
}

#electronGroup.spin #electronu {
  opacity: 0.5;
}

#electronGroup.spin #electron {
  opacity: 0;
}

#electronGroup.spin.down #electrono {
  opacity: 0;
}

#electronGroup.spin.down #electronu {
  opacity: 1;
}

#electronGroup.spin.down #electron {
  opacity: 0;
}

#electronGroup.spin.up #electrono {
  opacity: 1;
}

#electronGroup.spin.up #electronu {
  opacity: 0;
}

#electronGroup.spin.up #electron {
  opacity: 0;
}

#electronGroup #electrono {
  opacity: 0;
}

#electronGroup #electronu {
  opacity: 0;
}

#electronGroup #electron {
  opacity: 1;
}

#electronGroup.deceased {
  opacity: 0;
}

#magnetl {
  transform-origin: center;
}

</style>
