<template>
    <section class="grid place-content-center space-y-4 mt-8">
        <div class="space-y-2">
            <h2 class="font-bold text-6xl text-center">
                Retrouvez vos objets perdus
            </h2>
            <h2 class="font-bold text-6xl text-center">en toute sécurité</h2>
            <p class="text-[#5c636e]  text-center">
                Publie, match et retrouve - juste en quelques clics
            </p>
        </div>
        <div class="flex gap-4 items-center justify-center">
            <Button text="Poster un objet perdu"
                class="bg-[#152949] text-white border-2 border-blue-700 hover:shadow-blue-300" />
            <Button text="Poster un objet trouvé"
                class="bg-[#152949] text-[#BF6BC7] border-[#BF6BC7] hover:shadow-purple-300 border" />
        </div>
    </section>

    <section class="grid space-y-4 mt-16! p-2">
        <div class="p-2 space-y-6">
            <div class="grid backdrop-blur-3xl bg-blue-500/30 rounded p-8">
                <p class="text-shadow-xs text-shadow-black text-xl  font-light text-center uppercase">Tout le
                    processus en 03 actions. Pas plus !</p>
                <ul class="grid grid-cols-3 gap-2 p-4 space-y-4 mt-8 justify-between">
                    <li class="text-sm text-center space-y-2 ">
                        <span class="flex items-center">
                            <img width="20" src="/assets/svg/phone.svg" alt="phone svg" />
                            Publier un objet perdu
                        </span>
                        <img width="300" class="rounded" src="/assets/landing-page-img-1.png"
                            alt="illustration image" />
                        <p class="text-shadow-xs text-shadow-black text-white text-xl font-bold">
                            1
                        </p>
                    </li>
                    <li class="text-sm text-center space-y-2">
                        <span class="flex items-center">
                            <img width="20" src="/assets/svg/notification.svg" alt="phone svg" />
                            Recevoir des notifications de matching
                        </span>
                        <img width="300" class="rounded" src="/assets/matching.png" alt="illustration image" />
                        <p class="text-shadow-xs text-shadow-black text-white text-xl font-bold">
                            2
                        </p>
                    </li>
                    <li class="text-sm text-center space-y-2">
                        <span class="flex items-center">
                            <img width="20" src="/assets/svg/match.svg" alt="phone svg" />
                            Retrouver l'objet perdu
                        </span>
                        <img width="300" class="rounded" src="/assets/finding.png" alt="illustration image" />
                        <p class="text-shadow-xs text-shadow-black text-white text-xl font-bold">
                            3
                        </p>
                    </li>
                </ul>
            </div>

            <section class="mt-16! space-y-8!">
                <div class="space-y-1 mt-8 italic">
                    <p class="text-4xl">
                        Les <span class="text-red-500" style="text-shadow: 1px 1px 1px  #9f0712;">chiffres </span>
                        <span>témoignent</span>,
                    </p>
                    <p class="text-4xl">
                        Notre
                        <span class="text-[#bf6bc7]" style="text-shadow: 1px 1px 1px  #6e11b0;">communauté</span>
                        également.
                    </p>
                </div>

                <div class="grid grid-cols-3 space-x-2 gap-2 my-4 relative">
                    <div class="h-[200px] rounded-xl bg-[#18335d36] px-4 py-2">
                        <p class="text-2xl font-bold italic">17.5K</p>
                        <p>Membres inscrits</p>
                        <p class="my-1 p-1">
                            <img class="h-30" src="~/assets/confetti.png" alt="confetti emoji">
                        </p>
                    </div>
                    <div class="h-[200px] rounded-xl bg-[#18335d36] px-4 py-2">
                        <p class="text-2xl font-bold italic">13.5K</p>
                        <p>Posts partagés</p>

                        <p class="my-1 p-1">
                            <!--  🗳️ -->
                            <img class="h-30" src="~/assets/poste.png" alt="poste emoji">
                        </p>
                    </div>
                    <div class="h-[200px] rounded-xl bg-[#18335d36] px-4 py-2">
                        <p class="text-2xl font-bold italic">12.7K</p>
                        <p>Objets retrouvés</p>

                        <p class="my-1 p-1">
                            <!-- 🪄 -->
                            <img class="h-30" src="~/assets/magic.png" alt="magic emoji">
                        </p>
                    </div>
                </div>

                <!-- Bouton visiter le hub -->
            </section>


        </div>
    </section>
</template>

<script setup>
useSeoMeta({
    title: "Page d'accueil - RetiHub",
    description: "Découvrez RetiHub, la plateforme qui vous permet de retrouver vos objets perdus."
})
</script>