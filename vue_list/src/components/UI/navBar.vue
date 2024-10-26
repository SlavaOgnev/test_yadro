<template>
  <div class="nav-bar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="nvb__btns">
      <my-buttom @click = "$router.push('/posts')">Посты</my-buttom>
      <my-buttom @click = "$router.push('/hello')" style="margin-left: 20px">HEllO</my-buttom>
      <my-buttom @click ="$router.push('postWithName')" style="margin-left: 20px">POST with Store</my-buttom>/
    </div>
  </div>
</template>

<script>

import MyButtom from "@/components/UI/myButtom.vue";

export default {
  components: {MyButtom}

}
</script>

<style>
.nav-bar{
  display: flex;
  height:50px;
  box-shadow: 2px 2px 4px gray;
  background-color: lightgray;
  align-items: center;
  padding: 10px;
}
.nvb__btns{
  margin-left: auto;
}
</style>