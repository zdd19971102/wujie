<template>
  <div>
    <WujieVue width="100%"  name="oms" :url="Url" :sync="true" :alive="true"
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
      Url: 'http://localhost:8066',
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
        WujieVue.bus.$emit("omsJump", val);
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
