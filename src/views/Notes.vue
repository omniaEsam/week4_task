<template>
  <div>
    <CrudForm />
    <table>
      <tr v-for="note in notes" :key="note.id">
        <td>{{ note.title }}</td>
        <td>
          {{ note.description | truncate }}
        </td>
        <td v-if="!note.complete">
          <input type="checkbox" v-model="note.complete" id="check" />
        </td>
        <td v-else><span>Completed</span></td>
        <td>
          <button class="btn" id="update" @click="edit(note)">Edit</button>
        </td>
        <td>
          <button class="btn" id="delete" @click="remove(note.id)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import "../assets/main.css";
import { mapGetters } from "vuex";
import CrudForm from "../components/CrudForm.vue";

export default {
  name: "Notes",
  components: {
    CrudForm,
  },
  computed: {
    ...mapGetters({
      notes: "getNotes",
      FormData: "getFormData",
    }),
  },
  methods: {
    remove(id) {
      this.$store.dispatch("deleteingNotes", id);
    },
    edit(note) {
      this.FormData.id = note.id;
      this.FormData.title = note.title;
      this.FormData.description = note.description;
      this.FormData.editMode = true;
    },
  },
  filters: {
    truncate: function (value) {
      if (value !== "") {
        return value.substring(0, 15) + "....";
      }
    },
  },
};
</script>
