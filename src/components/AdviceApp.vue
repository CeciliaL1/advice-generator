<script setup lang="ts">
import { ref } from 'vue'
import { getAdvice } from '@/getAdvice';
import type { IAdvice } from '@/models/Advice';
import AdviceRender from '../components/AdviceRender.vue';
import RandomAdviceBtn from '../components/RandomAdviceBtn.vue'

const response:IAdvice = await getAdvice();

let advice = ref(response)

const handleClick = async () => {

    advice.value = await getAdvice();
    console.log(advice)
}

</script>

<template>

<div class="container">
<AdviceRender :advice="advice" />
<RandomAdviceBtn @random-advice="handleClick"/>
</div>

</template>


<style scoped>
.container {
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--vt-c-lighter-greyish);
    border-radius: 6px;
    padding: 10px;
}

</style>
