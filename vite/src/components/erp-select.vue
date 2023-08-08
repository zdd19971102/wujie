<template>
  <el-select
    :filter-method="PinyinMatchFun"
    v-model="data.selectValue"
    v-bind="$attrs"
    @visible-change="visibleChange"
    :reserve-keyword="false"
 >
    <el-option
      v-for="item in data.list"
      :key="item[data.selectObj.dataValue]"
      :label="item[data.selectObj.dataLabel]"
      :value="item[data.selectObj.dataValue]"
      :disabled="item[data.selectObj.disabled]"
      @click.native="handleChange(item)"
    >
      <template #default>
        <slot :item="item" />
      </template>
    </el-option>
  </el-select>
</template>
<script setup lang="ts">
import PinyinMatch from "pinyin-match";
import { reactive, watch } from "vue";
const props = defineProps({
  value: {
    type: [String, Array, Number],
  },
  selectInfo: {
    type: Object,
    default: () => {},
  },
});
const emit = defineEmits(["input", "handleChange"]);
const data = reactive({
  selectObj: {} as any,
  selectValue: "" as any,
  list: [] as any, // 数据源
  copyList: [] as any, // 复制一份数据
});
watch(
  () => [props.selectInfo, props.value],
  (val: any) => {
    data.selectObj = Object.assign({}, { ...val[0] });
    data.copyList = data.list = data.selectObj?.options
      ? [...data.selectObj.options]
      : [];
    data.selectValue = props.value;
    emit("input", data.selectValue);
  },
  {
    immediate: true,
    deep: true,
  }
);
const PinyinMatchFun = (val: string) => {
  if (val) {
    var result = data.copyList.filter((i: { [x: string]: string; }) => PinyinMatch.match(i[data.selectObj.dataLabel], val));
    // 将过滤后的数组重新赋给下拉列表数据
    data.list = result;
  } else {
    // 如果输入框为空, 则将下拉列表数据还原
    data.list = data.copyList;
  }
};
const handleChange = (val: any) => {
  emit("handleChange", val);
};
const visibleChange = () => {
  data.list = data.copyList;
};
</script>
