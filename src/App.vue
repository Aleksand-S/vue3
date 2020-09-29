<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <!-- message -->
          <message v-if="message" :message="message" />

          <!-- new note -->
          <newNote
          :note="note"
          />

          <div class="note-header" style="margin: 36px 0;">
            <!-- title -->
            <h1>{{ title }}</h1>

            <!-- search -->
            <search
            :value="search"
            placeholder="Find your note"
            @search="search = $event"
            />

            <!-- icons controls -->
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <!-- notes list -->
          <notes :notes="notesFilter" :grid="grid" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import message from "@/components/Message.vue"
import newNote from "@/components/NewNote.vue"
import notes from "@/components/Notes.vue"
import search from "@/components/Search.vue"
import NewNoteVue from './components/NewNote.vue'
export default {
  components: {
    message, newNote, notes, search,
  },
  data() {
    return {
      title: "Notes-vuex App",
      search: "",
      message: null,
      grid: true,
      note: {
        title: "",
        descr: "",
        status: "standart",
      },
      notes: null
    };
  },
  created() {
    this.notes = this.$store.getters.getNotes
  },
  computed: {
    notesFilter () {
      return this.$store.getters.getFiltredNotes(this.search)
    }
  },
};
</script>

<style>
</style>
