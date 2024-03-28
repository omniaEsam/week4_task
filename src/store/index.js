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
  },
  getters: {
    getNotes: state => state.notes
  },
  mutations: {
    NotesFromLocalStorage: (state) => {
      const notes = localStorage.getItem('notes');
      if (notes) {
        state.notes = JSON.parse(notes);
      }
    },
    addNotes: (state, newNote) => {
      alert('Are you sure to add this note?')
      if (newNote.title !== '' && newNote.description !== '') {
        state.notes.push(newNote)
        localStorage.setItem("notes", JSON.stringify(state.notes))
      }
      else {
        alert("Please fill in inputs field ")
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
