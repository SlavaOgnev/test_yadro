<template>
  <div class="page__wrapper">
    <div v-for="pageNumber in totalPages"
         :key="pageNumber"
         class="page"
         :class="{'page_active': pageNumber === page}"
         @click="changePage(pageNumber)"
    > {{pageNumber}}
    </div>
  </div>
</template>

<script>
export default {
  name:'my-page',
  props:{
    totalPages:
        {
          type: Number,
          required: true
        },
    page:{
      type: Number,
      required: true
    }
  },

  methods:{
    changePage(pageNumber){
      this.$emit('changePage',pageNumber);
    }
  }
}
</script>

<style  scoped>
.page__wrapper{
  display: flex;
  gap:10px;
  margin-top: 20px;
  justify-content: center;
}
.page{
  font-size: large;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  min-width: 30px;
  text-align: center;
  cursor: pointer;
}
.page_active{
  border: 2px solid teal;
}
</style>