<template>
    <div>
        <form @submit.prevent>
        <h4>Creating post</h4>
        <my-input
            v-focus
        v-model="post.title"
         type="text" 
         placeholder="Enter a title of post"/>

        <my-input
         v-model="post.body"
         type="text" 
         
         placeholder="Enter a description of post"/>
        <my-buttom class=".btn" style="align-self: flex-end; margin-top: 10px;" @click="createPost">Create</my-buttom>
    </form>
    </div>

</template>


<script>
import myButtom from "@/components/UI/myButtom.vue";
export default{
    components: {
      myButtom,
    },
    data(){
        return{
            post:{
                title:'',
                body:''
            }
        }
    },
    methods:{
        createPost(){
            this.post.id = new Date();
            this.$emit('create', this.post)
            this.post = {
                title:'',
                body:''
            }
            
        }
    },
}

</script>


<style scoped>
form{
    display: flex;
    flex-direction: column;
    padding: 10px;
}



</style>

