export default defineNuxtRouteMiddleware((from, to) => {
    if(isGuest) {
        return navigateTo('/auth/login')
    }
})

const isGuest = ref(true)