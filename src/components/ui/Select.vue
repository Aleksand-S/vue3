<template>
<div>
  <label>{{ selectList.label }}</label>
  <select v-model="note.status" >
    <option v-for="selectItem in selectList.data"
    :key="selectItem.id"
    :value="selectItem.name"
    >{{ selectItem.title }}</option>
  </select>
</div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
    selectList: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped></style>
