<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default{
    name:'my-buttom'
}

</script>

<style scoped>

.btn{
   cursor: pointer;
    
    padding: 10px 20px;
    background: none;
    color:teal;
    border: 1px solid teal;
    
}
</style>