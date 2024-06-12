<script setup lang="ts">
import type { IAdvice } from '../models/Advice'

interface IAdviceProps {
    advice: IAdvice
}
 const props = defineProps<IAdviceProps>();


</script>

<template>
<div class="advice">
    <p>Advice #{{ advice.slip.id}}</p>
    <h3>"{{ advice.slip.advice }}"</h3>
</div>


<img src="./../../public/images/pattern-divider-mobile.svg" alt="">

</template>

<style scoped>
.advice {
    width: 250px;
    height: 300px;
    font-weight: 800;
    
}
p {
    margin-left: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: var(--vt-c-neon-green);
    font-weight: 800;
    font-size: 0.7rem;
    letter-spacing: 2px;
 }
 img {
    opacity: 70%;
    
 }
</style>