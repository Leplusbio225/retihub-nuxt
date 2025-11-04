<template>

    <div class="grid p-2 space-y-10! mt-8">
        <div class="p-2 space-y-1.5">
            <h3 class="text-4xl">Bienvenue sur le Hub✨,</h3>
            <p class="text-2xl">Expérimentez la puissance du matching 🪄.</p>
        </div>

        <!-- Search bar -->

        <div>

        </div>

        <!-- Most recent posts -->

        <div class="p-3 space-y-4">
            <p class="text-slate-300">
                Les plus recents
            </p>
            <section class="flex flex-wrap space-x-4 space-y-3 ">

                <div v-for="i in 8" :key="i"
                    class="space-y-2 p-2 rounded-xl border border-slate-300 size-[200px] bg-gray-300">
                    <div class="h-[100px] w-full bg-gray-400 rounded-xl">

                    </div>
                    <div class="flex justify-between gap-2">
                        <p class="p-2 h-5 w-full bg-gray-400 rounded"></p>
                        <p class="p-2 h-5 w-full bg-gray-400 rounded"></p>
                        <p class="p-2 h-5 w-full bg-gray-400 rounded"></p>
                    </div>

                    <p class="p-2 h-5 w-full bg-gray-400 rounded-xl animate-pulse"></p>
                    <div class="flex items-center justify-between">
                        <p class="p-2 h-5 w-2/4 bg-gray-400 rounded-xl animate-pulse"></p>
                        <p class="p-2 h-5 w-1/4 bg-[#BF6BC7] rounded-xl animate-pulse"></p>

                    </div>
                </div>
            </section>
        </div>

        <!-- Most popular -->

        <div class="p-3 space-y-4">
            <p class="text-slate-300">
                Les plus populaires
            </p>

            <section class="flex flex-wrap space-x-4 space-y-3 ">

                <div v-for="i in 15" :key="i"
                    class="space-y-2 p-2 rounded-xl border border-slate-300 size-[200px] bg-gray-300">
                    <div class="h-[100px] w-full bg-gray-400 rounded-xl">

                    </div>
                    <div class="flex justify-between gap-2">
                        <p class="p-2 h-5 w-full bg-gray-400 rounded"></p>
                        <p class="p-2 h-5 w-full bg-gray-400 rounded"></p>
                        <p class="p-2 h-5 w-full bg-gray-400 rounded"></p>
                    </div>

                    <p class="p-2 h-5 w-full bg-gray-400 rounded-xl animate-pulse"></p>
                    <div class="flex items-center justify-between">
                        <p class="p-2 h-5 w-2/4 bg-gray-400 rounded-xl animate-pulse"></p>
                        <p class="p-2 h-5 w-1/4 bg-blue-600 rounded-xl animate-pulse"></p>

                    </div>
                </div>
            </section>
        </div>
    </div>

</template>