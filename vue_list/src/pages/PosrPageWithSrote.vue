<template>
  <div >
    <h1>Сраница с постами</h1>
    <h1></h1>
    <my-input
        v-model="searchQuery"
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        type="text"/>
    <div class="buutns">
      <my-buttom @click='showDialog' >Создать пост</my-buttom>
      <my-dialog v-model:show ='dialogVisibility'>
        <post-form
            @create="createPost"
        />
      </my-dialog>

      <my-select :model-value="selectedSort"
                 @update:model-value="setSelectedSort"
                 :options="sortOptions">
      </my-select>
    </div>
    <post-list
        v-if="!isPostloading"
        @deleteItem ="deleteItem"
        :posts="sortAndSearch"/>
    <div v-else="isPostloading" class="loader"> </div>
    <div v-intersection="loadPost" class="observed" ref="observed"></div>
  </div>


</template>

<script>
import postForm from "@/components/postForm.vue"
import postList from "@/components/postList.vue"
import axios from "axios";
import MyInput from "@/components/UI/myInput.vue";

import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';


export default{
  components:{
    MyInput,
    postForm, postList,
  },
  data(){
    return{
      dialogVisibility: false,
    }
  },
  //методы
  methods:{
    ...mapMutations({
        setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
      setPosts: 'post/setPosts',
    }),
    ...mapActions({
      loadPost: 'post/loadPost',
      fetchPost: 'post/fetchPost',
    }),
    createPost(post){
      this.posts.unshift(post)
      this.dialogVisibility =false
    },
    deleteItem(post){
      this.posts = this.posts.filter(p => post.id != p.id)
    },
    showDialog(){
      this.dialogVisibility = true;
    },

    changePage(pageNumber){
      this.page = pageNumber;
      this.fetchPost()
    }
  },
  mounted(){
    // this.fetchPost();
  },
  computed: {
    ...mapState({
      count: state => state.post.count,
      posts:state => state.post.posts,
      isPostloading:state => state.post.isPostloading,
      page:state => state.post.page,
      limit:state => state.post.limit,
      totalPages:state => state.post.totalPages,
      selectedSort:state => state.post.selectedSort,
      searchQuery:state => state.post.searchQuery,
      sortOptions:state => state.post.sortOptions,

    }),
    ...mapGetters({
      sortPosts: 'post/sortPosts',
      sortAndSearch: 'post/sortAndSearch',
    })
  },

  watch:{

  }

}
</script>

<style>

.loader{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader::before {
  content: "";
  width: 30px;
  height: 30px;
  border: 5px solid teal;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
.buutns{
  margin-top: 15px;
  display: flex;
  justify-content: space-around   ;
  width: 100%;
}
</style>
