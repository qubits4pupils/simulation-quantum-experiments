import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'
import SimulationPicker from "@/components/SimulationPicker.vue";
import Simulation1 from "@/components/Simulation1.vue";
import Simulation3 from "@/components/Simulation3.vue";
import Simulation4 from "@/components/Simulation4.vue";
import Impressum from "@/components/Impressum.vue";
import PageNotFound from "@/components/PageNotFound.vue";

//https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: SimulationPicker,
        alias: '/simulationen',
    },
    {
        path: '/sim1',
        name: 'sim1',
        component: Simulation1,
        alias: '/messprozess'
    },
    {
        path: '/sim2',
        name: 'sim2',
        component: Simulation1,
        props: {
            isSecond: true
        },
        alias: '/statistischer_charakter'
    },
    {
        path: '/sim3',
        name: 'sim3',
        component: Simulation3,
        alias: '/verschraenkung'
    },
    {
        path: '/sim4',
        name: 'sim4',
        component: Simulation4,
        alias: '/dekohaerenzzeit'
    },
    {
        path: '/impressum',
        name: 'impressum',
        component: Impressum,
    },
    {path: "/:pathMatch(.*)*", component: PageNotFound}
]

const router = createRouter({
    history: createWebHashHistory("."),
    routes
})

export default router
