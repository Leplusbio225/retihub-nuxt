<template>
    <UDashboardPanel>
        <template #header>
            <UDashboardNavbar title="Dashboard">
                <!-- <p>Hello</p> -->

                <!-- <UDashboardSidebarCollapse /> -->

            </UDashboardNavbar>
        </template>
    </UDashboardPanel>
</template>

<script setup>

definePageMeta({
    layout: 'dashboard-layout'
})

useSeoMeta({
    title: "Dashboard - RetiHub",
    description: "Dashboard principale de la plateforme RetiHub"
})

</script>