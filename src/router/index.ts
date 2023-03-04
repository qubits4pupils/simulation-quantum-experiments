import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import SimulationPicker from "@/components/SimulationPicker.vue";
import Simulation1 from "@/components/Simulation1.vue";
import Simulation3 from "@/components/Simulation3.vue";
import Simulation4 from "@/components/Simulation4.vue";
import PageNotFound from "@/components/PageNotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/Qubits4Pupils',
    name: 'home',
    component: SimulationPicker,
    alias: '/Qubits4Pupils/simulationen'
  },
  {
    path: '/Qubits4Pupils/sim1',
    name: 'sim1',
    component: Simulation1,
    alias: '/Qubits4Pupils/messprozess'
  },
  {
    path: '/Qubits4Pupils/sim2',
    name: 'sim2',
    component: Simulation1,
    props: {
      isSecond: true
    },
    alias: '/Qubits4Pupils/statistischer_charakter'
  },
  {
    path: '/Qubits4Pupils/sim3',
    name: 'sim3',
    component: Simulation3,
    alias:'/Qubits4Pupils/verschraenkung'
  },
  {
    path: '/Qubits4Pupils/sim4',
    name: 'sim4',
    component: Simulation4,
    alias:'/dekohaerenzzeit'
  },
  { path: "/Qubits4Pupils/:pathMatch(.*)*", component: PageNotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
