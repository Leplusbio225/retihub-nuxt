<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const open = ref(false)

const links = [
    [
        {
            label: 'Dashboard',
            icon: 'i-lucide-house',
            to: '/dashboard',
            class: 'text-[#BF6BC7] font-bold',
            onSelect: () => {
                open.value = false
            },
            active: true
        },
        {
            label: 'Inbox',
            icon: 'i-lucide-inbox',
            to: '/inbox',
            badge: '4',
            onSelect: () => {
                open.value = false
            }
        }, {
            label: 'Paramètres',
            to: '/parametres',
            icon: 'i-lucide-settings',
            defaultOpen: true,
            type: 'trigger',
            children: [{
                label: 'General',
                to: '/settings',
                exact: true,
                onSelect: () => {
                    open.value = false
                }
            }, {
                label: 'Members',
                to: '/settings/members',
                onSelect: () => {
                    open.value = false
                }
            }, {
                label: 'Notifications',
                to: '/settings/notifications',
                onSelect: () => {
                    open.value = false
                }
            }, {
                label: 'Security',
                to: '/settings/security',
                onSelect: () => {
                    open.value = false
                }
            }]
        }
    ],
] satisfies NavigationMenuItem[][]

const groups = computed(() => [{
    id: 'links',
    label: 'Aller à',
    items: links.flat()
},])


</script>

<template>
    <UDashboardGroup unit="rem">
        <UDashboardSidebar id="default" v-model:open="open" collapsible resizable class="bg-elevated/25"
            :ui="{ footer: 'lg:border-t lg:border-default' }">
            <template #header="{ collapsed }">
                <Logo v-if="collapsed" class="h-5 w-auto shrink-0" />
                <Logo v-else class="h-5 w-auto shrink-0" />
            </template>

            <template #default="{ collapsed }">
                <UDashboardSearchButton :collapsed="collapsed" class="bg-transparent ring-default" />

                <UNavigationMenu color="brand" :collapsed="collapsed" :items="links[0]" orientation="vertical" tooltip
                    popover />

                <UNavigationMenu color="brand" :collapsed="collapsed" :items="links[1]" orientation="vertical" tooltip
                    class="mt-auto" />
            </template>

            <template #footer>
                <UDropdownMenu>


                    <UButton variant="ghost" color="neutral" class="flex items-center justify-between w-full">
                        <p>
                            <UAvatar src="https://github.com/benjamincanac.png" :chip="{
                                inset: true
                            }" />
                            <span>
                                Jhon Doe
                            </span>
                        </p>
                        <UIcon name="i-lucide-chevrons-up-down" class="size-5" />
                    </UButton>

                </UDropdownMenu>
            </template>
        </UDashboardSidebar>

        <UDashboardSearch :groups="groups" />

        <slot />

    </UDashboardGroup>
</template>