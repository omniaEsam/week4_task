import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    notes: [
      {
        id: 1,
        title: "learn html",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas! Sed placeat provident vero, suscipit totam sapiente nulla ut aut. Dolore nam reiciendis maxime autem eum. At dicta quos doloremque! ",
        complete: false
      },
      {
        id: 2,
        title: "learn css",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas! Sed placeat provident vero, suscipit totam sapiente nulla ut aut. Dolore nam reiciendis maxime autem eum. At dicta quos doloremque!",
        complete: false
      },
    ]
    ,
    formData: {
      id: null,
      title: "",
      description: "",
      editMode: false,

    }
  },
  getters: {
    getNotes: state => state.notes,
    getFormData: state => state.formData
  },
  mutations: {
    NotesFromLocalStorage: (state) => {
      const notes = localStorage.getItem('notes');
      if (notes) {
        state.notes = JSON.parse(notes);
      }
    },
    addNotes: (state, newNote) => {
      if (newNote.title === '' && newNote.description === '') {
        alert("Please fill in inputs field ")

      }
      else {
        alert('Are you sure to add this note?')
        state.notes.push(newNote)
        localStorage.setItem("notes", JSON.stringify(state.notes))
      }
    }
    ,
    deleteNotes: (state, id) => {
      alert('Are you sure about deleting this note?')
      state.notes = state.notes.filter(note => note.id !== id)
      localStorage.setItem("notes", JSON.stringify(state.notes))
    },
    updateNote: (state, updateNote) => {
      alert('Are you sure about update this note?')
      const index = state.notes.findIndex(note => note.id === updateNote.id)
      if (index !== -1) {
        state.notes.splice(index, 1, updateNote)
        localStorage.setItem("notes", JSON.stringify(state.notes))

      }
    }
  },
  actions: {
    addingNotes: ({ commit }, newNote) => commit('addNotes', newNote),
    deleteingNotes: ({ commit }, id) => commit('deleteNotes', id),
    updateingNote: ({ commit }, updateNote) => commit('updateNote', updateNote),
    loadingNoteFromLocalStorge: ({ commit }) => commit('NotesFromLocalStorage')
  }
})
store.dispatch('loadingNoteFromLocalStorge')
export default store;
