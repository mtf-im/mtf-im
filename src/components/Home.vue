<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div class="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-[40rem] lg:max-w-7xl">
            <h1 class="mt-10 mb-5 text-7xl font-bold">MtF.im</h1>
            <h1 class="text-3xl font-bold">I'm Male-to-Female.</h1>
            <h1 class="mt-5 mb-5 text-7xl font-bold">{{ t('home.description') }}</h1>
            <p class="mt-4 text-2xl">{{ t('home.welcome') }}</p>
        </div>
    </div>
</template>


<style scoped>
</style>
