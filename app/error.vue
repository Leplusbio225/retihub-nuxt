<template>

    <UApp>
        <UError :error="{
            statusCode: 404, statusMessage: 'Page non trouvé',
            message: 'La page que vous tenter de visiter n\'existe pas'}"/>
    </UApp>

</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
    error: NuxtError
}>()

useSeoMeta({
    title: 'Page non trouvé',
    description: "La page que vous tenter de visiter n'existe pas."
})


useHead({
    htmlAttrs: {
        lang: 'fr'
    }
})

</script>