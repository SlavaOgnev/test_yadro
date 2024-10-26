<template>
    <div v-show="posts.length > 0">
        <h3>Список постов</h3>
      <transition-group name="post_list">
        <post-item
            :post="post"
            :key="post.id"
            @deleteItem ="$emit('deleteItem', post)"
            v-for="post in posts"/>
      </transition-group>

</div>
    <h3 v-show="posts.length === 0" style="color: red">Список постов пуст</h3>
</template>


<script>
import postItem from './postItem.vue';
export default{
    components:{
        postItem
    },
    props:{
        posts:{
            type:Array,
            Required: true
        }
    }
}
</script>


<style scoped>
.post_list{
  display: inline-block;
  margin-right: 10px;
  }
.post_list-enter-active,
.post_list-leave-active {
  transition: all .6s ease;
}
.post_list-enter-from,
.post_list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post_list-move{
  transition: transform 0.6s ease;
}


</style>
