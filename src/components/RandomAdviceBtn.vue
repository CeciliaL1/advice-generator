<script setup lang="ts">

defineEmits<{
    (e: 'randomAdvice'):void
}>()
</script>

<template>

    <div @click="$emit('randomAdvice')" >
        <img src="../../public/images/icon-dice.svg" alt="Dice to randomize an advice">
    </div>


</template>

<style scoped>
div {
    position: relative;
    top: 30px;
    width: 50px;
    height: 70px;
    border-radius: 50%;
    background-color: var(--vt-c-neon-green);
    cursor: pointer;

}
div:hover {
    box-shadow: 0px 0px 30px 5px var(--vt-c-neon-green);
    
}
img {
    width: 20px;
    height: auto;
    position: relative;
    top: 15px;
    left: 15px;
}
</style>