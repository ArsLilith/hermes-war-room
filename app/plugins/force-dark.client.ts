// Best-effort dark: apply a root inversion class (the app is hardcoded light,
// so the normal color-mode toggle does not affect its custom styles).
export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const apply = () => document.documentElement.classList.add('hwr-dark-invert')
    apply()
    new MutationObserver(apply).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  }
})
