<template>
    <div class="dialog" v-if="show === true" @click="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import mixinTools from "@/mixines/mixinTools";

export default {
    name:"my-dialog",
    mixins:[mixinTools]
}
</script>

<style>
.dialog{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    display: flex;
}

.dialog__content{
    padding: 20px;
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 30px;
    min-width: 400px;
}
</style>