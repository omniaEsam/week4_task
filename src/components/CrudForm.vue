<!-- <template>
 <div>
    <form class="form" @submit.prevent="add()">
        <input type="text" placeholder="title of notes" class="input" id="title" v-model="title">
        <textarea  placeholder="description" class="input" id="desc" v-model="description"></textarea>
        <input type="submit" value="Create" id="btn">
    </form>
 </div>
</template>

<script>
export default {
 name:'CrudForm',
 data(){
    return{
         title: '',
        description: '',
    }
 },
 methods:{
     add(){
        this.$store.dispatch('addingNotes' , {
            id:this.$store.getters.getNotes.length+1,
            title: this.title ,
            description:this.description
        })
    }
    ,
     
   
 }
}
</script>

<style  scoped>
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
 -->
