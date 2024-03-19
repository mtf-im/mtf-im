<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
    <div class="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-[40rem] lg:max-w-7xl">
            <h2 class="m-4 text-2xl font-bold">{{ t("subdomain.title") }}</h2>
            <div role="alert" class="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{{ t("text.service-warning") }}</span>
            </div>
            <p class="m-4">{{ t("subdomain.description") }}</p>
            <p class="m-4">{{ t("subdomain.notavliable") }}</p>
        </div>
    </div>
</template>

<style scoped></style>
