<template>
  <!-- new note -->
  <div class="new-note">

      <label>Title</label>
      <input v-model="note.title" type="text" />

      <!-- select -->
      <selectList :note="note" :selectList="selectList" />

    <label>Description</label>
    <textarea v-model="note.descr" style="margin-bottom: 10px"></textarea>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
import selectList from "@/components/ui/Select.vue"
export default {
  components: {
    selectList
  },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectList: null,
    }
  },
  created() {
    this.selectList = this.$store.getters.getPriorityList
  },
  methods: {
    addNote() {
      if (this.note.title === "") {
        this.message = "title required";
        return false;
      }
      this.$store.dispatch('addNote', this.note)
      this.note.status = "standart"
      this.message = null;
      (this.note.title = ""), (this.note.descr = "");
    },
  },
};
</script>

<style lang="scss" scope>
  .new-note {
    text-align: center;
  }
</style>
