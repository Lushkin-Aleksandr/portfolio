export const getThemeFromLocalStorage = () => {
  const currentTheme = window.localStorage.getItem('theme')

  if (!currentTheme) {
    return null
  }

  return currentTheme
}

export const setThemeToLocalStorage = (theme: string) => {
  window.localStorage.setItem('theme', theme)
}
