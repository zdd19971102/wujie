import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Layout from "@/layout/index.vue";
import OMS from "@/views/oms/index.vue";
import WMS from "@/views/wms/index.vue";
Vue.use(Router);
 const routes =  [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          name: "HelloWorld",
          component: HelloWorld
        }
      ]
    },
    {
      path: "/oms",
      component: Layout,
      children: [
        {
          path: "/oms/customers-table",
          name: "/oms/customers-table",
          component: OMS
        }
      ]
    },
    {
      path: "/wms",
      component: Layout,
      children: [
        {
          path: "/wms/qc-order",
          name: "/wms/qc-order",
          component: WMS
        }
      ]
    }
  ]

const router = new Router({
  mode: "history",
  scrollBehavior: () => ({
    y: 0,
  }),

  routes: routes,
});
export default router;