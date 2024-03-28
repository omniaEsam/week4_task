<template>
  <div>
    <form class="form" @submit.prevent="formData.editMode ? update() : add()">
      <input
        type="text"
        placeholder="title of notes"
        class="input"
        id="title"
        v-model="formData.title"
      />
      <textarea
        placeholder="description"
        class="input"
        id="desc"
        v-model="formData.description"
      ></textarea>
      <input
        type="submit"
        :value="formData.editMode ? 'Update' : 'Create'"
        class="btn"
      />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CrudForm",

  computed: {
    ...mapGetters({
      notes: "getNotes",
      formData: "getFormData",
    }),
  },
  methods: {
    add() {
      this.$store.dispatch("addingNotes", {
        id: this.notes.length + 1,
        title: this.formData.title,
        description: this.formData.description,
      });
      this.resetForm();
    },
    update() {
      this.$store.dispatch("updateingNote", {
        id: this.formData.id,
        title: this.formData.title,
        description: this.formData.description,
      });
      this.resetForm();
    },
    resetForm() {
      (this.formData.editMode = false),
        (this.formData.title = ""),
        (this.formData.description = ""),
        (this.formData.id = null);
    },
  },
};
</script>

