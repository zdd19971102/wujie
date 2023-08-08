import { createRouter, createWebHistory } from "vue-router";
import qcOrder from '@/components/HelloWorld.vue'
const routes = [
  {
    path: "/oms/customers-table",
    name: "/oms/customers-table",
    component: qcOrder,
  },
  
]
const router = createRouter({
  routes: [
    ...routes,
  ],
  history: createWebHistory()
})

export default router