<script setup lang="ts">

defineEmits<{
    (e: 'randomAdvice'):void
}>()
</script>

<template>

    <div>
        <img @click="$emit('randomAdvice')" src="../../public/images/icon-dice.svg" alt="Dice to randomize an advice">
    </div>


</template>

<style scoped>
</style>