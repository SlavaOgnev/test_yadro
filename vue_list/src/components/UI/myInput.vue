<template>
    <input class="input" type="text" :value="modelValue" @input="updateValue">
</template>

<script>
export default{
    name:'my-input',
    props:{
        modelValue:[String, Number]
    },
    methods:{
        updateValue(event){
            this.$emit('update:modelValue', event.target.value)

        }
    }
}
</script>

<style scoped>

.input{
    width: 100%;
    border: 1px solid teal;
    padding: 15px 5px;
  margin-right: 30px;
    margin-top: 15px;
}
</style>