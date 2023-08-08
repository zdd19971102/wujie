import { createRouter, createWebHistory } from "vue-router";
import qcOrder from '@/components/HelloWorld.vue'
const routes = [
  {
    path: "/wms/qc-order",
    name: "/wms/qc-order",
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