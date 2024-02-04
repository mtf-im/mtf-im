<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 text-center mx-auto max-w-[40rem]">
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {{ t('404.title') }}
        </h1>
        <p class="mt-4 text-lg text-gray-500">
            {{ t('404.description') }}
        </p>
        <router-link to="/" class="mt-8 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:text-white bg-pink-300 hover:bg-pink-200">
            {{ t('404.button') }}
        </router-link>
    </div>
</template>

<style scoped></style>
