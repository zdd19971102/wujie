<template>
  <div>
    <WujieVue width="100%"  name="wms" :url="Url" :sync="true" :alive="true"
      :plugins="plugins"
      :props="{jump}"
      >
    </WujieVue>
  </div>
</template>
<script>
import WujieVue from "wujie-vue2";
import { EventTargetPlugin } from 'wujie-polyfill';
export default {
  data() {
    return {
      Url: 'http://localhost:8065',
      plugins: [
        EventTargetPlugin(), 
      ]
    }
  },
  components: {
      WujieVue: WujieVue
  },
  watch:{
    $route: {
      handler(val) {
        WujieVue.bus.$emit("wmsJump", val);
      },
      immediate: true,
    }
  },
  methods: {
    jump(location)  {
      this.$router.push(location)
    }
  }
}
</script>
