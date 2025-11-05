<template>
    <p class="text-xl text-center">Page d'inscription</p>

    <!-- Signup button -->
    <div class="grid place-content-center">
        <NuxtLink class="border border-white text-white text-center p-2 rounded-2xl">
            Continuer avec Google
        </NuxtLink>
    </div>

    <p id="divider" class="text-center font-bold text-xl divide-cyan-950">
        <span>OU</span>
    </p>

    <div class="p-2">
        <form action="#" method="post">
            <label for="first_name" class="grid gap-1">
                Nom
                <Input:button></Input:button>
            </label>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'auth-layout'
})
</script>
