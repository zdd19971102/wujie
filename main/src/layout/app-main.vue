<template>
  <section class="app_main">
    <keep-alive >
      <router-view :key="key" />
    </keep-alive>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
  data() {
    return {
      cachedViews: [],
    };
  },
};
</script>

<style scoped>
.app_main {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  /* padding: 10px 10px; */
  background: #e9ecf0;
}
</style>
