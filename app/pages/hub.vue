<template>

    <div class="grid p-2 space-y-10! mt-8">
        <div class="p-2 space-y-1.5">
            <h3 class="text-4xl">Bienvenue sur le Hub✨,</h3>
            <p class="text-2xl">Expérimentez la puissance du matching 🪄.</p>
        </div>

        <!-- Search bar -->

        <div>

        </div>

        <!-- Lost things -->

        <div class="p-3 space-y-4">
            <div class="space-y-4">
                <p class="text-slate-300 underline">
                    Objets perdus récemment
                </p>
                <p
                    class="text-sm border border-dashed border-orange-400 rounded-xl inline-flex items-center gap-1 p-2 bg-orange-600/15">
                    <span>
                        <img src="~/assets/svg/exclamation.svg" alt="icon">
                    </span>
                    <span>
                        <i class="font-bold text-2xl relative">"</i> J'ai retrouvé un objet figurant dans cette liste <i
                            class="font-bold text-2xl relative">"</i> <br>
                        <i>[Cliquez sur l'objet ou la publication en question si c'est le cas.]</i>
                    </span>
                </p>
            </div>
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

        <!-- Finding things -->

        <div class="p-3 space-y-4">
            <div class="space-y-4">
                <p class="text-slate-300 underline">
                    Objets retrouvés récemment
                </p>
                <p
                    class="text-sm items-center gap-1 border border-dashed border-orange-400 rounded-xl inline-flex p-2 bg-orange-600/15">
                    <span>
                        <img src="~/assets/svg/exclamation.svg" alt="icon">
                    </span>
                    <span>
                        <i class="font-bold text-2xl relative">"</i> J'ai perdu un objet figurant dans cette liste <i
                            class="font-bold text-2xl relative">"</i> <br>
                        <i>[Cliquez sur l'objet ou la publication en question si c'est le cas.]</i>
                    </span>
                </p>
            </div>

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