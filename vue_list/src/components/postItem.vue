<template>
    <div class="post" >
        <div>
        <div><strong>Название </strong><span :class="{ 'line-through': post.isStrikethrough }">{{post.title }}</span></div>
        <div><strong>Описание   </strong>{{ post.body }}</div>
    </div>
    <div class="buttons">
        <div class="post_del">
            <my-buttom @click="deleteItem" style="margin-top: 0px;">Удалить</my-buttom>
        </div>
        <div class="notReal">
            <my-buttom @click="notReal" class="notReal" style="margin-top: 0px;">Перечеркнуть</my-buttom>
        </div>
        <div class="open">
          <my-buttom @click="$router.push(`/posts/${post.id}`)">Открыть</my-buttom>
        </div>
    </div>
   </div> 
</template>
<script>

import MyButtom from "@/components/UI/myButtom.vue";

export default{
  components: {MyButtom},
    props:{
        post:{
            type:Object,
            Required:true,
        }
    },
    methods:{
        deleteItem(post){
            this.$emit('deleteItem', this.post)
        },
        notReal(post){
        this.post.isStrikethrough = !this.post.isStrikethrough
    }
    },
   
}
</script>

<style>
.post{
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center ;
}
.line-through {
    text-decoration: line-through; 
}
.buttons{
    display: flex;
    gap:10px;
    justify-content: space-around;
}
</style>