<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'
import { onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const $route = useRoute();
watch(
  $route,
  (val) => {
    if (val.path.includes("wms")) {
      window.$wujie?.bus.$emit("routerChange", "wms", val);
    }
  },
  { immediate: true }
);
onMounted(() => {
  window.$wujie?.bus.$on("wmsJump", (val: { path: any; query: any; }) => {
    router.replace({ path: val.path, query: val.query });
  });
});
</script>
<template>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
