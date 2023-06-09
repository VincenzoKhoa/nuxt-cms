export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser()
  if (user.value) {
    navigateTo('/')
  } else {
    navigateTo('/login')
  }
})
