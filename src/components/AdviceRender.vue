<script setup lang="ts">
import type { IAdvice } from '../models/Advice'

interface IAdviceProps {
    advice: IAdvice
}
 const props = defineProps<IAdviceProps>();


</script>

<template>
<div class="advice">
    <p>Advice {{ advice.slip.id}}</p>
    <h2>{{ advice.slip.advice }}</h2>
</div>

</template>

<style scoped>

</style>