<template>
  <div>
  <form class="form" @submit.prevent="editMode ? update() : add()">
        <input type="text" placeholder="title of notes" class="input" id="title" v-model="title">
        <textarea  placeholder="description" class="input" id="desc" v-model="description"></textarea>
        <input type="submit" :value="editMode ? 'Update' : 'Create'" id="btn" >
    </form>
  <table>
     <tr v-for="note in notes" :key="note.id">
      <td >{{note.title}}</td>
      <td>{{note.description | truncate}}</td>
      <td> <button class="btn" id="update" @click="edit(note)">Edit</button></td>
      <td> <button class="btn" id="delete" @click="remove(note.id)">Delete</button> </td>
     </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
 name: 'Notes',
data(){
    return{
         title: '',
        description: '',
        id:null,
        editMode:false
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
    },
    remove(id){
        this.$store.dispatch('deleteingNotes', id)
    },
    edit(note){
          this.editMode = true
          this.id = note.id
          this.title = note.title
          this.description = note.description
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
    }
  },
  filters:{
    truncate: function(value){
        return value.substring(0,10) + '....'
    }
  }

}
</script>
<style scoped>

table{
    width: 60%;
    margin: auto;
    border-collapse: collapse;
    border: 1px solid whitesmoke;
    margin-top: 25px;
    color: #333;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
   vertical-align: middle;
   text-align: center;
}
td{
width: 20px;
 padding: 10px;
 background: whitesmoke;
 border-bottom: 1px solid gray;

}
.btn{
    border: none;
    color: white;
    border: none;
    padding: 8px 18px;
    border-radius: 5px;
    cursor: pointer;
}
#update{
    background: #2c3e50;

}
#delete{
    background: rgb(218, 20, 20);
}
.form{
    background: whitesmoke;
    width: 28%;
    margin: auto;
    padding: 15px;
 }
 .input{
    margin: 10px;
    padding: 10px 120px 10px 10px;
    border-radius: 6px;
    border: 1px solid gray;
    font-size: 1rem;
    display: block;
}
#btn{
    background: #2c3e50;
    color: white;
    border: none;
    padding: 8px 18px;
    border-radius: 5px;
    cursor: pointer;

}
</style>