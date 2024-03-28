<template>
  <div>
  <form class="form" @submit.prevent = "editMode ? update() : add()">
        <input type="text" placeholder="title of notes" class="input" id="title" v-model='title' >
        <textarea  placeholder="description" class="input" id="desc" v-model="description"></textarea>
        <input type="submit" :value="editMode ? 'Update' : 'Create' " class="btn" >
    </form>
  <table>
     <tr v-for="note in notes" :key="note.id">
      <td >{{note.title}}</td>
      <td>{{note.description | truncate}}</td>
      <td v-if="!note.complete">
      <input type="checkbox" v-model="note.complete" id="check">
      </td>
      <td v-else><span>Completed</span></td>
      <td> <button class="btn" id="update" @click="edit(note)">Edit</button></td>
      <td> <button class="btn" id="delete" @click="remove(note.id)">Delete</button> </td>
     </tr>
    </table>
  </div>
</template>

<script>
import '../assets/main.css'
import { mapGetters } from 'vuex'

export default {
 name: 'Notes',
data(){
    return{
         title: '',
        description: '',
        id:null,
        editMode:false,
    }
 },
 computed:{
    ...mapGetters({
      notes:'getNotes'
    })
  },
  methods:{
     add(){
        this.$store.dispatch('addingNotes' , {
            id:this.$store.getters.getNotes.length+1,
            title: this.title ,
            description:this.description
        })
         this.resetForm()
    },
    remove(id){
        this.$store.dispatch('deleteingNotes', id)
    },
    edit(note){
          this.id = note.id
          this.title = note.title
          this.description = note.description
          this.editMode = true
    },
    update(){
         this.$store.dispatch('updateingNote' ,{
            id: this.id,
            title: this.title,
            description: this.description
         })
         this.resetForm()
    },
    resetForm(){
        this.editMode = false,
        this.title = '',
        this.description = '',
        this.id = null
    },
    
  }
  ,
  filters:{
    truncate: function(value){
        if(value !== ''){
           return  value.substring(0,15) + '....'
        }
       
    }
  }

}
</script>
