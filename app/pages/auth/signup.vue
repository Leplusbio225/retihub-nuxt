<template>
    <div class="flex justify-center items-center gap-2">
        <Logo/>
        <span>-</span>
        <p class="text-center">Page d'inscription</p>


    </div>
    <div class="grid p-2 bg-[#652aa433] space-y-4 max-w-[350px] min-w-[350px] rounded">

        <!-- Signup button -->
        <div class="w-full grid place-content-center mt-4 ">
            <GoogleSignInButton class="rounded"></GoogleSignInButton>
        </div>

        <p class="text-center mt-4 text-gray-300">
            OU
        </p>

        <div class="p-2">
            <UForm :schema="schema" :state="state" @submit="onSubmit" class="p-2 space-y-4">
                <UFormField label="Nom et prénoms" required>
                    <UInput v-model="state.name" class="w-full" size="lg" placeholder="Entrer votre nom" />
                </UFormField>
                <UFormField label="Adresse email" required>
                    <UInput v-model="state.email" class="w-full" size="lg" placeholder="example@email.com" />
                </UFormField>
                <UFormField label="Mot de passe" required>
                    <UInput v-model="state.password" class="w-full" size="lg" placeholder="Entrer votre mot de passe" />
                </UFormField>

                <p class="my-4 text-sm">Déjà un compte ? <NuxtLink to="/auth/login"
                        class="text-purple-600 font-bold hover:underline transition-all">Connectez-vous ici.</NuxtLink>
                </p>


                <UButton type="submit" size="lg" class="flex justify-center w-full text-center">
                    S'inscrire
                </UButton>
            </UForm>
        </div>
    </div>
</template>

<script setup lang="ts">
import { object, string } from 'yup'
import type { InferType } from 'yup';
import type { FormSubmitEvent } from '@nuxt/ui';

const schema = object({
    name: string().required("Le champ nom est obligatoire"),
    email: string().lowercase().email('Email invalide').required(),
    password: string().min(8, "Entrer un mot de passe d'au moins 8 caractères")
})

type Schema = InferType<typeof schema>

const state = reactive({
    name: undefined,
    email: undefined,
    password: undefined
})

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
}


definePageMeta({
    layout: 'auth-layout'
})

</script>

<style scoped>
button {
    box-shadow: 1px 1px 8px #000000bd;

    transition: all .5s;
}

button:hover {
    box-shadow: 1px 1px 1px #000;
}
</style>
