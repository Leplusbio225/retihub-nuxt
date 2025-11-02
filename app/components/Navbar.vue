<template>
    <nav style="text-shadow: 1px 1px 1px #000"
        class="py-2 px-4 border-[#bf6bc798] border text-[18px] shadow flex justify-between items-center text-white mx-2 rounded-full backdrop-blur-2xl bg-[#ffffff0d]">
        <div class="text-2xl text-[#BF6BC7] font-bold">
            <NuxtLink to="/" class="flex items-center">
                RetiHub
                <img width="25" src="~/assets/svg/logo.svg" alt="logo RetiHub" />
            </NuxtLink>

        </div>

        <div class="flex gap-4">
            <NuxtLink to="/">Accueil</NuxtLink>
            <NuxtLink to="/hub">Le Hub✨</NuxtLink>
            <NuxtLink to="/about">À propos</NuxtLink>
        </div>

        <div>
            <NuxtLink to="#">Mon espace</NuxtLink>
        </div>
    </nav>
</template>