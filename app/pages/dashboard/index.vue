<template>
    <UDashboardPanel>
        <template #header>
            <UDashboardNavbar title="Dashboard">
                <template #right>
                    <UButton color="neutral" icon="i-lucide-bell" variant="ghost" />

                </template>
            </UDashboardNavbar>
        </template>



        <template #body>
            <div class="flex justify-between items-center">
                <p>Type d'objet</p>

                <UButton icon="i-lucide-plus" size="md" color="primary" variant="ghost">Publier un objet</UButton>
            </div>

            <div class="grid grid-cols-2 gap-2">

                <section class="h-40 rounded-sm border border-slate-500 bg-radial from-[#685bf823]">
                    <div class="space-y-2">
                        <p class="flex items-center justify-between p-2">
                            <UAvatar src="~/assets/svg/lost-icon.svg" alt="Lost item icon" />
                            <span class="font-bold text-xs">Objets perdus</span>
                        </p>

                    </div>

                    <div class="p-2 mt-4">
                        <p>

                        </p>
                    </div>

                </section>



                <section class="h-40 rounded border border-slate-500 bg-radial from-[#f5af192b] to-[#f1271128]">
                    <div class="space-y-2">
                        <p class="flex items-center justify-between p-2">
                            <UAvatar src="~/assets/svg/lost-icon.svg" alt="Lost item icon" />
                            <span class="font-bold text-xs">Objets collectés</span>
                        </p>

                    </div>

                    <div>
                        <p></p>
                    </div>
                </section>

            </div>

            <section>

            </section>
        </template>
    </UDashboardPanel>

</template>

<script setup lang="ts">

definePageMeta({
    layout: 'dashboard-layout',
    middleware: 'auth'
})

useSeoMeta({
    title: "Dashboard - RetiHub",
    description: "Dashboard principale de la plateforme RetiHub"
})
</script>