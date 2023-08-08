<template>
  <el-select v-model="value"
     clearable
      multiple
      collapse-tags
      filterable placeholder="oms下拉框">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: '1',
    label: '23zhaoda',
  },
  {
    value: '2',
    label: '阿斯蒂芬李二',
  },
  {
    value: '3',
    label: '张三2323',
  },
  {
    value: '4',
    label: '李四232',
  },
  {
    value: '5',
    label: 'wang 5',
  },
]
</script>
