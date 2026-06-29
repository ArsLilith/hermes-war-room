// Custom dark-neon skin: force dark mode regardless of any stored preference.
export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()
  colorMode.preference = 'dark'
  colorMode.value = 'dark'
  if (import.meta.client) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  }
})
